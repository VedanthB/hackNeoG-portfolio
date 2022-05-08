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
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'summary',
            title:'Summary',
            type:'string'
        }
    ]
}