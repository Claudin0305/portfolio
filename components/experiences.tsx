'use client'
import { motion } from 'framer-motion'

const experiences = [
    {
        company:
            'Institut des Sciences, des Technologies et des Études Avancées d’Haïti',
        period: '2023 - Aujourd’hui',
        role: 'Analyste Développeur',
        bullets: [
            'Recueillir les besoins des utilisateurs',
            'Rédiger les spécifications techniques',
            'Optimiser les bases de données',
        ],
    },
    {
        company: 'QUEED',
        period: 'Fév 2023 - Aujourd’hui',
        role: 'Analyste Développeur (temps partiel)',
        bullets: [
            'Proposer des fonctionnalités aux clients',
            'Assurer le développement et le déploiement',
            'Accompagner les nouveaux membres de l’équipe',
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold"
            >
                Expériences professionnelles
            </motion.h2>

            <div className="mt-6 space-y-6">
                {experiences.map((e) => (
                    <motion.div
                        key={e.company}
                        whileHover={{ scale: 1.01 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <div className="font-semibold">{e.company}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {e.role}
                                </div>
                            </div>
                            <div className="text-sm text-gray-400 mt-1 md:mt-0">
                                {e.period}
                            </div>
                        </div>
                        <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                            {e.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
