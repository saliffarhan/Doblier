import { type SchemaTypeDefinition } from 'sanity'
import About from './About'
import Services from './Services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [About,Services],
}
