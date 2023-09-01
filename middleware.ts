//protect entire project
export { default } from 'next-auth/middleware'

//protect specific routes
//use a matcher to protect specific routes
export const config = {
    matcher: ["/settings"]
}