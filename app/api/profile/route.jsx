import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
    const headersList = await headers();
    const authHeader = headersList.get("Authorization");


    // //Access request header
    // const requestHeaders = new Headers(request.headers);
    // const authHeader = requestHeaders.get("Authorization");
    console.log("Authorization Header:", authHeader);
//   return new Response("<h1>Profile</h1>",{
//     headers: { "Content-Type": "text/html",
//         "X-Custom-Header": "Next.JS",
//      }
//   });
const response = NextResponse.json({
    message: "This is the profile API endpoint",
    
  });
  response.headers.set("X-Profile-Header", "ProfileAPI");
  return response;  
 }


