import { HomeDark } from "@/features/home/HomeDark";
import { HomeLight } from "@/features/home/HomeLight";
import { HomePage } from "@/features/home/HomePage";
import { HomeSections } from "@/features/home/HomeSections";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getServerTheme } from "@/lib/theme/server";

export const metadata = createPageMetadata("home");

/**
 * Home is the one route that branches its server-rendered tree on the theme,
 * so it reads the cookie here and stays dynamic. Every other public route is
 * prerendered; the pre-paint script in the root layout handles their theme.
 */
export default async function Page() {
  const serverTheme = await getServerTheme();

  return (
    <HomePage
      serverTheme={serverTheme}
      darkHero={<HomeDark />}
      lightHero={<HomeLight />}
    >
      <HomeSections />
    </HomePage>
  );
}
