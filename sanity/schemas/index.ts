import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import service from './service'
import testimonial from './testimonial'
import pricing from './pricing'

export const schemaTypes: SchemaTypeDefinition[] = [hero, service, testimonial, pricing]
