import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pricing',
    title: 'Pricing Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Plan Name',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Monthly Price',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'isPopular',
            title: 'Is Popular?',
            type: 'boolean',
        }),
    ],
})
