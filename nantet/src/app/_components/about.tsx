

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

          {/* IMAGEM PRINCIPAL */}
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

            {/* Logo menor sobreposto */}
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

          {/* BLOCO DE TEXTO */}
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
                especializada em dor crônica, performance atlética e condicionamento físico.
                Minha missão é ajudar pessoas a viverem sem dor, alcançando saúde, qualidade
                de vida e evolução constante através do movimento.
              </p>
            </div>

            {/* FORMAÇÃO */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Formação e Especializações
              </h3>
              <ul className="space-y-2 text-base text-gray-700">
                {[
                  "Graduada em Fisioterapia pela Universidade Paulista de Brasília",
                  "Residente em Fisioterapia Neurofuncional pela Universidade de Brasília",
                  "Pós-graduada em Reabilitação Cardiopulmonar pela Universidade Paulista de Brasília",
                  "Pós-graduada em Fisioterapia Traumato-Ortopédica e Desportiva pela CEAF",
                  "Especialista em Dry Needling e Terapias Anti-dor pelo Instituto CEFISA",
                  "Instrutora de Pilates há 9 anos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPERIÊNCIA */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                Experiência Profissional
              </h3>
              <ul className="space-y-2 text-base text-gray-700">
                {[
                  "Fisioterapeuta do Tribunal Superior Eleitoral",
                  "Atendimento de pessoas com dores crônicas e agudas",
                  "Promoção de qualidade de vida e conscientização sobre o estudo da dor",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CHAMADA PARA AÇÃO */}
            <div className="pt-4 space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Quer saber mais ou agendar sua{" "}
                <strong className="text-gray-900">aula de pilates</strong>?
                Me chama no WhatsApp que vou te ajudar!
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  target="_blank"
                  href="https://wa.me/556182795960?text=Olá%20Carolina!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20personalizada."
                  className="bg-green-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300"
                >
                  <WhatsappLogo className="w-5 h-5" />
                  <span>Falar com Carolina</span>
                </a>

                <a
                  target="_blank"
                  href="https://wa.me/556182795960?text=Olá%20Carolina!%20Quero%20entrar%20no%20grupo%20de%20treinos%20ou%20saber%20mais%20sobre%20seu%20trabalho."
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <WhatsappLogo className="w-5 h-5" />
                  <span>Grupo de Treinos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
