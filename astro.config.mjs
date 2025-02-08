import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
	output: "static",
	adapter: vercelStatic(),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",

    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },  
});