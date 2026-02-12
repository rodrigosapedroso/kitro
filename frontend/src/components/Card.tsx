interface CardProps {
    label: string;
    value: string | number | undefined;
    onClick?: () => void;
    activeItem: boolean;
}

export default function Card({ label, value, onClick, activeItem }: CardProps) {
    const Component = onClick? "button" : "div";

    return(
        <Component 
            onClick={onClick}
            className={`border rounded-lg p-3 text-left transition
                ${!activeItem && onClick ? "cursor-pointer hover:bg-coffee-100" : ""}
                ${activeItem ? "border-black bg-green-200" : "border-green-200 bg-white"}`}
        >
            <h3 className={`text-base ${activeItem ? "text-coffee-100" : "text-coffee-500"}`}>
                {label}
            </h3>
            <p className={`mt-2 text-2xl font-bold ${activeItem ? "text-white" : "text-black"}`}>
                {value}
            </p>
        </Component>
    )
}