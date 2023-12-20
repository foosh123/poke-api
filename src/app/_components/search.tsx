'use client'

import { useSearchParams, useRouter } from 'next/navigation';


export default function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()

    function handleChange(search: string) {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("q", search)
        router.push(`/?${newSearchParams.toString()}`);
    }
    
    return (
        <input
            defaultValue={searchParams.get("q")?.toString()}
            onChange={(e) => handleChange(e.target.value)}
            className="bg-white text-black border rounded p-2"
        />
    )
}
