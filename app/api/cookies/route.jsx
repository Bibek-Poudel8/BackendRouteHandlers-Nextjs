import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  // Read cookies from request
  const cookieStore = await cookies();
//   const theme = cookieStore.get("theme")?.value || "light";
//   const resultsPerPage = cookieStore.get("resultsPerPage")?.value || "10";
  
//   console.log("Theme Cookie:", theme);
//   console.log("Results Per Page Cookie:", resultsPerPage);
// cookieStore.set("visited", "true", { path: "/" });
cookieStore.delete("visited", { path: "/" });
return NextResponse.json({message:"Cookie Deleted!"})
// return NextResponse.json(
//     { message: "setting cookies", resultsPerPage },
//     {
//         status: 200,
//         headers: {
//             "Set-Cookie": "resultsPerPage=20; Path=/; HttpOnly",
//         },
//     }
// );
}