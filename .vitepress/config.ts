import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Thermal Docs',
  description: 'Documentation for Thermal Themes — Shopify themes for brands whose storefront has to carry the identity, not just list the catalog.',
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
      { text: 'Prismatic', link: '/prismatic/' },
      { text: 'Studio', link: 'https://thermalthemes.com' },
    ],

    sidebar: {
      '/prismatic/': [
        {
          text: 'Prismatic',
          items: [
            { text: 'Overview', link: '/prismatic/' },
          ],
        },
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'Install and set up', link: '/prismatic/getting-started/' },
          ],
        },
        {
          text: 'Sections',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/prismatic/sections/' },
            { text: 'Header', link: '/prismatic/sections/header' },
            { text: 'Footer', link: '/prismatic/sections/footer' },
            { text: 'Announcement bar', link: '/prismatic/sections/announcement-bar' },
            { text: 'Slideshow', link: '/prismatic/sections/slideshow' },
            { text: 'Featured collection', link: '/prismatic/sections/featured-collection' },
            { text: 'Featured product', link: '/prismatic/sections/featured-product' },
            { text: 'Image with text', link: '/prismatic/sections/image-with-text' },
            { text: 'Images with text scroll', link: '/prismatic/sections/images-with-text-scrolling' },
            { text: 'Multirow', link: '/prismatic/sections/multirow' },
            { text: 'Media grid', link: '/prismatic/sections/media-grid' },
            { text: 'Dynamic grid', link: '/prismatic/sections/dynamic-grid' },
            { text: 'Multi-column', link: '/prismatic/sections/multi-column' },
            { text: 'Collection list', link: '/prismatic/sections/collection-list' },
            { text: 'Hot spots', link: '/prismatic/sections/hot-spots' },
            { text: 'Shop the look', link: '/prismatic/sections/shop-the-look' },
            { text: 'Before / After', link: '/prismatic/sections/before-after' },
            { text: 'Process steps', link: '/prismatic/sections/process-steps' },
            { text: 'Creator spotlight', link: '/prismatic/sections/creator-spotlight' },
            { text: 'Logo list', link: '/prismatic/sections/logo-list' },
            { text: 'Trust icons', link: '/prismatic/sections/trust-icons' },
            { text: 'Press', link: '/prismatic/sections/press' },
            { text: 'Testimonials', link: '/prismatic/sections/testimonials' },
            { text: 'Countdown', link: '/prismatic/sections/countdown' },
            { text: 'Product page', link: '/prismatic/sections/product-page' },
            { text: 'Collection page', link: '/prismatic/sections/collection-page' },
            { text: 'Bundle builder', link: '/prismatic/sections/bundle-builder' },
            { text: 'Product recommendations', link: '/prismatic/sections/product-recommendations' },
            { text: 'Recently viewed', link: '/prismatic/sections/recently-viewed' },
            { text: 'Specification table', link: '/prismatic/sections/specification-table' },
            { text: 'Quick order list', link: '/prismatic/sections/quick-order-list' },
            { text: 'Rich text', link: '/prismatic/sections/rich-text' },
            { text: 'Video', link: '/prismatic/sections/video' },
            { text: 'Accordion', link: '/prismatic/sections/accordion-content' },
            { text: 'Newsletter', link: '/prismatic/sections/newsletter' },
            { text: 'Blog posts', link: '/prismatic/sections/blog-posts' },
            { text: 'Article navigation', link: '/prismatic/sections/blog-article-nav' },
            { text: 'Contact form', link: '/prismatic/sections/contact-form' },
            { text: 'Custom Liquid', link: '/prismatic/sections/custom-html' },
          ],
        },
        {
          text: 'Customizing',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/prismatic/customizing/' },
          ],
        },
        {
          text: 'Presets',
          collapsed: false,
          items: [
            { text: 'Inkling & Sickbird', link: '/prismatic/presets/' },
          ],
        },
        {
          text: 'FAQ',
          collapsed: false,
          items: [
            { text: 'Frequently asked', link: '/prismatic/faq/' },
          ],
        },
        {
          text: 'Changelog',
          collapsed: false,
          items: [
            { text: 'Version history', link: '/prismatic/changelog/' },
          ],
        },
        {
          text: 'Support',
          collapsed: false,
          items: [
            { text: 'Contact', link: '/prismatic/contact/' },
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
