import { IService } from "@/interfaces/services.interface";
import { Car, FileText, Scale } from "lucide-react";

export const SERVICES: IService[] = [
    {
        icon: Car,
        title: 'Trámites Automotor',
        description: 'Transferencias de vehículos, altas, bajas, cambios de radicación, duplicados de cédulas y títulos.',
        features: [
            'Transferencias de vehículos',
            'Inscripción inicial',
            'Cambio de radicación',
            'Duplicados de documentación',
            'Verificación policial'
        ]
    },
    {
        icon: Scale,
        title: 'Gestiones Judiciales',
        description: 'Asesoramiento y gestión en trámites judiciales relacionados con automotor y documentación legal.',
        features: [
            'Oficios judiciales',
            'Inhibiciones',
            'Levantamiento de medidas',
            'Consultas de dominio',
            'Trámites sucesorios'
        ]
    },
    {
        icon: FileText,
        title: 'Créditos Prendarios',
        description: 'Gestión completa de prendas vehiculares, desde la inscripción hasta la cancelación.',
        features: [
            'Inscripción de prendas',
            'Cancelación de prendas',
            'Consulta de gravámenes',
            'Tramitación ante el Registro',
            'Asesoramiento crediticio'
        ]
    }
];