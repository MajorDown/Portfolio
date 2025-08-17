import { ReactNode } from "react"
import Link from "next/link"
import Styles from '@/styles/sections/NavSection.module.css'

const NavSection = (): ReactNode => {
    return (<nav id={Styles.navSection}>
        <ul>
            <li className={Styles.onLeft}><Link href={'/experience'}>mon parcours</Link></li>
            <li className={Styles.onRight}><Link href={'/stack'}>ma stack</Link></li>
            <li className={Styles.onLeft}><Link href={'/portfolio'}>mon portfolio</Link></li>
            <li className={Styles.onRight}><Link href={'/contact'}>me contacter</Link></li>
        </ul>
    </nav>)
}

export default NavSection;