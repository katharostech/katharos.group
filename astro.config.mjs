import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import ViteYaml from '@modyfi/vite-plugin-yaml';


// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  vite: {
    plugins: [ViteYaml()]
  }
});
