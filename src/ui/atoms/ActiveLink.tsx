"use client"

import { type ReactNode } from 'react'
import Link, { type LinkProps} from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx'

type ActiveLinkProps = LinkProps<string> & {
    children: ReactNode
}

export const ActiveLink = ({href, children}: ActiveLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href
    const className = clsx('text-blue-400 hover:text-blue-600', {
        underline: isActive,
    })
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    )
}