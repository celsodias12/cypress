import { defineConfig } from 'cypress'
import codeCoverageTask from '@cypress/code-coverage/task'

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  viewportWidth: 1000,
  viewportHeight: 700,
  screenshotOnRunFailure: false,
  video: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents: (on, config) => {
      codeCoverageTask(on, config)

      return config
    },
  },
})
