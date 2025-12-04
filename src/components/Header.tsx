"use client";

import { MessageCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ButtonCTA from './ButtonCTA';
import { NAV_ITEMS } from '@/constants/navigation';
import { NavItem } from './NavItem';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const scrollToSection = (id: string) => {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm shadow-lg z-50">
            <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Gestoría Digital"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col">
                            <span className="text-white text-lg leading-tight">Gestoría</span>
                            <span className="text-amber-400 text-lg leading-tight">Digital</span>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <NavItem
                                key={item.id}
                                id={item.id}
                                label={item.label}
                                onClick={scrollToSection}
                                className="text-gray-200 hover:text-amber-400 transition-colors"
                            />
                        ))}

                        <ButtonCTA
                            title="WhatsApp"
                            style="bg-green-500 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
                        />
                    </nav>

                    <div className="flex lg:hidden items-center gap-4">
                        <ButtonCTA
                            style="text-green-400 hover:text-green-300"
                        />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-slate-700">
                        <div className="flex flex-col gap-4">

                            {NAV_ITEMS.map((item) => (
                                <NavItem
                                    key={item.id}
                                    id={item.id}
                                    label={item.label}
                                    onClick={scrollToSection}
                                    className="text-gray-200 hover:text-amber-400 transition-colors text-left py-2"
                                />
                            ))}

                            <ButtonCTA
                                title="Contactar por WhatsApp"
                                style="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mt-2"
                            />
                        </div>
                    </nav>
                )}
            </div>
        </header >
    );
}