import {type ReactNode} from "react";

type StaticPagesLayoutProps = {
    children: ReactNode
}

export default function StaticPagesLayout({children}: StaticPagesLayoutProps) {
    return (
        <div className="mx-auto max-w-md text-center">
            {children}
        </div>
    )
}