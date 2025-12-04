"use client";
import { OWNER } from '@/constants/company';
import { IButtonCTAProps } from '@/interfaces/buttonCTA.interface';
import { MessageCircle } from 'lucide-react';

export default function ButtonCTA({ title, style }: IButtonCTAProps) {

    return (
        <a
            href={`https://wa.me/${OWNER.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className={style ? style : ''}
        >
            <MessageCircle className="w-4 h-4" />
            {title ? title : ''}
        </a>
    );
}