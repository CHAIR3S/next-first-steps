import Link from "next/link";
import {HomeIcon} from '@primer/octicons-react';
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'}   
]


export const Navbar = () => {

    console.log('Navbar creada'); //Este console, se ve en los logs de la aplicacion misma, no en el navegador por el SSR, aun deshabilitandose js se sigue ejecutando


  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <Link href={'/'} className="flex items-center" >
            <HomeIcon className='mr-2'/>
            <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>
        
        {
            navItems.map(navItem => (
                <ActiveLink   key={navItem.path} {... navItem}/> 

                // key se usa para identificar de forma unica un elemento que se esta renderizando, sirve para que next pueda detectar y realizar un seguimiento de los cambios en los elementos de la lista de manera eficiente
            ))
        }


        {/* <Link href="/about" className="mr-2">About</Link>
        <Link href="/pricing" className="mr-2">Pricing</Link>
        <Link href="/contact" className="mr-2">Contact</Link> */}

    </nav>
  )
}
