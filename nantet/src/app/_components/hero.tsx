'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check } from "lucide-react"
import Carolina from "../../../public/nantet.hero.jpg"
import Image from "next/image"

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá Carolina! Vi seu site e gostaria de mais informações sobre os treinamentos personalizados e reabilitação funcional."
  )

  return (
    <section className="bg-[#060505] text-white relative overflow-hidden">

      {/* Imagem de fundo mobile */}
      <div>
        <Image
          src={Carolina}
          alt='Carolina Nantet - Fisioterapeuta especialista em reabilitação funcional'
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

          {/* Texto */}
          <div className='space-y-6' data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold leading-10">
              Treinamento com <br className="hidden md:block" />
              <span className="text-green-400">Carolina Nantet</span>
            </h1>

            <p className="text-lg text-gray-300">
              Fisioterapeuta especialista em reabilitação funcional,
              dor crônica e condicionamento físico.
            </p>

            {/* Benefícios e indicações */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-base md:text-lg font-semibold mb-2 text-green-400">
                  Benefícios do treinamento:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  {[
                    "Mais tempo de qualidade com a sua família sem dor",
                    "Melhora da postura e consciência corporal",
                    "Autonomia e Liberdade para se movimentar",
                    "Restauração do sono",
                    "Flexibilidade e mobilidade",
                    "Recuperação e prevenção de lesões",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-base md:text-lg font-semibold mb-2 text-green-400">
                  Indicado para quem busca:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  {[
                    "Qualidade de vida e bem-estar",
                    "Melhorar performance esportiva",
                    "Condicionamento físico seguro",
                    "Controle e equilíbrio corporal",
                    "Alívio de dores e tensões musculares",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mt-4">
              <a
                href={`https://wa.me/556182795960?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md hover:bg-green-700 transition hover:scale-105 duration-300"
              >
                <WhatsappLogo className='w-5 h-5' />
                <span className="font-medium">Entrar em Contato</span>
              </a>
              <p className="text-sm text-gray-400 mt-3">
                Transforme sua saúde com treinamento especializado e seguro
              </p>
            </div>
          </div>

          {/* VIDEO DESKTOP COM AOS */}
          <div
            className="hidden md:block relative w-full h-[400px] rounded-3xl overflow-hidden group"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* Vídeo */}
            <video
              src="/nantet3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="
                w-full h-full object-cover 
                scale-105 group-hover:scale-110 
                transition-all duration-[2500ms] ease-out
              "
            />

            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

            {/* Badge sobre o vídeo */}
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-medium text-white">
                Reabilitação Funcional Personalizada
              </p>
            </div>
          </div>

        </article>
      </div>

    </section>
  )
}