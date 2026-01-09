import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PUT(request, { params }) {
    try {
        const {id} = await params;
        const userId = parseInt(id);
        const { name, email, age} = await request.json();

        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
           if(!name || !email || !age) {
                return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        
    
        users[userIndex] = {
            id: userId,
            name:name,
            email:email,
            age:age,
        };
        return NextResponse.json({ 
            success: true,
            data: users[userIndex],
            message: 'User updated successfully'
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
        
    }}