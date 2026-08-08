"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  HeartHandshake,
  Sun,
  Droplet,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

export function PromoEvent() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const whatsappLink = `https://wa.me/556182795960?text=${encodeURIComponent(
    "Olá Carolina! Gostaria de garantir minha vaga gratuita no Aulão Mova-se Sem Dor do dia 23/08!"
  )}`;

  return (
    <section id="evento-promocional" className="relative bg-zinc-950 py-16 md:py-24 overflow-hidden border-y border-emerald-950/40">
      {/* Background Glow Efeitos */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header do Evento */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-inner">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Evento Especial Gratuito</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Aulão <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">Mova-se Sem Dor</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-xl font-light italic max-w-2xl mx-auto">
            "Desperte seu corpo, libere as dores e retome a sua liberdade de movimento."
          </p>
        </div>

        {/* Grid Principal: Flyer Promo + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Coluna do Flyer Image (Card Visual Moderno) */}
          <div className="lg:col-span-5 flex flex-col items-center" data-aos="fade-right">
            <div className="relative group w-full max-w-md bg-zinc-900/80 p-3 rounded-3xl border border-white/10 shadow-2xl hover:border-emerald-500/50 transition-all duration-500">
              
              {/* Badge no topo do card */}
              <div className="absolute top-6 left-6 z-20 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-emerald-400/30">
                23 DE AGOSTO
              </div>

              {/* Imagem do Card Promo */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer group/img"
              >
                <Image
                  src="/cardPromo.jpeg"
                  alt="Aulão Mova-se Sem Dor - Carolina Nantet"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  priority
                />

                {/* Overlay de Hover para Ampliar */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium">
                  <Maximize2 className="w-6 h-6 text-emerald-400" />
                  <span className="text-sm">Clique para ampliar</span>
                </div>
              </div>

              {/* Legenda inferior */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-zinc-400">
                <span>📍 Eixão do Lazer (7 Norte)</span>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4"
                >
                  Ver Cartaz Completo
                </button>
              </div>
            </div>
          </div>

          {/* Coluna das Informações e Detalhes */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8" data-aos="fade-left">
            
            {/* Bloco Data & Localização */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Data & Horário</span>
                    <h4 className="text-white font-bold text-base sm:text-lg">23 de Agosto</h4>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm font-medium">Domingo, às 10h da manhã</p>
              </div>

              <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Localização</span>
                    <h4 className="text-white font-bold text-base sm:text-lg">Eixão do Lazer</h4>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm">Brasília/DF (na altura da 7 Norte)</p>
              </div>

            </div>

            {/* Para Quem é & O Que Faremos */}
            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-400" />
                <span>O que você vai vivenciar no Aulão:</span>
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                {[
                  "Prática leve e transformadora ao ar livre",
                  "Foco no alívio de tensões e mobilidade",
                  "Reconexão com o próprio corpo",
                  "Indicado para quem sente dores ou corpo travado",
                  "Segurança no movimento com Fisioterapeuta",
                  "Aberto a todos os públicos e idades!",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* O que levar */}
            <div className="flex flex-wrap items-center gap-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-4 text-xs sm:text-sm text-emerald-200">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                💡 O que levar:
              </span>
              <div className="flex flex-wrap gap-2 text-zinc-300">
                <span className="bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-blue-400" /> Garrafinha d'água
                </span>
                <span className="bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400" /> Canga ou tapete de prática
                </span>
                <span className="bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 text-yellow-400" /> Protetor solar
                </span>
              </div>
            </div>

            {/* Botão Principal de Inscrição via WhatsApp */}
            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <WhatsappLogo weight="fill" className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                <span>Garantir Vaga Gratuita no WhatsApp</span>
              </a>
              <p className="text-center sm:text-left text-xs text-zinc-400 mt-2.5">
                Evento 100% Gratuito • Vagas limitadas por organização do espaço
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal do Cartaz Promo */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-zinc-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950">
              <h3 className="text-white font-bold text-base sm:text-lg">
                Cartaz Promocional - Aulão Mova-se Sem Dor
              </h3>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Fechar cartaz"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem Modal */}
            <div className="relative flex-grow overflow-auto p-4 flex justify-center items-center bg-black/40">
              <Image
                src="/cardPromo.jpeg"
                alt="Cartaz Aulão Mova-se Sem Dor"
                width={800}
                height={1000}
                className="w-auto h-auto max-h-[70vh] object-contain rounded-xl shadow-xl"
              />
            </div>

            {/* Footer Modal CTA */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-zinc-300 text-sm text-center sm:text-left">
                <strong>23/08 (Domingo) às 10h</strong> • Eixão do Lazer (7 Norte)
              </span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <WhatsappLogo weight="fill" className="w-5 h-5" />
                <span>Inscrever-se pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
