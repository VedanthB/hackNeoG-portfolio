export default {
    name:'blogs',
    title:'Blogs',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'tags',
            title:'Tags',
            type:'string'
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        },
        {
            name:'summary',
            title:'Summary',
            type:'string'
        }
    ]
}