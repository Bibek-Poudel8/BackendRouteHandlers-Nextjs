import { request } from 'http';
import { NextResponse } from 'next/server';

export const users=[
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 28
  },
  {
    "id": 2,
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "age": 35
  },
  {
    "id": 3,
    "name": "Carla Martinez",
    "email": "carla.martinez@example.com",
    "age": 24
  }
]


export function GET(request) {
  try {

    const searchParams = request.nextUrl.searchParams;
    const nameFilter = searchParams.get('name');
    const emailFilter = searchParams.get('email');
    const ageFilter = searchParams.get('age');

    let filteredUsers = users;

    if (nameFilter) {
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    
    if (emailFilter) {
      filteredUsers = filteredUsers.filter(user =>
        user.email.toLowerCase().includes(emailFilter.toLowerCase())
      );
    }

    if (ageFilter) {
      const ageNumber = parseInt(ageFilter);
      if (!isNaN(ageNumber)) {
        filteredUsers = filteredUsers.filter(user => user.age === ageNumber);
      }
    }

    return NextResponse.json({ 
      success: true,
      data: filteredUsers,
      total: filteredUsers.length
    });

    // return NextResponse.json({ 
    //   success: true,
    //   data: users,
    //   total: users.length
    // });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}


