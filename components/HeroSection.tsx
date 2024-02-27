'use client'
import React from "react"
import Image from "next/image"
import hero_image from "../public/assets/hero-image.png"
import { useCurrentLocale } from '../locales/client'

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

interface TextProps{
  hello: string,
  iam1: string,
  iam2: string,
  iam3: string,
  iam4: string,
  btn1: string,
  btn2: string,
  descript: string
}

export function HeroSection(props:TextProps){  

  const currentLocale = useCurrentLocale()

  function handleDownload() {
    const link = document.createElement('a');
    if (currentLocale == 'en'){
      link.href = "/assets/resumes/Arthur_Miranda_Resume.pdf";
      link.download = 'Arthur_Miranda_Resume.pdf';
    }

    else{
      link.href = "/assets/resumes/Arthur_Miranda_Curriculo.pdf";
      link.download = 'Arthur_Miranda_Curriculo.pdf';
    } 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return(
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-16">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold mt-14">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{props.hello}{" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
                'Arthur',
                1000,
                props.iam1,
                1000,
                props.iam2,
                1000,
                props.iam3,
                1000,
                props.iam4,
                1000
              ]}
              wrapper="span"
              speed={50}
              className="inline-block text-4xl h-[8rem] md:h-[8rem] sm:text-5xl xl:text-6xl mt-3"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-justify">
            {props.descript}
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black"><Link href="#contato">{props.btn1}</Link></button>
            <button onClick={handleDownload} className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br hover:bg-slate-800 text-white border border-white mt-3">{props.btn2}</button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="mt-8 sm:mt-0 rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image src={hero_image} alt="hero image" width={300} height={300} className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
        </div>
      </div>
     </section>
  )
}

