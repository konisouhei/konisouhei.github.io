// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// 1. glob ローダーをインポート
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // 2. loader を定義 (legacy な entry 取得を置き換え)
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // 文字列を日付型に変換
    description: z.string().optional(), // オプショナルな項目
    tags: z.array(z.string()).optional(), // 文字列の配列 (オプショナル)
    url: z.string().optional(), // ← 追加: カスタムURL用のフィールド (オプショナル)
    // ↓ アイキャッチ画像用のフィールドを追加
    featureImage: image().optional(), // 画像はオプショナルにする場合
    featureImageAlt: z.string().optional(), // 代替テキストもオプショナルに
    // ↑ ここまで追加
  }),
});

export const collections = { blog };
