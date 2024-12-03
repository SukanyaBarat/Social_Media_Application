import { defineType } from "sanity";

export const comment=defineType({
    name:'comment',
    title:'Comment',
    type:'document',
    fields:[
        {
           name:'postedBy',
            title:'PostedBy',
            type:'postedBy',
        },
         {
            name:'comment',
            title:'Comment',
            type:'string',
         },
    ],
})