import {type ReactNode} from "react";

type Page1LayoutProps = {
    children: ReactNode
}

export default function Page1Layout({children}: Page1LayoutProps) {
    return (
        <div className="bg-teal-100">Page1Layout {children}</div>
    )
}