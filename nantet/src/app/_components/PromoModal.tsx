"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Calendar, MapPin, ArrowRight } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  const whatsappLink = `https://wa.me/556182795960?text=${encodeURIComponent(
    "Olá Carolina! Vi o aviso do Aulão Mova-se Sem Dor no site e gostaria de garantir minha vaga gratuita para o dia 23/08!"
  )}`;

  useEffect(() => {
    // Abre o modal automaticamente 5.5 segundos após carregar o site (logo após a intro)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenClosed(true);
  };

  return (
    <>
      {/* Botão Flutuante Discreto para Reabrir o Banner se o Usuário Fechar */}
      {hasBeenClosed && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-zinc-900/90 border border-emerald-500/40 text-white hover:bg-emerald-600 hover:border-emerald-400 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 group"
          aria-label="Ver Evento Promocional"
        >
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:text-white animate-pulse" />
          <span>Aulão Gratuito 23/08</span>
        </button>
      )}

      {/* Modal Popup do Banner Promocional */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-lg sm:max-w-xl max-h-[92vh] bg-zinc-950 border border-emerald-500/30 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.25)] overflow-hidden flex flex-col transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Popup */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-zinc-900/90">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Evento Gratuito • 23/08
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Fechar banner promocional"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Imagem do Banner / Card Promo */}
            <div className="relative flex-grow overflow-auto p-3 sm:p-4 flex flex-col items-center justify-center bg-zinc-900/40">
              <div className="relative w-full aspect-[3/4] max-h-[58vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/cardPromo.jpeg"
                  alt="Aulão Mova-se Sem Dor - Carolina Nantet"
                  fill
                  sizes="(max-width: 640px) 95vw, 550px"
                  className="object-contain bg-black"
                  priority
                />
              </div>

              {/* Resumo rápido abaixo da imagem */}
              <div className="w-full mt-3 flex items-center justify-between text-xs text-zinc-300 px-1">
                <span className="flex items-center gap-1 font-medium text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" /> 23 de Agosto (Dom) às 10h
                </span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Eixão (7 Norte)
                </span>
              </div>
            </div>

            {/* Footer do Popup - Botões de Ação */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleClose}
                className="w-full sm:w-auto text-xs text-zinc-400 hover:text-zinc-200 transition-colors py-2 px-3 text-center sm:text-left"
              >
                Continuar no site
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsappLogo weight="fill" className="w-5 h-5 text-white" />
                <span>Garantir Vaga no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
