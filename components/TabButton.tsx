import Link from "next/link"
import React from "react"

interface TextProps{
  children: string[]
  active: boolean,
  selectTab: any,
}


export function TabButton(props:TextProps){  
  const buttonClasses = props.active ? ('text-white border-b border-b-purple-500'):('text-[#ADB7BE]')
  return(
    <button 
      className={`font-semibold hover:text-white ${buttonClasses}`}
      onClick={props.selectTab}>
        <p>
          {props.children}
        </p>
    </button>
  )
}

