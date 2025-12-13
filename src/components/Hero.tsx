"use client";

import { useScrollToSection } from "@/hooks/useScrollToSection";
import ButtonCTA from "./ButtonCTA";
import { CheckCircle } from "lucide-react";

export default function Hero() {
    const { scrollToSection } = useScrollToSection();

    return (
        <>
            <section
                id="home"
                className="relative flex-1 flex flex-col items-center gap-10 px-6 justify-around pt-4 xl:pb-16"
                style={{ marginTop: 'var(--header-height, 0px)' }}
            >
                <div className="absolute inset-0 bg-slate-900/85" aria-hidden="true" />
                <div className="relative z-10 max-w-7xl mx-auto sm:px-8 lg:px-8 text-center">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <h1 className="text-white mb-8 text-[36px] sm:text-5xl lg:text-5xl leading-tight font-bold">
                                Gestión Experta en Automotor, Judicial y Previsional a Nivel Nacional
                            </h1>
                            <h2 className="text-gray-300 mb-10 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                                Dirigida por una mandataria matriculada, nuestra gestoría nacional te ofrece soluciones rápidas, legales y confiables. Olvídate de los trámites complicados: nosotros lo hacemos por vos.
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <ButtonCTA
                                title="Contactar Ahora"
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2 text-lg font-semibold"
                            />

                            <button
                                onClick={() => scrollToSection("services")}
                                className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all inline-flex items-center justify-center gap-2 text-lg"
                            >
                                Ver Servicios
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-4 lg:pt-0 xl:mt-24 2xl:mt-40">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-sm sm:text-base">+500 clientes satisfechos</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Respuestas en menos de 24 horas</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full" />
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Atención personalizada</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-0 sm:h-0 md:h-12 xl:h-12 2xl:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </section >
        </>
    );
}