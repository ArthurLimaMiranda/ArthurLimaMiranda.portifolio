"use client"
import Link from "next/link"
import React, { useState } from "react"
import { NavbarLink } from "./NavbarLink"
import LocaleSwitcher from "./LocaleSwitcher"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const navLinks = [
  {
    title: "About",
    href: "#about"
  },
  {
    title: "Projects",
    href: "#projects"
  },
  {
    title: "Contact",
    href: "#contato"
  },
]

export function Navbar(){  

  const [navbarOpen, setNavbarOpen] = useState(false)

  return(
    <nav className={`fixed top-0 ${navbarOpen?("bg-opacity-100"):("bg-opacity-90")} left-0 right-0 z-10 bg-[#121212]`}>
      <div className="flex flex-wrap items-center justify-between mx-auto px-12 py-4">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">Arthur</Link>

        <div className="mobile-menu md:hidden block">
          {
            !navbarOpen? (
              <button
                onClick={()=> setNavbarOpen(true)} 
                className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white hover:bg-gray-100"><Bars3Icon className="h-5 w-5"/></button>
            ):
            (
              <button 
                onClick={()=> setNavbarOpen(false)} 
                className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white hover:bg-gray-100"><XMarkIcon className="h-5 w-5"/></button>
            )
          }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            <li><LocaleSwitcher/></li>
            {
              navLinks.map((link, index)=>
              <li key={index}>
                <NavbarLink href={link.href} title={link.title}/>
              </li>
              )
            }
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex flex-col py-4 items-center">
          <li><LocaleSwitcher/></li>
          {navLinks.map((link, index)=>(
          <li key={index}><NavbarLink href={link.href} title={link.title}/></li>
          ))}
        </ul>
      )}
     </nav>
  )
}

