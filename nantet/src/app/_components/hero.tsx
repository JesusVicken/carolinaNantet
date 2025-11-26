'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check } from "lucide-react"
import Carolina from "../../../public/nantet.hero.jpg"
import CarolinaDesktop from "../../../public/nantet.hero.desktop.jpg" 
import Image from "next/image"

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá Carolina! Vi seu site e gostaria de mais informações sobre as aulas de Pilates e treinos personalizados."
  )

  return (
    <section className="bg-[#060505] text-white relative overflow-hidden">
      {/* Imagem de fundo para mobile */}
      <div>
        <Image
          src={Carolina}
          alt='Carolina Nantet em aula de Pilates'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
          style={{ objectPosition: 'center 40%' }}
        />
        <div className='absolute inset-0 bg-black opacity-20 md:hidden'></div>
      </div>

      <div className='container mx-auto pt-16 pb-16 px-4 relative'>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

          {/* Bloco de texto */}
          <div className='space-y-6' data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold leading-10">
              Pilates e Treinamento com <br className="hidden md:block" />Carolina Nantet
            </h1>

            <p className="text-lg text-gray-300">
              Fisioterapeuta especialista em dor crônica, performance atlética e condicionamento físico.
            </p>

            {/* Benefícios e indicações */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Benefícios do Pilates */}
              <div>
                <p className="text-base md:text-lg font-semibold mb-2">
                  Benefícios do Pilates:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Redução de dores crônicas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Melhora da postura e consciência corporal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Força e estabilidade do core
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Flexibilidade e mobilidade
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Recuperação e prevenção de lesões
                  </li>
                </ul>
              </div>

              {/* Indicado para quem busca */}
              <div>
                <p className="text-base md:text-lg font-semibold mb-2">
                  Indicado para quem busca:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Qualidade de vida e bem-estar
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Melhor performance esportiva
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Condicionamento físico seguro
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Controle e equilíbrio corporal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Alívio de estresse e tensão
                  </li>
                </ul>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="mt-4">
              <a
                href={`https://wa.me/556182795960?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md hover:bg-green-700 transition"
              >
                <WhatsappLogo className='w-5 h-5' />
                Contato via WhatsApp
              </a>
            </div>
          </div>

          {/* Imagem lateral para desktop (nova imagem) */}
          <div
            className="hidden md:block relative w-full h-[400px] rounded-3xl overflow-hidden"
            data-aos="zoom-in"
          >
            <Image
              src={CarolinaDesktop} // usa a nova imagem desktop
              alt="Carolina Nantet - Pilates e Fisioterapia"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300 transition-transform"
              style={{ objectPosition: 'center center' }} // mostra a imagem completa
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}
