import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const userId = parseInt(id);
        
        // Parse body first
        const body = await request.json();
        
        // Find user
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        
        // Validate that at least one field is provided (optional)
        if (Object.keys(body).length === 0) {
            return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
        }
        
        // Update user (partial update)
        users[userIndex] = {
            ...users[userIndex],
            ...body,
            id: userId  // Ensure ID cannot be changed
        };
        
        return NextResponse.json({ 
            success: true,
            data: users[userIndex],
            message: 'User updated successfully'
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}