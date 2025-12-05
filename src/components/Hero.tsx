"use client";

export default function Hero() {
    return (
        <>
            <section
                className="relative flex-1 flex flex-col items-center gap-10 px-6 justify-around"
                style={{ marginTop: 'var(--header-height, 0px)' }}
            >
                <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
                <div className="relative flex flex-col items-center text-center max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl gap-4">
                    <h3>Primer texto del hero</h3>
                    <h1>Gestión Experta en Automotor, Judicial y Previsional a Nivel Nacional</h1>
                    <h2>Gestión profesional desde Olavarría para todo el país. Trámites complejos, resueltos con seriedad, precisión y acompañamiento</h2>
                </div>
                <div className="relative flex flex-col gap-12">
                    <div className="flex gap-8 justify-center">
                        {/* Hacerlos componentes reutilizables */}
                        <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition">
                            Boton de contacto
                        </button>
                        <button className="bg-transparent border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                            Boton de ver servicios
                        </button>
                    </div>
                    <div className="text-center">
                        <p>+500 clientes satisfechos * Respuestas en menos de 24 horas * Atención personalizada</p>
                    </div>
                </div>
            </section>
        </>
    );
}