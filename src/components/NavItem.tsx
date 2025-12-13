"use client";

import { INavItemProps } from "@/interfaces/navItem.interface";

export function NavItem({ id, label, onClick, className }: INavItemProps) {
    return (
        <a
            href={`#${id}`}
            onClick={(e) => {
                e.preventDefault();
                onClick(id);
            }}
            className={className}
        >
            {label}
        </a>
    );
}