import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { URL } from 'url';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let jwtToken = request.cookies.get('authorization');

    if(jwtToken){
        // search for decoded jwt in database
        const user = null;
        if(user){
            if(request.nextUrl.pathname.startsWith('/auth')){
                return NextResponse.redirect(new URL('/explore', request.url));
            }
            return NextResponse.next();
        }
        else{
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }
    else{
        if(request.nextUrl.pathname.startsWith('/signup')){
            return NextResponse.redirect(new URL('/auth/signup', request.url));
        }

        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', '/explore/:path*', '/create/:path*', '/auth:path*'],
  }