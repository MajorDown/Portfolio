import { ReactNode } from "react"
import Styles from "@/styles/texts/SectionTitle.module.css";

type SectionTitleProps = {
    label: string
    position: 'left' | 'right'
}

/**
 * @description Composant pour afficher un titre de section
 * @param {string} props.label - Le label du titre de section
 * @param {'left' | 'right'} props.position - La position du titre de section
 * @returns {ReactNode}
 */
const SectionTitle = (props: SectionTitleProps): ReactNode => {
    return (<div className={props.position === 'left' ? Styles.titleOnLeft : Styles.titleOnRight}>
        <h2>{props.label}</h2>
    </div>)
}

export default SectionTitle