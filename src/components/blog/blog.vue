<template>
    <div class="container blog">
    <div class="row" >
        <div class="col-sm-2">
            <PostArchive />
        </div>
        <div class="col-sm-10">
            <Post :id="getPostId" />
        </div>
        
    </div>
    </div>
</template>

<script>
import Post from './post.vue'
import PostArchive from './postArchive.vue'
    export default {
        components:{
            Post,
            PostArchive
        },
        computed:{
            getPostId:function(){
                return this.$route.params.id;
            },
        }
        
    }
</script>

<style scoped>
.blog{
    margin: 10px;
}
</style>