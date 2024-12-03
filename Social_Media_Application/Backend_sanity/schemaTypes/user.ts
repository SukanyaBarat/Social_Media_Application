import {defineField, defineType} from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      type: 'string',
      title:'UserName'
    },
    {
        name:'image',
        title:'Image',
        type:'string'
    },
  ],
})