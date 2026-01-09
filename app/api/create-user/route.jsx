import { users } from "../hello/route";

export async function POST(request) {
try {
    const {name, email, age} = await request.json();


    if(!name || !email || !age) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
}
const emailExists = users.find(user => user.email === email)
    if(emailExists) {
        return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 409 });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        age,
    };

    users.push(newUser);

    return new Response(JSON.stringify({ 
        success: true,
        data: users,
        message: 'User created successfully'
    }), { status: 201 });
} catch (error) {   
    return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
    
}
}