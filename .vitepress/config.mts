import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tribes",
  description: "The Tribes documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guide',
        collapsed: true,
        items: [
          { text: 'One', link: '/teste/teste' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tribeshq' }
    ]
  }
})
