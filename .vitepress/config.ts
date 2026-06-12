import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Thermal Docs',
  description: 'Documentation for Thermal Themes — Shopify themes for stores that sell things people study before they buy.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  srcExclude: ['**/README.md'],

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter+Tight:wght@400;500;700;900&display=swap',
      },
    ],
    ['meta', { name: 'theme-color', content: '#0e0e0c' }],
  ],

  themeConfig: {
    siteTitle: 'THERMAL/DOCS',

    nav: [
      { text: 'Themes', link: '/#themes' },
      { text: 'Sickbird', link: '/sickbird/' },
      { text: 'Studio', link: 'https://thermalthemes.com' },
    ],

    sidebar: {
      '/sickbird/': [
        {
          text: 'Sickbird',
          items: [
            { text: 'Overview', link: '/sickbird/' },
          ],
        },
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'Install and set up', link: '/sickbird/getting-started/' },
          ],
        },
        {
          text: 'Sections',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/sickbird/sections/' },
            { text: 'Header', link: '/sickbird/sections/header' },
            { text: 'Footer', link: '/sickbird/sections/footer' },
            { text: 'Announcement bar', link: '/sickbird/sections/announcement-bar' },
            { text: 'Slideshow', link: '/sickbird/sections/slideshow' },
            { text: 'Featured collection', link: '/sickbird/sections/featured-collection' },
            { text: 'Featured product', link: '/sickbird/sections/featured-product' },
            { text: 'Image with text', link: '/sickbird/sections/image-with-text' },
            { text: 'Images with text scroll', link: '/sickbird/sections/images-with-text-scrolling' },
            { text: 'Media grid', link: '/sickbird/sections/media-grid' },
            { text: 'Multi-column', link: '/sickbird/sections/multi-column' },
            { text: 'Collection list', link: '/sickbird/sections/collection-list' },
            { text: 'Hot spots', link: '/sickbird/sections/hot-spots' },
            { text: 'Shop the look', link: '/sickbird/sections/shop-the-look' },
            { text: 'Before / After', link: '/sickbird/sections/before-after' },
            { text: 'Logo list', link: '/sickbird/sections/logo-list' },
            { text: 'Press', link: '/sickbird/sections/press' },
            { text: 'Testimonials', link: '/sickbird/sections/testimonials' },
            { text: 'Countdown', link: '/sickbird/sections/countdown' },
            { text: 'Product page', link: '/sickbird/sections/product-page' },
            { text: 'Collection page', link: '/sickbird/sections/collection-page' },
            { text: 'Product recommendations', link: '/sickbird/sections/product-recommendations' },
            { text: 'Recently viewed', link: '/sickbird/sections/recently-viewed' },
            { text: 'Specification table', link: '/sickbird/sections/specification-table' },
            { text: 'Quick order list', link: '/sickbird/sections/quick-order-list' },
            { text: 'Rich text', link: '/sickbird/sections/rich-text' },
            { text: 'Video', link: '/sickbird/sections/video' },
            { text: 'Accordion', link: '/sickbird/sections/accordion-content' },
            { text: 'Newsletter', link: '/sickbird/sections/newsletter' },
            { text: 'Blog posts', link: '/sickbird/sections/blog-posts' },
            { text: 'Article navigation', link: '/sickbird/sections/blog-article-nav' },
            { text: 'Contact form', link: '/sickbird/sections/contact-form' },
            { text: 'Custom Liquid', link: '/sickbird/sections/custom-html' },
          ],
        },
        {
          text: 'Customizing',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/sickbird/customizing/' },
          ],
        },
        {
          text: 'Presets',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/sickbird/presets/' },
          ],
        },
        {
          text: 'FAQ',
          collapsed: false,
          items: [
            { text: 'Frequently asked', link: '/sickbird/faq/' },
          ],
        },
        {
          text: 'Changelog',
          collapsed: false,
          items: [
            { text: 'Version history', link: '/sickbird/changelog/' },
          ],
        },
        {
          text: 'Support',
          collapsed: false,
          items: [
            { text: 'Contact', link: '/sickbird/contact/' },
          ],
        },
      ],
      '/lacquer/': [
        {
          text: 'Lacquer',
          items: [
            { text: 'Overview', link: '/lacquer/' },
          ],
        },
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'Install and set up', link: '/lacquer/getting-started/' },
          ],
        },
        {
          text: 'Sections',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/lacquer/sections/' },
            { text: 'Header', link: '/lacquer/sections/header' },
            { text: 'Footer', link: '/lacquer/sections/footer' },
            { text: 'Announcement bar', link: '/lacquer/sections/announcement-bar' },
            { text: 'Slideshow', link: '/lacquer/sections/slideshow' },
            { text: 'Featured collection', link: '/lacquer/sections/featured-collection' },
            { text: 'Featured product', link: '/lacquer/sections/featured-product' },
            { text: 'Image with text', link: '/lacquer/sections/image-with-text' },
            { text: 'Rich text', link: '/lacquer/sections/rich-text' },
            { text: 'Multi-column', link: '/lacquer/sections/multi-column' },
            { text: 'Multirow', link: '/lacquer/sections/multirow' },
            { text: 'Collection list', link: '/lacquer/sections/collection-list' },
            { text: 'Newsletter', link: '/lacquer/sections/newsletter' },
            { text: 'Video', link: '/lacquer/sections/video' },
            { text: 'Blog posts', link: '/lacquer/sections/blog-posts' },
            { text: 'Testimonials', link: '/lacquer/sections/testimonials' },
            { text: 'Contact form', link: '/lacquer/sections/contact-form' },
            { text: 'Logo list', link: '/lacquer/sections/logo-list' },
            { text: 'Media grid', link: '/lacquer/sections/media-grid' },
            { text: 'Specification table', link: '/lacquer/sections/specification-table' },
            { text: 'Accordion content', link: '/lacquer/sections/accordion-content' },
            { text: 'Product recommendations', link: '/lacquer/sections/product-recommendations' },
            { text: 'Recently viewed', link: '/lacquer/sections/recently-viewed' },
            { text: 'Custom HTML', link: '/lacquer/sections/custom-html' },
          ],
        },
        {
          text: 'Customizing',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/lacquer/customizing/' },
          ],
        },
        {
          text: 'Presets',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/lacquer/presets/' },
          ],
        },
        {
          text: 'FAQ',
          collapsed: false,
          items: [
            { text: 'Frequently asked', link: '/lacquer/faq/' },
          ],
        },
        {
          text: 'Changelog',
          collapsed: false,
          items: [
            { text: 'Version history', link: '/lacquer/changelog/' },
          ],
        },
        {
          text: 'Support',
          collapsed: false,
          items: [
            { text: 'Contact', link: '/lacquer/contact/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThermalThemes' },
    ],

    footer: {
      message: 'SIGNAL/RUNNING',
      copyright: '© Thermal Themes',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    editLink: {
      pattern: 'https://github.com/ThermalThemes/thermal-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
