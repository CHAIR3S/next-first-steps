'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

import  style  from './ActiveLink.module.css';

interface Props {

    path: string,
    text: string

}



export const ActiveLink = ({path, text}: Props) => {

    const pathName = usePathname();
    console.log(pathName)


  return (
    <Link 
    // prefetch={true} Por defecto es true, sirve para evitar cargar antes de que se metan al link para que parezca una SPA
    href={path} 
        className={ (path === pathName) ? style.link + ' ' + style['active-link'] : style.link}>
        
        {text}
    </Link>
  )
}
