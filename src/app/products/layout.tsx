import { type ReactNode } from "react"

type ProductsCategoryLayoutProps = {
    children: ReactNode
}

export default function ProductsCategoryLayout({children}: ProductsCategoryLayoutProps) {
    return (
        <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
            {children}
        </section>
    );
}

export async function generateStaticParams() {
    return [
        { category: 't-shirts' },
        { category: 'boots' },
    ]
}