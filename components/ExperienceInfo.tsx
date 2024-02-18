'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline"
import { CarrosselContinuo } from "./Carrossel";

interface TextProps {
  imgCartUrl: string[],
  title: string,
  description: string[],
  hasCart: boolean,
}

export function ExperienceInfo(props: TextProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  function resetModal() {
    setShowModal(true);
    setCurrentSelected(0);
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <button onClick={() => resetModal()} className="hidden group-hover:flex h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white  items-center justify-center group/link">
        <EyeIcon className="absolute h-10 w-10 text-[#ADB7BE] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white group-hover/link"/>
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

          <div className="flex items-center justify-center min-h-screen fixed inset-0 z-50">
            <div
              ref={modalRef}
              className={`flex flex-col xl:flex-row gap-y-5 py-10 text-center bg-[#121212] rounded-2xl ${props.hasCart?('h-[90%] w-[80%] xl:w-[60%] xl:h-[70%]'):('h-[50%] w-[80%] xl:w-[40%] xl:h-[60%]')} md:px-5 items-center justify-between`}
            >

              <p className="xl:hidden font-semibold text-center text-3xl text-white">{props.title}</p>

              <ul className="xl:hidden flex flex-col w-[90%] h-[40%] overflow-y-scroll list-disc bg-gray-700 rounded-xl text-base font-normal text-left pl-8 pr-5 gap-y-5 py-5 text-white">
                <li>{props.description[0]}</li>
                <li>{props.description[1]}</li>
              </ul>

              <div className="hidden xl:flex flex-col h-full items-center justify-between">
                <p className="font-semibold text-center text-3xl text-white">{props.title}</p>

                <ul className="flex flex-col w-[90%] h-[40%] xl:justify-center overflow-y-scroll list-disc bg-gray-700 rounded-xl text-base font-normal text-left pl-8 pr-5 gap-y-5 py-5 text-white">
                  <li>{props.description[0]}</li>
                  <li>{props.description[1]}</li>
                </ul>

                <button
                  className="w-[90%] h-8 flex justify-center items-center bg-white hover:bg-gray-400 rounded-lg font-bold text-black hover:text-gray-500 leading-none"
                  onClick={() => setShowModal(false)}
                >
                    {"<-"}
                </button>
              </div>
              
              {props.hasCart&&
                <div className="px-3 overflow-x-hidden w-full">
                  <CarrosselContinuo imgArr={props.imgCartUrl}/>
                </div>
              }

              <button
                className="xl:hidden w-[90%] h-8 flex justify-center items-center bg-white hover:bg-gray-400 rounded-lg font-bold text-black hover:text-gray-500 leading-none"
                onClick={() => setShowModal(false)}
              >
                {"<-"}
              </button>
              
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
