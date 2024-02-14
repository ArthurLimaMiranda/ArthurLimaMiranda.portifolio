import Link from "next/link"
import React from "react"

interface TextProps{
  imgCartUrl: string[],
  title: string,
  description: string[],
  hasCart: boolean,
  tags: string[]
}


export function ExperienceCard(props:TextProps){  
  return(
    <div>
      <div 
        className="h-52 md:h-72 rounded-t-xl relative group" 
        style={{ background: `url(${props.imgCartUrl[0]})`, backgroundSize: "cover" }}
      >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            
          </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6">
        <h5 className="text-xl font-semibold text-center">{props.title}</h5>
      </div>
    </div>
  )
}

