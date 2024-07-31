'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavigationButtonItems = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
    },
    {
        title: "Skill-Test",
        link: "/skill-test",
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
    },
    {
        title: "Internship",
        link: "/internship",
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>
    }
]

const Navbar = () => {
  return (
    <nav className="lg:w-1/5 w-full lg:h-full h-fit lg:border-r-2 border-slate-100">
      <div className="w-full flex lg:flex-col lg:pr-4 justify-evenly lg:mt-12 mt-2">
        {NavigationButtonItems.map((item, index) => (
          <NavigationButton key={index} title={item.title} link={item.link}>
            {item.icon}
          </NavigationButton>
        ))}
      </div>
    </nav>
  )
}

const NavigationButton:  React.FC<{ title: string; link: string; children: React.ReactNode }> = ({
    children,
    title,
    link ,
  }) => {
    const pathname = usePathname();
  
    return (
      <Link
        href={link}
        className={`lg:text-xl text-sm font-bold flex items-center lg:gap-4 lg:p-5 p-2 px-4 rounded-full lg:rounded-tl-none lg:rounded-bl-none  ${
          pathname === link ? "text-blue-700 bg-slate-100" : "text-slate-700"
        }`}
      >
        {children}
        {title}
      </Link>
    );
  };

export default Navbar