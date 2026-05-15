// utils/url.js

function getPostUrl(post) {
  // post オブジェクトが存在しない場合はデフォルトのパスを返す
  if (!post) {
    console.warn("getPostUrl called with undefined or null post object.");
    return '#'; // または適切なデフォルトパス
  }

  const baseUrl = import.meta.env.BASE_URL;
  const basePath = baseUrl === '/' ? '' : baseUrl;

  // 1. オブジェクトが 'url' プロパティを直接持っているか？ (加工された prevPost/nextPost の場合)
  if (typeof post.url === 'string' && post.url.length > 0) {
    return `${basePath}/${post.url}/`;
  }
  // 2. オブジェクトが 'data' プロパティを持ち、その中に 'url' があるか？ (CollectionEntry で url 指定ありの場合)
  else if (post.data && typeof post.data.url === 'string' && post.data.url.length > 0) {
    return `${basePath}/${post.data.url}/`;
  }
  // 3. オブジェクトが 'slug' プロパティを持っているか？ (デフォルトのパス生成)
  else if (typeof post.slug === 'string' && post.slug.length > 0) {
    return `${basePath}/blog/${post.slug}/`;
  }
  // 4. 上記いずれにも当てはまらない場合 (予期せぬエラー)
  else {
    console.error("Could not determine URL from post object in getPostUrl:", post);
    return '#'; // エラー時のデフォルトパス
  }
}

export { getPostUrl };
