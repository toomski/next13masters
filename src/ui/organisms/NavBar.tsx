import { type ActiveLinkProps, ActiveLink } from '@/ui/atoms/ActiveLink'

const linkClassName = 'flex h-full w-full min-w-[3rem] items-center justify-center px-1 pt-1 text-center text-sm font-medium'
const activeLinkClassName = 'flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-blue-500 border-blue-500'

type NavLink = {
    href: ActiveLinkProps<string>['href'];
    label: string;
}

const navLinks: NavLink[] = [
    {href: '/', label: 'Home'},
    {href: '/products', label: 'All'},
    {href: '/products/t-shirts', label: 'T-Shirts'},
    {href: '/products/hoodies', label: 'Hoodies'},
    {href: '/products/accessories', label: 'Accessories'},    
];

export const NavBar = () => {
    return (
        <header className='sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg'>
          <nav className='scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto'>
            <div className='hidden flex-shrink-0 items-center lg:flex'></div>
            <ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
                {navLinks.map(({href, label}, index) => {
                    return (
                        <li className="first:pl-4 last:pr-4 lg:px-0" key={index}>
                            <ActiveLink href={href} exact className={linkClassName} activeClassName={activeLinkClassName}>
                            {label}
                            </ActiveLink>
                        </li>
                    )
                })}
            </ul>
          </nav>
        </header>
    )
};