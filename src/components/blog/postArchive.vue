<template>
    <div>
       <ul class="list-group">
             <li v-for="item in list" :key="item" class="list-group-item d-flex justify-content-between align-items-center"> 
                <router-link :to="{ path: `blog/post/${item.title}`, params: { id: item.id }}"> {{item.title}}</router-link>
            </li>
       </ul>  
    </div>
</template>

<script>
    export default {
        name:'PostArchive',
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.list=[{"id":1,"title":"How to refactore methods?"},
                  {"id":2,"title":"What is demeter's law?"}]
        },
        computed:{
            postUrl:function(item){
                return `/post/${item.id}`;
            }
        }
    }
</script>

<style  scoped>
div{
    border: 2px solid black;
}
</style>