import { Metadata } from "next"



export const metadata: Metadata = {
    title: 'Pagina deprecios',
    description: 'Cuanto cuesta armar tu landing page',
    keywords: ['Cuanto cuesta hacer una landing page', 'Landin page son caras?', 'Cuanto tiempo dura el desarrollo de una landing page']
}



export default function PricingPage() {
    return (
        <section className="flex flex-col items-center min-h-screen">
            <span className="text-7xl">Pricing Page</span>
        </section>
    )
}