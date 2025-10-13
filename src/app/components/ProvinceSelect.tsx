import React, {useEffect, useState} from "react";

type ProvinceSelectProps = {
    "provincia": string,
    "regione": string
}

interface Response {
    "ExitCode": number,
    "ExitDescription": string,
    "ReturnedObject": ProvinceSelectProps[]
}

export default function ProvinceSelect({ onChange }: { onChange: (provincia: string, regione: string) => void}) {
    const url = "https://php.leone.it/api/GetProvincie.php"
    const [province, setProvince] = useState<ProvinceSelectProps[]>([]);

    useEffect(() => {
        fetch(url, {
            headers: {
                Authorization: "Bearer wlfca9P8Zn0zQt4zwpcDne4KJROqEOAzIy3dr0Eyxhbzhqz4ydddgjc"
            }
        })
            .then((response) => response.json())
            .then((data: Response) => {
                setProvince(data.ReturnedObject);
            })
            .catch((err) => {
                if (err instanceof Error) {
                    console.error(err.message);
                }
            });
    }, []);

    return (
        <select
            onChange={e => {
                const selected = province.find(p => p.provincia === e.target.value);
                if (selected) onChange(selected.provincia, selected.regione);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">Scegli una provincia</option>
            {province.map((element) => (
                <option key={element.provincia} value={element.provincia}>
                    {element.provincia}
                </option>
            ))}
        </select>
    );
}