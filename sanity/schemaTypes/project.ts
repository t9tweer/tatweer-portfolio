import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    }),

  ],
})