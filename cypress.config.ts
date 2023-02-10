import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 700,
  screenshotOnRunFailure: false,
  video: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
