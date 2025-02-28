document.addEventListener('alpine:init',()=>{
    Alpine.data('counter',()=>({
        count:0,
        name:'mario',
    }))
})