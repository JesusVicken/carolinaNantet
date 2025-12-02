'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
    ChevronLeft,
    ChevronRight,
    Clock,
    Dumbbell,
    Laptop,
    Trophy,
    StretchHorizontal,
    Activity,
    ArrowRight,
    MessageCircle
} from 'lucide-react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Importe suas imagens aqui como antes
import treinoPresencial from '../../../public/cris1.jpg'
import treinoOnline from '../../../public/nantet.jpg'
import canoaHavaiana from '../../../public/nantet7.jpg'
import mobilidade from '../../../public/cris4.jpg'
import musculacao from '../../../public/123.jpg'
import geriatrica from '../../../public/geriatra.jpg'
import prevenção from '../../../public/lesoes.jpg'

const services = [
    {
        title: 'Aulas de Pilates',
        description: 'Sessões individuais ou em grupo com foco em dor crônica, mobilidade, força e consciência corporal.',
        duration: 'Flexível',
        icon: <Dumbbell className="w-5 h-5" />,
        linkText: 'Olá Carolina! Gostaria de mais informações sobre as aulas presenciais de Pilates.',
        image: treinoPresencial,
    },
    {
        title: 'Fisioterapia Pós-Cirúrgica',
        description: 'Reabilitação essencial para restaurar a função, aliviar a dor e acelerar o retorno às atividades diárias.',
        duration: 'No seu ritmo',
        icon: <Laptop className="w-5 h-5" />,
        linkText: 'Olá Carolina! Quero saber como funciona a fisioterapia no pós-operatório.',
        image: treinoOnline,
    },
    {
        title: 'Performance Atlética',
        description: 'Treinos para atletas ou quem deseja melhorar força, estabilidade, mobilidade e prevenção de lesões.',
        duration: 'Semanal',
        icon: <Trophy className="w-5 h-5" />,
        linkText: 'Olá Carolina! Tenho interesse em treinamentos focado em performance atlética.',
        image: canoaHavaiana,
    },
    {
        title: 'Alongamento e Mobilidade',
        description: 'Práticas que promovem bem-estar, flexibilidade e redução de dores, com foco em qualidade de vida.',
        duration: 'Individual/Grupo',
        icon: <StretchHorizontal className="w-5 h-5" />,
        linkText: 'Olá Carolina! Quero saber mais sobre alongamento e mobilidade.',
        image: mobilidade,
    },
    {
        title: 'Pilates Condicionamento',
        description: 'Treinos para força, resistência, equilíbrio e postura, combinando técnicas de fisioterapia e Pilates.',
        duration: 'Personalizado',
        icon: <Activity className="w-5 h-5" />,
        linkText: 'Olá Carolina! Quero participar das aulas de Pilates focadas em condicionamento físico.',
        image: musculacao,
    },
    {
        title: 'Fisioterapia Geriátrica',
        description: 'Promover saúde e funcionalidade para +65 anos. Melhora equilíbrio, coordenação e previne quedas.',
        duration: 'Personalizado',
        icon: <Activity className="w-5 h-5" />,
        linkText: 'Olá Carolina! Quero informações sobre a fisioterapia geriátrica.',
        image: geriatrica,
    },
    {
        title: 'Prevenção de Lesões',
        description: 'Abordagem estruturada para reduzir riscos no esporte através de análise de fatores e cargas de treino.',
        duration: 'Personalizado',
        icon: <Dumbbell className="w-5 h-5" />,
        linkText: 'Olá Carolina! Quero informações sobre a prevenção de lesões.',
        image: prevenção,
    },
]

export function Tours() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        containScroll: 'trimSnaps',
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)

        // Cleanup
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect])

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        })
    }, [])

    return (
        <section className="relative bg-zinc-950 py-20 overflow-hidden">
            {/* Background Decorativo (Glow) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header da Seção */}
                <div className="text-center mb-16 space-y-4" data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium tracking-wide">
                        Nossos Serviços
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Saúde e Performance <span className="text-zinc-500">em foco</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Conheça as aulas de Pilates e treinos personalizados da Carolina Nantet, projetados para cada etapa da sua jornada física.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group/carousel" data-aos="fade-up" data-aos-delay="100">

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-5 touch-pan-y">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="pl-5 flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0"
                                >
                                    <div className="group relative h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col">

                                        {/* Imagem Wrapper */}
                                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                            {/* Gradiente sobre a imagem para leitura do ícone se necessário */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />

                                            {/* Badge/Ícone Flutuante */}
                                            <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur text-emerald-400 p-2.5 rounded-xl border border-white/10 shadow-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                                {item.icon}
                                            </div>
                                        </div>

                                        {/* Conteúdo */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex-grow space-y-3">
                                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Footer do Card */}
                                            <div className="mt-6 pt-4 border-t border-white/5 space-y-4">
                                                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    <span>{item.duration}</span>
                                                </div>

                                                
                                                <a
                                                    href={`https://wa.me/5561982795960?text=${encodeURIComponent(item.linkText)}`} 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 hover:bg-emerald-600/20 border border-white/5 hover:border-emerald-500/50 text-white group/btn transition-all duration-300"
                                                >
                                                    <span className="text-sm font-semibold">Saiba mais</span>
                                                    <ArrowRight className="w-4 h-4 text-emerald-500 group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navegação - Botões Laterais (Desktop) */}
                    <button
                        onClick={scrollPrev}
                        className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700 text-white shadow-xl backdrop-blur-sm hover:bg-emerald-600 hover:border-emerald-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={!emblaApi?.canScrollPrev()}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700 text-white shadow-xl backdrop-blur-sm hover:bg-emerald-600 hover:border-emerald-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={!emblaApi?.canScrollNext()}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Navegação - Pontos (Mobile e Desktop) */}
                <div className="flex justify-center mt-10 gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                ? 'w-8 bg-emerald-500'
                                : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                                }`}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}