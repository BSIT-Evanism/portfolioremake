// uno.config.ts
import { defineConfig, presetWebFonts } from 'unocss'
import { transformerVariantGroup } from 'unocss'


export default defineConfig({
  // ...UnoCSS options
  transformers: [
    transformerVariantGroup(),
  ]
})
