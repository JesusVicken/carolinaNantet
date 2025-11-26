

'use client'

import { Parallax } from 'react-scroll-parallax'
import { WhatsappLogo } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const phrases = [
    "Carolina Nantet Fisioterapeuta",
    "Agende uma aula de Pilates",
    "Especialista em Dor Crônica",
    "Performance Atlética",
    "Condicionamento Físico"
]

export default function HeroPilates() {
    const [index, setIndex] = useState(0)
    const phraseRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!phraseRef.current) return

        gsap.set(phraseRef.current, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: 'brightness(1)',
        })

        const ctx = gsap.context(() => {
            gsap.to(phraseRef.current, {
                y: -80,
                autoAlpha: 0,
                scale: 0.9,
                rotate: 3,
                filter: 'brightness(0.5)',
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: phraseRef.current,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                },
            })
        }, phraseRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            className="relative h-[90vh] md:h-[95vh] lg:h-screen overflow-hidden"
            data-aos="fade-up"
        >
            {/* Vídeo de background */}
            <Parallax speed={-20} className="absolute inset-0">
                <video
                    src="/nantet2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                />
            </Parallax>

            {/* Overlay para contraste */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 px-4 space-y-8">

                {/* Logo no topo central */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                        src="/logo1.png"
                        alt="Logo"
                        className="w-32 sm:w-40 md:w-48 lg:w-56"
                    />
                </div>

                {/* Texto principal */}
                <div ref={phraseRef} className="w-full max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center px-4 leading-tight drop-shadow-lg"
                        >
                            {phrases[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Botão WhatsApp
                <div
                    className="mt-2 animate-bounce hover:animate-none transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="https://wa.me/556182795960?text=Olá%Carolina.%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas%20de%20Pilates."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 text-base sm:text-lg font-medium"
                        aria-label="Entrar em contato no WhatsApp"
                    >
                        <WhatsappLogo weight="fill" className="w-6 h-6 sm:w-7 sm:h-7" />
                        <span>Agende uma aula</span>
                    </a>
                </div> */}
            </div>
        </div>
    )
}
