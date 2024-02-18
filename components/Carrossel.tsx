'use client'
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";




const imagesCont = [""];

const imagesSelec = [""];

interface TextProps{
  titleArr: string[],
  textArr: string[],
}

interface TextProps2{
  imgArr: string[],
}
export function CarrosselContinuo(props:TextProps2) {

  const carrossel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0)
 
  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
    }
  }, []);
  

  return (
    <div className=" flex items-center justify-center rounded-xl">
      <motion.div className="cursor-grab overflow-hidden rounded-md" whileTap={{cursor:"grabbing"}} ref={carrossel}>
        <motion.div 
          className="flex" 
          drag={'x'} 
          dragConstraints={{right:0, left:-width}}
          initial={{x:50}}
          animate={{x:0}}
          transition={{duration:0.8}}>
          {props.imgArr.map((img, index) => (
            <motion.div key={index} className="min-h-[200px] min-w-[200px] max-h-[200px] xl:min-h-[300px] xl:min-w-[300px] xl:max-h-[300px] mx-3 relative"> 
              <Image src={img} alt={`Carrossel Image ${index + 1}`} layout="fill" objectFit="cover" className="w-full h-auto rounded-3xl pointer-events-none"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function CarrosselSelection(props:TextProps) {

  function alteraCarrossel(lado:number){
    if(lado==0){
      setCurrentSlide(currentSlide-1)
      if(currentSlide<=0){
        setCurrentSlide(imagesSelec.length-1)
      }
    }

    else{
      setCurrentSlide(currentSlide+1)
      if(currentSlide>imagesSelec.length-2){
        setCurrentSlide(0)
      }
    }
  }
  
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <div className="relative min-w-[50%] min-h-[600px]">
        <Image src={imagesSelec[currentSlide]} alt={`Reportagem ${currentSlide + 1}`} layout="fill" objectFit="cover"/>
      </div>
      <div className="bg-gray-1100 py-6 justify-center items-center flex flex-col px-12">
          <p className="text-green-1400 text-xl font-medium">{props.titleArr[currentSlide]}</p>
          <p>{props.textArr[currentSlide]}</p>
          <div className="w-full flex flex-1 justify-end gap-x-3 mt-2">
            <button className="border rounded-full text-3xl p-2 hover:bg-gray-1300" onClick={()=>alteraCarrossel(0)}>{'<-'}</button>
            <button className="border rounded-full text-3xl p-2 hover:bg-gray-1300" onClick={()=>alteraCarrossel(1)}>{'->'}</button>
          </div>
      </div>
    </>
  );
}
