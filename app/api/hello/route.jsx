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


export function GET() {
  try {
    return NextResponse.json({ 
      success: true,
      data: users,
      total: users.length
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}