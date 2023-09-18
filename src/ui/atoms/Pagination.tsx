import { type Route } from "next";
import { ActiveLink } from './ActiveLink'

type PaginationProps = {
    items: string[]
}

export const Pagination = ({items}: PaginationProps) => {
    return (
        <nav className="mt-auto flex items-center justify-center border-t border-slate-200 px-4">
            <ul className="-mt-px flex">
                {items.map((item, index) => (
                    <li key={index}>
                        <ActiveLink 
                            href={item as Route<string>} 
                            prefetch={"onHover"}
                            className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                            activeClassName="border-blue-500 text-blue-600">
                            {index + 1}
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}