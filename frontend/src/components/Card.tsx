interface CardProps {
    label: string;
    value: string | number | undefined;
}

export default function Card({ label, value }: CardProps) {
    return(
        <div className="bg-kitro-successLight border border-kitro-success rounded-lg p-3 w-70">
            <h3 className="text-base text-kitro-textPrimary">{label}</h3>
            <p className="mt-2 text-2xl font-bold">{value}</p>
        </div>
    )
}