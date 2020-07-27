<template>
    <div class="row">
        <div class="col-sm-6">
            <h2>Hi, I'm Fatemeh Shahidani. I'm a dotnet developer.</h2>
            <div class="col-sm-4">
                <h3>Education</h3>
            </div>
            <div class="col-sm-4">Work Experience</div>
            <div class="col-sm-4">Skills</div>
            <div class="col-sm-4">Interests</div>

        </div>
       
        <div class="col-sm-6">
            <Picture />
        </div>
    </div>
  
</template>

<script>
import Picture from './picture.vue'

    export default {
        name:'About',
        components:{
            Picture
        }
    }
</script>

<style scoped>

</style>