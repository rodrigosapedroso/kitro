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
          className="bg-kitro-grayLight mb-4 px-3 py-2 border rounded w-full"
        />
    )
}