"use client";

import { INavItemProps } from "@/interfaces/navItem.interface";

export function NavItem({ id, label, onClick, className }: INavItemProps) {
    return (
        <>
            <button
                onClick={() => onClick(id)}
                className={className}
            >
                {label}
            </button>
        </>
    );
}