import { useEffect } from "react";

/**
 * Custom Hook: useHeaderHeight
 *
 * Observa la altura del Header y sincroniza esa altura con la variable CSS
 * global `--header-height`, permitiendo ajustar otras secciones de la interfaz
 * sin usar valores estáticos.
 *
 * Se actualiza automáticamente ante cambios de tamaño del header
 * (responsive, cambios de contenido, menú mobile, etc.).
 */

export function useHeaderHeight(ref: React.RefObject<HTMLElement | null>) {

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const updateHeight = () => {
            document.documentElement.style.setProperty(
                "--header-height",
                `${el!.offsetHeight}px`
            );
        };

        // Ejecuta la primera vez
        updateHeight();

        // Observa cambios en tamaño
        const observer = new ResizeObserver(updateHeight);
        observer.observe(el);

        return () => observer.disconnect();
    }, []);
}