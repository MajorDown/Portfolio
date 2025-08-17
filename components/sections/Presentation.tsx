import { ReactNode } from "react";
import Image from "next/image";
import SectionTitle from "@/components/texts/SectionTitle";
import Styles from "@/styles/sections/Presentation.module.css";

const Presentation = (): ReactNode => {
    return (<section>
            <SectionTitle label="Une présentation s'impose..." position="right" />
            <div className={Styles.container}>
                <Image
                    src={"/images/profil.jpg"}
                    alt="ma tête"
                    className={Styles.profil}
                    width={300}
                    height={300} 
                />
                <p>
                    Je suis développeur web et mobile. Je forge vos outils de travail sur-mesure.
                    Même avant de savoir coder, j'ai toujours adoré créer mes propres outils :
                    De la feuille de calcul Excel hyper complexe pour élaborer des factures ou des commandes,
                    jusqu'à la création de scripts bash / shell pour automatiser les tâches les plus délicates...
                    l'important, c'était de trouver des solutions adaptées à chaque besoin.
                </p>
                <p>
                    Aujourd'hui, cette passion est devenue mon métier, et Excel à laissé place à des outils encore plus puissants.
                    Spécialiste de l'écosystème Node.js / React / Typescript, mais également ouvert à d'autre technologies, 
                    je suis en mesure de répondre à tout vos besoins :
                    API, application web, mobile ou , site vitrine, e-commerce.. les possibilités sont vastes.. pour ne pas dire infinies.
                </p>
            </div>
    </section>);
}

export default Presentation;