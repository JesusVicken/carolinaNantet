'use client'

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
} from 'lucide-react'

import treinoPresencial from '../../../public/cris1.jpg'
import treinoOnline from '../../../public/cris2.jpg'
import canoaHavaiana from '../../../public/nantet7.jpg'
import mobilidade from '../../../public/cris4.jpg'
import musculacao from '../../../public/cris6.jpg'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
    {
        title: 'Aulas Presenciais de Pilates',
        description:
            'Sessões individuais ou em grupo com foco em dor crônica, mobilidade, força e consciência corporal.',
        duration: 'Flexível conforme sua agenda',
        icon: <Dumbbell className="w-6 h-6 text-white" />,
        linkText:
            'Olá Carolina! Gostaria de mais informações sobre as aulas presenciais de Pilates.',
        image: treinoPresencial,
    },
    {
        title: 'Pilates Online e Acompanhamento',
        description:
            'Aulas via vídeo com planos personalizados, adaptados ao seu ritmo e necessidade, para praticar de qualquer lugar.',
        duration: 'A qualquer hora, no seu ritmo',
        icon: <Laptop className="w-6 h-6 text-white" />,
        linkText: 'Olá Carolina! Quero saber como funcionam as aulas online e o acompanhamento.',
        image: treinoOnline,
    },
    {
        title: 'Pilates para Performance Atlética',
        description:
            'Treinos específicos para atletas ou quem deseja melhorar força, estabilidade, mobilidade e prevenção de lesões.',
        duration: 'Sessões semanais ou conforme necessidade',
        icon: <Trophy className="w-6 h-6 text-white" />,
        linkText: 'Olá Carolina! Tenho interesse em Pilates focado em performance atlética.',
        image: canoaHavaiana,
    },
    {
        title: 'Alongamento, Mobilidade e Yoga',
        description:
            'Práticas que promovem bem-estar, flexibilidade e redução de dores, com foco em qualidade de vida e consciência corporal.',
        duration: 'Sessões individuais ou em grupo',
        icon: <StretchHorizontal className="w-6 h-6 text-white" />,
        linkText: 'Olá Carolina! Quero saber mais sobre alongamento, mobilidade e yoga.',
        image: mobilidade,
    },
    {
        title: 'Pilates para Condicionamento Físico',
        description:
            'Treinos para força, resistência, equilíbrio e postura, combinando técnicas de fisioterapia e Pilates.',
        duration: 'Programação personalizada',
        icon: <Activity className="w-6 h-6 text-white" />,
        linkText: 'Olá Carolina! Quero participar das aulas de Pilates focadas em condicionamento físico.',
        image: musculacao,
    },
]

export function Tours() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: 'trimSnaps',
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        })
    }, [])

    return (
        <section className="bg-gradient-to-b from-zinc-900 to-black py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Quer melhorar sua mobilidade, força e bem-estar?
                    </h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto">
                        Conheça as aulas de Pilates e treinos personalizados da Carolina Nantet, com foco em dor crônica, performance atlética e condicionamento físico.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-2">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-zinc-900/80 text-white rounded-xl p-5 h-full flex flex-col space-y-4 border border-zinc-700 hover:border-zinc-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10">
                                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex-1 flex items-start gap-3">
                                            <div className="p-2 bg-zinc-800 rounded-lg">{item.icon}</div>
                                            <div>
                                                <h3 className="font-bold text-lg md:text-xl mb-1 text-white">{item.title}</h3>
                                                <p className="text-zinc-300 text-sm select-none">{item.description}</p>
                                            </div>
                                        </div>

                                        <div className="border-t border-zinc-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2 sm:hidden" data-aos="fade-up" data-aos-delay="100">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>
        </section>
    )
}
