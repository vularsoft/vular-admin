export default {
  name:"VularFormCard",
  props:{
    title:"基本信息",
  },
  children:[
    {
      name:"vular-input",
      props:{
        field:"content",
        vInput:{
          name:"VularTinymce",
          props:{
            height:"700px",
          },
        },
      },
    },
  ]
}