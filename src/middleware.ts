import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default async function middleware(request: any) {
  // console.log("Middleware processing:", request.url);
  const response = await createMiddleware(routing)(request);
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};