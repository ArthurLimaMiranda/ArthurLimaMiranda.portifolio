import { AboutSection } from "../../../components/AboutSection";
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
    aboutme('skills'),
    aboutme('experience'),
  ]
  return (
      <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
        <Navbar nav1={hero('navbar.abt')} nav2={hero('navbar.proj')} nav3={hero('navbar.cnt')}/>
        <div className="container mx-auto mt-10 md:mt-0 xl:mt-10 2xl:mt-40 px-12 py-4">
          <HeroSection hello={hero('hello')} iam1={hero('iam1')} iam2={hero('iam2')} iam3={hero('iam3')} iam4={hero('iam4')} btn1={hero('btn.hm')} btn2={hero('btn.dcv')} descript={hero('descript')}/>
          <AboutSection abtme={aboutme('abtme')} descript={aboutme('descript')} education={education}/>
        </div>
       
      </main>
  )
}

export default Home
