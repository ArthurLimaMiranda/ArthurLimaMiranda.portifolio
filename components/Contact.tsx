import React from "react"
import { getScopedI18n } from "../locales/server";
import GithubIcon from "../public/assets/github-icon.svg"
import LinkedinIcon from "../public/assets/linkedin-icon.svg"
import EmailIcon from "../public/assets/email-icon.svg"
import Link from "next/link";
import Image from "next/image";

interface TextProps{
}

export async function Contact(props:TextProps){
  const contact = await getScopedI18n("contact")

  return(
    <section className="my-12 py-24 gap-4" id="contato">
      <div>
        <h5 className="text-xl font-bold text-white my-2">{contact("connect")}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {contact("iam")}
        </p>
        <div className="flex flex-row gap-2">
          <Link href="https://github.com/ArthurLimaMiranda"><Image src={GithubIcon} alt="GitHub Icon"/></Link>
          <Link href="https://www.linkedin.com/in/arthurlimam/"><Image src={LinkedinIcon} alt="GitHub Icon"/></Link>
        </div>
      </div>
    </section>
  )
}

