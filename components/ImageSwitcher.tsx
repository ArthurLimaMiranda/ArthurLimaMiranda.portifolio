'use client'
import Image from "next/image";
import imgDft from '../public/assets/abtm1.png'
import img01 from '../public/assets/abtm2.png'

import { useState, useEffect } from "react";

export function ImageSwitcher(){

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgDft, img01]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  

  return(
    <>
        <Image src={images[currentIndex]} alt="About me picture" width={500} height={500} className="rounded-xl"/>
    </>
  )
}

