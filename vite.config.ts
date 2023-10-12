// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import htmlTemplate from 'vite-plugin-html-template'


export default defineConfig({
  plugins: [
    UnoCSS(),
    htmlTemplate(
      {
        // where is the pages' root directory?
        pagesDir: 'src/pages',
        // define pages like it is done in vue-cli
        pages: {
          index: {
            template: './src/pages/index.html',
            title: 'Homepage',
          },
          about: {
            template: './src/pages/about.html',
            title: 'About',
          },
          project: {
            template: './src/pages/projects.html',
            title: 'Project',
          }
        },
        // expose to template
        data: {
          title: 'Homepage',
        },
      }
    ),
    
  ],
})