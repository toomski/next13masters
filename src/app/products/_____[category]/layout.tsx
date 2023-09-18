import { type ReactNode } from "react"

type ProductsCategoryLayoutProps = {
    children: ReactNode
}

export default function ProductsCategoryLayout({children}: ProductsCategoryLayoutProps) {
    return children;
}

export async function generateStaticParams() {
    return [
        { category: 't-shirts' },
        { category: 'boots' },
    ]
}