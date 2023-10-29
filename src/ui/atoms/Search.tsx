'use client'

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const Search = () => {

    const searchParams = useSearchParams()
	const query = searchParams.get("search")

    const [value, setValue] = useState(() => query ?? "")
    const router = useRouter()

    const debounced = useMemo(() => debounce((val: string) => {
				const newParams = new URLSearchParams(searchParams.toString());

				if (val) {
					newParams.set("query", encodeURIComponent(decodeURIComponent(val)));
				} else {
					newParams.delete("query");
				}

				const url = `/search?${newParams.toString()}`;

				// @ts-expect-error TODO: fix this
				router.push(url);
			}, 500),
		[router, searchParams],
	);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value);
			debounced(e.target.value);
		},
		[debounced],
	);
    
    return (
        <div>
            <label htmlFor="search" className="sr-only">Szukaj</label>
            <div className="relative">
                <input 
				type="search" 
				placeholder="Search" 
				className="w-full rounded-md border-0 bg-slate-50 py-2 pl-4 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
				onChange={handleChange}
				value={value} />
            </div>
        </div>
    )
}

function debounce<T extends unknown[], R>(cb: (...args: T) => R, wait: number) {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	return (...args: T) => {
		const later = () => {
			timeout = null;
			cb(...args);
		};
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(later, wait);
	};
}