interface TableHeader {
    header: string;
    value: (row: any) => React.ReactNode;
}

interface TableProps {
    data: any[];
    headers: TableHeader[];
}

export default function Table({ data, headers }: TableProps) {
    return(
        <table className="min-w-full bg-cream-100 shadow rounded overflow-hidden">
            <thead>
                <tr>
                    {headers.map((h) => (
                        <th key={h.header} className="py-2 px-4 text-center bg-coffee-200">
                            {h.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,rowIndex) => (
                    <tr key={rowIndex} className="border-b bg-white hover:bg-gray-200">
                        {headers.map((h, colIndex) => (
                            <td key={colIndex} className="py-2 px-4 text-center">
                                {h.value(row)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}