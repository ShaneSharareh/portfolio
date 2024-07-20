"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from './MenuOverlay';
import Image from "next/image";

const navLinks = [
    {
    title: "About",
    path: "#about"
    },
    {
    title: "Projects",
    path: "#projects"
    },
    {
    title: "Contact",
    path: "#contact"
    }
]

const Navbar = () => {
 const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={`fixed mx-auto border-0 md:border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] ${navbarOpen ? 'bg-opacity-90' : 'bg-opacity-0'} md:bg-opacity-100 transition-opacity duration-300`}
    >
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} 
            className="text-2xl md:text-5xl text-white font-semibold">
            <Image 
              src="/images/logo.png"
              alt="picture of me"
              className="hidden md:block"
              width={70}
              height={70}
            />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                            <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) :(
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                                <XMarkIcon className="h-5 w-5"/>
                            </button>)
                    
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-o md:flex-row md:space-x-8 mt-0 bg-opacity-100'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index} >
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>
                        ))

                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null }
        </nav>
  );
};

export default Navbar
