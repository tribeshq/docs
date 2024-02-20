import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tribes",
  description: "Welcome to Tribes",
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: 'introduction/what-is-tribes' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is tribes?', link: 'introduction/what-is-tribes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tribeshq' }
    ]
  }
})
