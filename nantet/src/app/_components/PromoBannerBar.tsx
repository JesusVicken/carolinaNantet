"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight, X } from "lucide-react";

export function PromoBannerBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollToPromo = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("evento-promocional");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-emerald-950 via-zinc-900 to-green-950 text-white text-xs sm:text-sm border-b border-emerald-500/30 py-2.5 px-4 z-40">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
          <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px] sm:text-xs uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Gratuito</span>
          </span>

          <span className="font-semibold text-zinc-100 flex items-center gap-1.5 truncate">
            <Calendar className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 hidden sm:inline" />
            <span>Aulão Mova-se Sem Dor — 23 de Agosto (Domingo, 10h) no Eixão</span>
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#evento-promocional"
            onClick={scrollToPromo}
            className="group inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full transition-all duration-200"
          >
            <span>Ver Detalhes</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
