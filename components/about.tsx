'use client'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold"
            >
                À propos
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed"
            >
                Étant titulaire d’une Licence en informatique, je cherche à élargir mes
                connaissances dans le domaine de l’intelligence artificielle et de la
                science des données. Passionné de technologie et de communication,
                curieux, motivé et attentif, j’aime apprendre et partager pour créer des
                solutions concrètes et utiles à la communauté informatique.
            </motion.p>
        </section>
    )
}
