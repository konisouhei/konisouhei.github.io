import { defineConfig } from "astro/config";
 
export default defineConfig({
  site: "https://konisouhei.github.io",
  base: '/konisouhei/', 
  output: 'static', // 静的サイトとしてビルド
});