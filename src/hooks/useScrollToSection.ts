/**
 * Hook: useScrollToSection
 * Permite scrollear suavemente a cualquier sección del DOM por su ID.
 * Devuelve una función scrollToSection(id: string) reutilizable en cualquier componente.
 */
export function useScrollToSection() {
    const scrollToSection = (id: string) => {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return { scrollToSection };
}