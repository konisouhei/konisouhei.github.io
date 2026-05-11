// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ... 他の設定 ...

  // ↓ GitHub Pages用の設定を追加
  site: 'https://github.com/konisouhei/konisouhei.github.io.git', // 必ずあなたのユーザー名に置き換えてください
  // ↑ ここまで追加
});
