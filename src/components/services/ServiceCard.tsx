import { IService } from "@/interfaces/services.interface";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {

    const Icon = service.icon;
    return (
        <div className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-400 hover:-translate-y-1 group">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-gray-900 mb-4">
                {service.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
            </p>

            <ul className="space-y-3">
                {service.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-normal text-base">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}