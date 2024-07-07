import { Metadata } from "next"



export const metadata: Metadata = {
    title: 'About page',
    description: 'Sobre nosotros pagina SEO',
    keywords: ['Landing pages', 'Equipo desarrollo', 'Posicionamiento web']
}

export default function AboutPage() {
    return (
            <span className="text-7xl">About Page</span>
    )
}