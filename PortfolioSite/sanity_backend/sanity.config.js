import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'PortfolioSite',

  projectId: 'mx9tc1uq',
  dataset: 'projects',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
