'use client'

import React from 'react'
import { useChangeLocale, useCurrentLocale } from '../locales/client'

const LocaleSwitcher = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  return (
        <select className={`text-black hover:bg-slate-300 focus:bg-slate-100 py-1 px-3 justify-center items-center text-sm focus:ring-0 focus:outline-none appearance-none rounded-lg leading-tight`}  
                id="userRule"  
                placeholder={currentLocale}
                value={currentLocale}
                onChange={(e)=>changeLocale(e.target.value as "en" | "pt")}
                required
                title="Locale">
                  <option value="en">En</option>
                  <option value="pt">Pt</option>
        </select>
  )
}

export default LocaleSwitcher
