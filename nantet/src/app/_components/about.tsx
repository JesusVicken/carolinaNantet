"use client"

import Image from "next/image"
import nantet from "../../../public/nantet.about.jpg"
import cpp2 from "../../../public/logo2.jpg"
import { Check } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 text-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGEM PRINCIPAL - MANTIDA IGUAL */}
          <div
            className="relative group"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={nantet}
                alt="Carolina Nantet - Pilates e Fisioterapia"
                fill
                quality={100}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Logo menor sobreposto - MANTIDA IGUAL */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 right-4 -bottom-10 rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm hidden md:block border border-gray-200">
              <Image
                src={cpp2}
                alt="Logo Carolina Nantet"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* BLOCO DE TEXTO - ATUALIZADO COM NOVOS TEXTOS */}
          <div
            className="space-y-8"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Sobre Mim
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Olá! Sou <strong className="text-gray-900">Carolina Nantet</strong>, fisioterapeuta
                especialista em reabilitação funcional e dor crônica. Minha missão, como
                <strong className="text-gray-900"> Fisioterapeuta e Proprietária do Estúdio</strong>,
                é restaurar a liberdade do movimento, capacitando cada paciente a viver sem dor
                e com a máxima performance funcional.
              </p>
            </div>

            {/* FORMAÇÃO - ATUALIZADA */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Formação e Especializações
              </h3>
              <ul className="space-y-2 text-base text-gray-700">
                {[
                  "Graduada em Fisioterapia pela Universidade Paulista de Brasília",
                  "Residente em Fisioterapia Neurofuncional pela Universidade de Brasília",
                  "Pós-graduada em Fisiologia do exercício pela Universidade Paulista de Brasília",
                  "Pós-graduada em Fisioterapia Traumato-Ortopédica e Desportiva pela CEAF",
                  "Certificada em Pilates clássico (Romana Kryzanowska)",
                  "Certificada em Dry Needling e terapias anti-dor pelo instituto CEFISA",
                  "Certificada em 3DMAPS & CAFS pelo Gray Institute",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPERIÊNCIA - ATUALIZADA */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Experiência Profissional
              </h3>
              <ul className="space-y-2 text-base text-gray-700">
                {[
                  "Atuação em clínicas como a Fisioclin e o Instituto Torp academia, focada na reabilitação ortopédica e neurológica",
                  "Vasta experiência como Instrutora de Pilates solo e máquina em estúdios, incluindo Studio IGB e UNIC-Studio Living Brasil, com formação completa desde 2015 e experiência com programas específicos para crianças",
                  "Atuou como Fisioterapeuta no TSE (Tribunal Superior Eleitoral), onde foi responsável pela reabilitação funcional ortopédica",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CHAMADA PARA AÇÃO - MANTENDO O ESTILO ORIGINAL MAS ATUALIZANDO TEXTO */}
            <div className="pt-4 space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Quer saber mais sobre reabilitação funcional ou agendar sua{" "}
                <strong className="text-gray-900">avaliação personalizada</strong>?
                Me chama no WhatsApp que vou te ajudar!
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/556182795960?text=Olá%20Carolina!%20Gostaria%20de%20agendar%20uma%20avaliação%20ou%20saber%20mais%20sobre%20seu%20trabalho%20na%20reabilitação%20funcional."
                  className="bg-green-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300"
                >
                  <WhatsappLogo className="w-5 h-5" />
                  <span>Agendar Avaliação</span>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/556182795960?text=Olá%20Carolina!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Pilates%20e%20programas%20específicos%20do%20estúdio."
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <WhatsappLogo className="w-5 h-5" />
                  <span>Conhecer o Estúdio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}