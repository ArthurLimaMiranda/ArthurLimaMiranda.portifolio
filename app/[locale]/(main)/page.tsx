import { HeroSection } from "../../../components/HeroSection";
import { Navbar } from "../../../components/Navbar";
import { getScopedI18n } from "../../../locales/server";

async function Home() {
  const t = await getScopedI18n('hero')
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mx-auto mt-24 px-12 py-4">
          <HeroSection hello={t('hello')} iam1={t('iam1')} iam2={t('iam2')} iam3={t('iam3')}/>
        </div>
       
      </main>
  )
}

export default Home
