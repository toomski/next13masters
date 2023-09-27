"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";

export type ActiveLinkProps<T extends string> = {
    href: T
    children: ReactNode
    prefetch?: boolean | "onHover";
    exact?: boolean;
    className?: string;
    activeClassName?: string;
}

export const ActiveLink = <T extends string>(props: ActiveLinkProps<T>) => {

    const {
        href,
        children,
        prefetch,
        exact = false,
        className,
        activeClassName
    } = props

    const pathname = usePathname();
    const isActive = pathname === href || (!exact && pathname.startsWith(href));

    return (
        <Link {...usePrefetchOnHover(prefetch)} href={(href as Route<string>)} className={clsx(className, isActive && activeClassName)}>
            {children}
        </Link>
    )
}

function usePrefetchOnHover(prefetch?: boolean | "onHover") {
  const [shouldPrefetch, setShouldPrefetch] = useState<false | undefined>(false)
  if (prefetch === "onHover") {
    return {
      prefetch: shouldPrefetch,
      onMouseOver: () => setShouldPrefetch(undefined),
      onFocus: () => setShouldPrefetch(undefined),
    }
  }
  return { prefetch: prefetch ? undefined : prefetch }
}