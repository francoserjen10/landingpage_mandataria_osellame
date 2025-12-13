import { SERVICES } from '@/constants';
import { ServiceCard } from './ServiceCard';

export function Services() {

    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="py-24 bg-gradient-to-br from-slate-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-20">
                    <span className="text-amber-600 mb-3 block font-semibold text-sm tracking-widest uppercase">Mis Servicios</span>
                    <h2 id="services-title" className="text-gray-900 mb-6">
                        Soluciones Integrales para tus Trámites
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Ofrezco servicios especializados en las áreas de automotor, judicial y créditos prendarios,
                        garantizando eficiencia y profesionalismo en cada gestión.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {SERVICES.map(service => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}