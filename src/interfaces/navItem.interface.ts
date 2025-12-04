export interface INavItemProps {
    id: string;
    label: string;
    onClick: (id: string) => void;
    className?: string;
}