import { HeroSection } from "../../../components/HeroSection";
import { getScopedI18n } from "../../../locales/server";

async function Home() {
  const t = await getScopedI18n('home')
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        
        <div className="container mx-auto px-12 py-4">
          <HeroSection/>
        </div>
       
      </main>
  )
}

export default Home
