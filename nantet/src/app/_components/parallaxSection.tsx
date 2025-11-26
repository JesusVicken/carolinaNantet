// "use client"

// import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
// import Image from "next/image"

// export default function ParallaxSection() {
//     return (
//         <section className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden">
//             <ParallaxBanner className="w-full h-full">
//                 {/* Camada da imagem */}
//                 <ParallaxBannerLayer speed={-30}> {/* quanto mais negativo, mais lento o movimento */}
//                     <Image
//                         src="/parallax.webp"
//                         alt="Carolina Nantet Fisioterapeuta"
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </ParallaxBannerLayer>

//                 {/* Overlay com texto */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
//                         Carolina Nantet Fisioterapeuta
//                     </h2>
//                 </div>
//             </ParallaxBanner>
//         </section>
//     )
// }



"use client"

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax"
import Image from "next/image"

export default function ParallaxSection() {
    return (
        <section className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden">
            <ParallaxBanner className="w-full h-full">
                {/* Camada da imagem da seção */}
                <ParallaxBannerLayer speed={-25}>
                    <Image
                        src="/parallax.jpg" 
                        alt="Carolina Nantet Fisioterapeuta"
                        fill
                        className="object-cover"
                        priority
                    />
                </ParallaxBannerLayer>

                {/* Overlay com texto
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
                        Carolina Nantet Fisioterapeuta
                    </h2>
                </div> */}
            </ParallaxBanner>
        </section>
    )
}
