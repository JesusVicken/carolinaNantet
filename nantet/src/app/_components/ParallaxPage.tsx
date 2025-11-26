"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import {
    CheckCircle2,
    Activity,
    ShieldCheck,
    ArrowRight,
    Sparkles
} from "lucide-react";

interface ParallaxSectionData {
    id: number;
    videoSrc: string;
    title: string;
    subtitle?: string;
    overlayGradient: string;
    badge?: string;
    contentTitle: string;
    contentBody: React.ReactNode;
}

const sectionsData: ParallaxSectionData[] = [
    {
        id: 1,
        videoSrc: "https://res.cloudinary.com/dutbdeta6/video/upload/C0004_-_Cor_fjxwyi.mp4",
        title: "Carol Nantet",
        subtitle: "Fisioterapia & Pilates",
        overlayGradient: "linear-gradient(to bottom, rgba(39, 174, 96, 0.4) 0%, rgba(44, 62, 80, 0.9) 100%)",
        contentTitle: "Excelência em Movimento",
        contentBody: (/* ...mesmo conteúdo */ null),
    },
    {
        id: 2,
        videoSrc: "https://res.cloudinary.com/dutbdeta6/video/upload/C0005_-_Cor_kaatmg.mp4",
        title: "Pilates Terapêutico",
        overlayGradient: "linear-gradient(to bottom, rgba(52, 152, 219, 0.4) 0%, rgba(44, 62, 80, 0.9) 100%)",
        contentTitle: "Corpo Forte, Mente Equilibrada",
        contentBody: (null),
    },
    {
        id: 3,
        videoSrc: "https://res.cloudinary.com/dutbdeta6/video/upload/C0008_-_Cor_enbpmm.mp4",
        title: "Fisioterapia Preventiva",
        overlayGradient: "linear-gradient(to bottom, rgba(155, 89, 182, 0.4) 0%, rgba(44, 62, 80, 0.9) 100%)",
        contentTitle: "Longevidade Ativa",
        contentBody: (null),
    },
    {
        id: 4,
        videoSrc: "https://res.cloudinary.com/dutbdeta6/video/upload/C0011_-_Cor_iwegdu.mp4",
        title: "Viver Sem Dor",
        overlayGradient: "linear-gradient(to bottom, rgba(192, 57, 43, 0.5) 0%, rgba(44, 62, 80, 0.95) 100%)",
        badge: "Especialista em Dor",
        contentTitle: "Tratamento de Dor Crônica",
        contentBody: (null),
    },
    {
        id: 5,
        videoSrc: "https://res.cloudinary.com/dutbdeta6/video/upload/C0014_-_Cor_gdzvo9.mp4",
        title: "Inicie Sua Transformação",
        overlayGradient: "linear-gradient(to bottom, rgba(230, 126, 34, 0.4) 0%, rgba(44, 62, 80, 0.9) 100%)",
        contentTitle: "",
        contentBody: (null),
    },
];

const ParallaxSlide = ({
    videoSrc,
    title,
    subtitle,
    overlayGradient,
    badge
}: {
    videoSrc: string;
    title: string;
    subtitle?: string;
    overlayGradient: string;
    badge?: string;
}) => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <ParallaxBanner className="w-full h-full">
                <ParallaxBannerLayer speed={-20} className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </ParallaxBannerLayer>

                <div className="absolute inset-0 z-[2] mix-blend-multiply" style={{ background: overlayGradient }} />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-[2]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-[3] px-6">
                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
                        {badge && (
                            <span className="mb-6 bg-red-600/90 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                                {badge}
                            </span>
                        )}
                        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-2xl">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light tracking-wide max-w-2xl drop-shadow-md">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </ParallaxBanner>
        </section>
    );
};

const ContentSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <section className="py-20 md:py-32 bg-white relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                {title && (
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
                            {title}
                        </h2>
                        <div className="w-16 h-1.5 bg-[#27ae60] mx-auto rounded-full"></div>
                    </div>
                )}
                <div className="text-slate-600">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default function ParallaxPage() {
    return (
        <div className="w-full font-sans antialiased bg-white">
            <main>
                {sectionsData.map((section) => (
                    <div key={section.id} className="relative">
                        <ParallaxSlide {...section} />
                        <ContentSection title={section.contentTitle}>
                            {section.contentBody}
                        </ContentSection>
                    </div>
                ))}
            </main>
        </div>
    );
}
