import { getScopedI18n } from "@/locales/server";

async function Home() {
  const t = await getScopedI18n('home')
  return (
      <>
        {t('test')}
      </>
  )
}

export default Home
