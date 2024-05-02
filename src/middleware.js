export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/pages", "/pages/0/inicio", "/pages/1/proyectos", "/pages/2/ideas",
    "/pages/3/desarrolladores", "/pages/4/perfil", "/pages/5/ayuda" ]
    }