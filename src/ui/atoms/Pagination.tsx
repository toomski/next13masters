import { ActiveLink } from './ActiveLink'

type PaginationProps = {
    route: string
    count: number
}

export const Pagination = ({route, count}: PaginationProps) => {

    const pages = Math.ceil((count + 1) / 4)

    return (
        <nav className="mt-auto flex items-center justify-center border-t border-slate-200 px-4">
            <ul className="-mt-px flex">
                {[...Array(pages).keys()].map((page) => (
                    <li key={page}>
                        <ActiveLink 
                            href={`${route}/${page + 1}`} 
                            prefetch={"onHover"}
                            className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                            activeClassName="border-blue-500 text-blue-600">
                            {page + 1}
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}