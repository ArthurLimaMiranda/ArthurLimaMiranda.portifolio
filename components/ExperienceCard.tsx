import Link from "next/link"
import React from "react"

import { CodeBracketIcon } from "@heroicons/react/24/outline"
import { ExperienceInfo } from "./ExperienceInfo"

interface TextProps{
  imgCartUrl: string[],
  title: string,
  description: string[],
  hasCart: boolean,
  tags: string[],
  hasLink: boolean,
  projLink: string
}


export function ExperienceCard(props:TextProps){  
  return(
    <div>
      <div className="relative">
        <div className="h-52 md:h-72 rounded-t-xl mt-2" style={{ background: `url(${props.imgCartUrl[0]})`, backgroundSize: "cover" }}/>
        <div className="flex flex-row gap-x-6 items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hover:bg-opacity-80 transition-all duration-500 group">
            
            {props.hasLink &&
              <a href={props.projLink} target="_blank" className="hidden group-hover:flex h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white items-center justify-center group/link">
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white absolute"/>
              </a>
            }
            <ExperienceInfo
              description={props.description} 
              hasCart={props.hasCart} 
              imgCartUrl={props.imgCartUrl} 
              title={props.title}
            />
        </div>
      </div>

      <div className="text-white rounded-b-xl bg-[#181818] py-6">
        <h5 className="text-xl font-semibold text-center">{props.title}</h5>
      </div>
    </div>
  )
}

