<template v-bind="post">
    <div v-if="post" >
         <h1>{{id}}</h1>
        <h1>{{post.title}}</h1>
        <hr class="dashed" />
        
        <p>{{post.body}}</p>

        <hr class="dashed" />

        <span>
            Date published:
            {{post.postDate}}
        </span>
    </div>
</template>

<script>
    export default {
        name:'Post',
        props:{
            id:String
        },
        date(){
            return {
                post:{}
            }
        },
        created(){
           this.post= {
                    id:"1",
                    title:"Clean Code 1",
                    body:"This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.This event fires on tab show, but before the new tab has been shown. Use event.target and event.relatedTarget to target the active tab and the previous active tab (if available) respectively.",
                    postDate:"1322-20-20",
                    writer:"Fatemeh Shahidani"
           }
        }
    }
</script>

<style  scoped>
div{
    border: 2px solid black;
}
h1{
margin-top: 8px;
}
p{
    text-align: left;
    padding: 20px;
}
</style>