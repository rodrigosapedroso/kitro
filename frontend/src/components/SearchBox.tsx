interface SearchBoxProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBox({ placeholder, value, onChange }: SearchBoxProps) {
    return(
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-cream-100 placeholder-gray-400 mb-4 px-3 py-2 border border-gray-400 rounded w-full"
        />
    )
}