'use client'
import { motion } from 'framer-motion'


const projects = [
    { title: 'Gestion Étudiants', desc: 'Application web pour gérer les étudiants et notes', link: 'https://github.com/Claudin0305/gestion-etudiants' },
    { title: 'Système d’inventaire', desc: 'Application d’inventaire développée avec Django Rest et React', link: 'https://github.com/Claudin0305/inventaire' },
    { title: 'Portfolio Personnel', desc: 'Site personnel moderne basé sur Next.js', link: '#' }
]


export default function Projects() {
    return (
        <section id="projects">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-2xl font-semibold">Projets</motion.h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <motion.a key={p.title} href={p.link} target="_blank" rel="noopener" whileHover={{ y: -6 }} className="block p-4 rounded-lg bg-white dark:bg-gray-800 border shadow-sm hover:shadow-md transition">
                        <div className="font-semibold">{p.title}</div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
