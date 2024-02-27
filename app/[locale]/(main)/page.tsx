import { AboutSection } from "../../../components/AboutSection";
import { Contact } from "../../../components/Contact";
import { Experience } from "../../../components/Experience";
import { HeroSection } from "../../../components/HeroSection";
import { Navbar } from "../../../components/Navbar";
import { getScopedI18n } from "../../../locales/server";

async function Home() {
  const hero = await getScopedI18n('hero')
  const aboutme = await getScopedI18n('about_me')
  const education = [
    aboutme('education.title'),
    aboutme('education.deg1'),
    aboutme('education.deg2'),
    aboutme('education.cn'),
    aboutme('education.conf'),
    aboutme('education.en'),
    aboutme('skills')
  ]
  const certifications = [
    aboutme('certifications.title'),
    aboutme('certifications.cert1'),
    aboutme('certifications.cert2'),
    aboutme('certifications.as2'),
    aboutme('certifications.cert3'),
    aboutme('certifications.as3'),
    aboutme('certifications.cert4'),
    aboutme('certifications.as4'),
    aboutme('certifications.cert5'),
    aboutme('certifications.as5'),
    aboutme('certifications.cert6'),
    aboutme('certifications.as6'),
    aboutme('certifications.cert7'),
    aboutme('certifications.as7'),
    aboutme('certifications.cert8'),
    aboutme('certifications.as8')
];
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
        <Navbar nav1={hero('navbar.abt')} nav2={hero('navbar.proj')} nav3={hero('navbar.cnt')}/>
        <div className="container mx-auto mt-10 md:mt-0 xl:mt-10 2xl:mt-44 px-12 py-4">
          <HeroSection hello={hero('hello')} iam1={hero('iam1')} iam2={hero('iam2')} iam3={hero('iam3')} iam4={hero('iam4')} btn1={hero('btn.hm')} btn2={hero('btn.dcv')} descript={hero('descript')}/>
          <AboutSection abtme={aboutme('abtme')} descript={aboutme('descript')} education={education} certification={certifications}/>
          <Experience/>
          <Contact/>
        </div>
       
      </main>
  )
}

export default Home
