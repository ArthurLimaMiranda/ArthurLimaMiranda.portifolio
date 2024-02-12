'use client'
import React, { useState, useTransition } from "react"
import { ImageSwitcher } from "./ImageSwitcher"
import { TabButton } from "./TabButton"

interface TextProps{
  abtme: string,
  descript: string,
  education: string[],
  certification: string[],
}

export function AboutSection(props:TextProps){  
  const [tab, setTab] = useState(0)
  const [isPending, startTransition] = useTransition()
  
  const handleTabChange = (id: number) => {
    startTransition(() => {
      setTab(id);
      
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: 0,
      content: (
        <ul className="gap-y-3 flex flex-col py-1 list-disc pl-4 lg:pl-2">
          <li>C</li>
          <li>Arduino</li>
          <li>{props.education[6]}</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Expo</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Unity</li>
        </ul>
      )
    },

    {
      title: "Education",
      id: 1,
      content: (
        <ul className="gap-y-3 flex flex-col">
          <li>
            <div className="flex flex-row w-full justify-between">
              <p className="font-semibold text-sm sm:text-base">{props.education[1]}</p>
              <p className="text-xs">{" 07/22 - 12/27 (EST.)"}</p>
            </div>
            <p className="text-sm sm:text-base">{"Universidade Federal de Pernambuco (UPE)"}</p>
          </li>

          <li>
            <div className="flex flex-row w-full justify-between">
              <p className="font-semibold text-sm sm:text-base">{props.education[2]}</p>
              <p className="text-xs">{"02/16 - 01/20"}</p>
            </div>
            <p className="text-sm sm:text-base">{"Instituto Federal de Pernambuco (IFPE)"}</p>
          </li>

          <li>
            <p className="font-semibold text-sm sm:text-base">{props.education[3]}</p>
            <p className="text-sm sm:text-base">{props.education[4]}</p>
          </li>
          <li>
            <p className="font-semibold text-sm sm:text-base">{props.education[5]}</p>
            <p className="text-sm sm:text-base">{"Cultura Inglesa"}</p>
          </li>
        </ul>
        
      )
    },

    {
      title: "Certifications",
      id: 2,
      content: (
        <ul className="gap-y-3 flex flex-col py-1 list-disc pl-2">
          <li>
            <p className="font-semibold">{props.certification[1]}</p>
            <p className="text-sm sm:text-base">{"Monitor (11/2021)"}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[2]}</p>
            <p className="text-sm sm:text-base">{props.certification[3]}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[4]}</p>
            <p className="text-sm sm:text-base">{props.certification[5]}</p>
          </li>


          <li>
            <p className="font-semibold">{props.certification[6]}</p>
            <p className="text-sm sm:text-base">{props.certification[7]}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[8]}</p>
            <p className="text-sm sm:text-base">{props.certification[9]}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[10]}</p>
            <p className="text-sm sm:text-base">{props.certification[11]}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[12]}</p>
            <p className="text-sm sm:text-base">{props.certification[13]}</p>
          </li>

          <li>
            <p className="font-semibold">{props.certification[14]}</p>
            <p className="text-sm sm:text-base">{props.certification[15]}</p>
          </li>

        </ul>
      )
    }
  ]

  return(
    <section className="text-white mt-8 md:mt-32 xl:mt-36 2xl:mt-56">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16 items-start lg:items-center">
        <ImageSwitcher/>
        <div className="mt-10 sm:mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mt-4 md:mt-0 mb-4 text-center sm:text-left">{props.abtme}</h2>
          <p className="text-center sm:text-justify text-base lg:text-lg">{props.descript}</p>
          <div className="flex flex-row mt-8 justify-start gap-x-3">
            <TabButton active={tab===0} selectTab={()=> handleTabChange(0)}>
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton active={tab===1} selectTab={()=> handleTabChange(1)}>
              {" "}
              {props.education[0]}{" "}
            </TabButton>

            <TabButton active={tab===2} selectTab={()=> handleTabChange(2)}>
              {" "}
              {props.certification[0]}{" "}
            </TabButton>
          </div>
          <div className={`flex flex-col ${tab===1?("justify-center"):("")}  mt-8 overflow-y-scroll h-[15rem] bg-gray-700 px-3 lg:px-6`}> {TAB_DATA.find((t) => t.id === tab)?.content} </div>
        </div>
      </div>
    </section>
  )
}

