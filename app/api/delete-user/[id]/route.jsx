import { NextResponse } from "next/server";
import { users } from "../../hello/route";

    export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        const userId = parseInt(id);
        
        // Find user
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        
        // Remove user from the array
        users.splice(userIndex, 1);
        
        return NextResponse.json({ 
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}   



