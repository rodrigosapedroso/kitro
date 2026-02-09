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
        <table className="min-w-full bg-kitro-grayLight shadow rounded overflow-hidden">
            <thead>
                <tr>
                    {headers.map((h, index) => (
                        <th key={index} className="py-2 px-4 text-center">
                            {h.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,rowIndex) => (
                    <tr key={rowIndex} className="border-b hover:bg-gray-50">
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