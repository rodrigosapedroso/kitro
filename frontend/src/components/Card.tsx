interface CardProps {
    label: string;
    value: string | number | undefined;
}

export default function Card({ label, value }: CardProps) {
    return(
        <div className="bg-white shadow rounded p-6">
            <h3 className="text-sm font-medium text-gray-500">{label}</h3>
            <p className="mt-2 text-2xl font-bold">{value}</p>
        </div>
    )
}