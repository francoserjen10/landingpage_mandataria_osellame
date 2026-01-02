import { IService } from "@/interfaces/services.interface";
import { Car, FileText, Landmark, Scale, ShieldCheck, UserCheck } from "lucide-react";

export const SERVICES: IService[] = [
    {
        icon: Car,
        title: 'Trámites Automotor',
        description: 'Gestión integral para Motos, Autos, Camionetas, Maquinas viales, Embarcaciones, Trailers',
        features: [
            'Transferencias',
            'Informes',
            'Infracciones',
            'Denuncia de venta',
            'Denuncia de compra y posesión',
            'Patentes',
            'Altas y bajas',
            'Verificacion',
            'Cambio de motor',
            'Arba',
            'Municipalidades',
            'Sellados',
            'Ubicacion de titulares',
            'Secuentros',
            'Sucesiones',
            'Duplicados',
            'Extravios',
            'Boletos de compra-venta',
            'Formularios',
        ]
    },
    {
        icon: Scale,
        title: 'Gestiones Judiciales',
        description: '',
        features: [
            'Sucesiones',
            'Diligenciamientos',
            'Oficios - Cedulas',
            'Inscripciones',
            'Pedidos de actas',
            'Ubicacion y seguimiento de expedientes',
        ]
    },
    {
        icon: Landmark,
        title: 'Administritivos',
        description: '',
        features: [
            'Registros de la propiedad inmueble RPI',
            'Pedidos de actas',
            'ARBA',
            'Consulados',
            'ARCA'
        ]
    },
    {
        icon: UserCheck,
        title: 'Previsional',
        description: '',
        features: [
            'Jubilaciones',
            'Pensiones',
            'Reajustes',
            'Reclamos',
            'ANSES',
            'I.P.S.'
        ]
    },
    {
        icon: ShieldCheck,
        title: 'Seguros',
        description: '',
        features: [
            "Asesoramiento personalizado",
            "Búsqueda de la mejor opción disponible",
            "Cotizaciones al instante",
            "Orientación según cada necesidad",
        ]
    }
];