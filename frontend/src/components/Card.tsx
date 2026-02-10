interface CardProps {
    label: string;
    value: string | number | undefined;
}

export default function Card({ label, value }: CardProps) {
    return(
        <div className="border border-black rounded-lg p-3 bg-white">
            <h3 className="text-base text-coffee-500">{label}</h3>
            <p className="mt-2 text-2xl text-black font-medium">{value}</p>
        </div>
    )
}