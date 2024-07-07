import { Metadata } from "next"



export const metadata : Metadata = {
    title: 'Pagina de contacto',
    description: 'Contactar servicio landing page',
    keywords: ['Posicionamiento web', 'SEO', 'Negocio atractivo']
}

export default function ContactPage() {
    return (
        <section className="flex flex-col items-center min-h-screen">
            <span className="text-7xl">Contact Page</span>
        </section>
    )
}