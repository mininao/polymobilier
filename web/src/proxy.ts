import { authkitProxy } from '@workos-inc/authkit-nextjs';

export default authkitProxy();

export const config = {
  matcher: [
    // Match all paths except static files and api routes that don't need auth
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
