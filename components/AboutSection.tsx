'use client'
import React, { useState, useTransition } from "react"
import { ImageSwitcher } from "./ImageSwitcher"
import { TabButton } from "./TabButton"

interface TextProps{
  abtme: string,
  descript: string
}

export function AboutSection(props:TextProps){  
  const [tab, setTab] = useState(0)
  const [isPending, startTransition] = useTransition()
  
  const handleTabChange = (id: number) => {
    startTransition(() => {
      setTab(id);
      
    });
  };

  return(
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16"> {/* Remove px-16 latter */}
        <ImageSwitcher/>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">{props.abtme}</h2>
          <p className="text-justify text-base lg:text-lg">{props.descript}</p>
          <div className="flex flex-row mt-8 gap-x-3">
            <TabButton active={tab===0} selectTab={()=> handleTabChange(0)}>
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton active={tab===1} selectTab={()=> handleTabChange(1)}>
              {" "}
              Education{" "}
            </TabButton>

            <TabButton active={tab===2} selectTab={()=> handleTabChange(2)}>
              {" "}
              Experience{" "}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  )
}

