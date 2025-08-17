import { ReactNode } from "react";
import Image from 'next/image'
import Styles from '@/styles/sections/header.module.css'

/**
 * @description Header du site
 * @returns {ReactNode}
 */
const Header = (): ReactNode => {
    return (<header className={Styles.header}>
        <h1>Romain Fouillaron<span className={'blinkingUnderscore'}>_</span></h1>
        <p>conception d'applications web et mobile</p>
        <p>site vitrine ~ e-commerce ~ Référencement SEO</p>   
        <Image src="/images/logo.png" alt="logo" width={200} height={200} />
    </header>)
}

export default Header;