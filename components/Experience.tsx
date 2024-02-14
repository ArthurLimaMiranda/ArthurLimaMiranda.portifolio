import Link from "next/link"
import React from "react"
import { getScopedI18n } from "../locales/server";

import sVCapa from "../public/assets/projSynesthesia/synesthesiaVisionCapa.png"
import sVW1 from "../public/assets/projSynesthesia/synesthesiaWorkshops1.jpeg"
import sVW2 from "../public/assets/projSynesthesia/synesthesiaWorkshops2.jpg"
import sVW3 from "../public/assets/projSynesthesia/synesthesiaWorkshops3.jpg"
import sVW4 from "../public/assets/projSynesthesia/synesthesiaWorkshops4.jpg"
import sVW5 from "../public/assets/projSynesthesia/synesthesiaWorkshops5.jpg"
import sVW6 from "../public/assets/projSynesthesia/synesthesiaWorkshops6.png"
import sV1 from "../public/assets/projSynesthesia/synesthesiaVision1.jpg"
import sV2 from "../public/assets/projSynesthesia/synesthesiaVision2.jpg"

import eaglesCapa from "../public/assets/eaglesRobotics/eaglesRoboticsCapa.png"
import obr1 from "../public/assets/eaglesRobotics/teoricaEstadual2017.png"
import obr2 from "../public/assets/eaglesRobotics/obrNacional2017.png"
import obr3 from "../public/assets/eaglesRobotics/obrTeorica2018.png"
import obr4 from "../public/assets/eaglesRobotics/obrRegional2018.png"
import obr5 from "../public/assets/eaglesRobotics/obrEstadual2018.png"
import obr6 from "../public/assets/eaglesRobotics/obrNacional2018.png"

import oppa from "../public/assets/oppa.png"

import c4 from "../public/assets/Conect4.png"

import pj from "../public/assets/Justa.png"

import gorillasCapa from "../public/assets/gorillas/GorillasCapa.png"
import gorillas1 from "../public/assets/gorillas/gorillas1.png"
import gorillas2 from "../public/assets/gorillas/gorillas2.png"
import gorillas3 from "../public/assets/gorillas/gorillas3.png"

import retifCapa from "../public/assets/projetoRetificador/projRetifCapa.jpg"
import retif1 from "../public/assets/projetoRetificador/projRetif1.jpg"
import retif2 from "../public/assets/projetoRetificador/projRetif2.jpg"
import retif3 from "../public/assets/projetoRetificador/projRetif3.jpg"
import retif4 from "../public/assets/projetoRetificador/projRetif4.jpg"

import qa from "../public/assets/quaseAcademico.png"
import { ExperienceCard } from "./ExperienceCard";
import exp from "constants";

interface TextProps{
}


export async function Experience(props:TextProps){
  const experience = await getScopedI18n("experience")
  const experienceData = [
    {
      id: 1,
      title: "Synesthesia Vision (2016-2019)",
      description: [experience('synesthesia.0'), experience('synesthesia.1')],
      image: [sVCapa.src, sVW1.src, sVW2.src, sVW3.src, sVW4.src, sVW4.src, sVW6.src, sV1.src, sV2.src],
      hasCart: true,
      tag: ["All", "Electronics", "Robotics"],
    },
    {
      id: 2,
      title: "Eagles Robotics (2016-2018)",
      description: [experience('eagles.0'), experience('eagles.1')],
      image: [eaglesCapa.src, obr1.src, obr2.src, obr3.src, obr4.src, obr5.src, obr6.src],
      hasCart: true,
      tag: ["All", "Robotics"],
    },
    {
      id: 3,
      title: `${experience('c4.0')} (2021)`,
      description: [experience('c4.1'), experience('c4.2')],
      image: [c4.src],
      hasCart: false,
      tag: ["All", "Game Dev", "Java"],
    },
    {
      id: 4,
      title: `${experience('pj.0')} (2023)`,
      description: [experience('pj.1'), experience('pj.2')],
      image: [pj.src],
      hasCart: false,
      tag: ["All", "Web"],
    },
    {
      id: 5,
      title: "Gorillas-UPE.py and .c (2023)",
      description: [experience('gorillas.0'), experience('gorillas.0')],
      image: [gorillasCapa.src, gorillas1.src, gorillas2.src, gorillas3.src],
      hasCart: true,
      tag: ["All", "Game Dev"],
    },
    {
      id: 6,
      title: `${experience('retif.0')} (2019)`,
      description: [experience('retif.1'), experience('retif.2')],
      image: [retifCapa.src, retif1.src, retif2.src, retif3.src, retif4.src,],
      hasCart: true,
      tag: ["All", "Electronics"],
    },
    {
      id: 7,
      title: "QuaseAcademico (2019)",
      description: [experience('qa.0'), experience('qa.1')],
      image: [qa.src],
      hasCart: false,
      tag: ["All", "Java"],
    },
    {
      id: 8,
      title: "OPPA (2021)",
      description: [experience('oppa.0'), experience('oppa.1')],
      image: [oppa.src],
      hasCart: false,
      tag: ["All", "Data analysis"],
    }

  ]  
  return(
    <div className="md:mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Projects and Activities</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {experienceData.map((experience) => 
          <ExperienceCard 
          key={experience.id} 
          description={experience.description} 
          hasCart={experience.hasCart} 
          imgCartUrl={experience.image} 
          title={experience.title}
          tags={experience.tag}/>)}
      </div>
    </div>
  )
}

