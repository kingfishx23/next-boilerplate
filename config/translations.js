const common = ['common', 'pages', 'page_titles', 'layout_components', 'auth']

export const TRANSLATIONS = {
  '404': [...common, 'page_404'],
  home: [...common, 'layout_public', 'page_public_home'],
  pricing: [...common, 'layout_public'],
  mdx: [...common, 'layout_public'],
  blog_home: [...common, 'layout_public', 'layout_blog', 'page_blog_home'],
  blog_post: [...common, 'layout_public', 'layout_blog'],
}
