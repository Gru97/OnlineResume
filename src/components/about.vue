<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <Picture />
            </div>
            <div class="col-sm-3"></div>
        </div>
        <hr class="dashed">

        <div id="myDescription">
              <h2> Hi, I'm Fatemeh Shahidani.</h2>
              <h3>I'm a programmer :)</h3>
        </div>
        <div class="row">
            <div class="card" style="width: 32rem;">
                <img class="card-img-top">
                <div class="card-body">
                    <i class="fas fa-graduation-cap" ></i>
                    <h5 class="card-title card-header">Education</h5>
                    <p class="card-text">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">Diploma, Physics and Mathematics <small>(2011-2015)</small> </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">B.S. Computer Software, Shariaty Technical And Vocational University <small>(2016-2020)</small></li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">B.S. French, Tehran University <small>(2020- 2022)</small></li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="card" style="width: 32rem;">
                <img class="card-img-top">
                <div class="card-body">
                    <i class="fas fas fa-laptop-code" ></i>
                    <h5 class="card-title card-header">Work Experience</h5>
                    <p class="card-text">
                          <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">Navoshgaran Asre Parse, Entry-Level Dotnet Developer </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
       <div class="row">
             <div class="card" style="width: 32rem;">
                <div class="card-body">
                    <i class="fa fa-list-alt card-img-top" ></i>
                    <h5 class="card-title card-header">Professional Skill</h5>
                    <p class="card-text">
                        <ul class="list-group">
                            <li v-for="work in $options.works" :key="work" class="list-group-item d-flex justify-content-between align-items-center">
                                {{work.name}}
                                <span class="badge badge-primary badge-pill">{{work.level}}</span>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="card" style="width: 32rem;">
                <div class="card-body">
                    <i class=" far fa-lightbulb	card-img-top" ></i>
                    <h5 class="card-title card-header">Interests</h5>
                    <p class="card-text">
                        <ul class="list-group">
                             <li class="list-group-item d-flex justify-content-between align-items-center">Learning new Languages (REAL HUMAN LANGUAGE!)</li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">Gaining in depth knowledge about distributed systems</li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">Functional programming</li>
                        </ul>
                    </p>
                </div>
            </div>
       </div>  
       <hr class="dashed"> 
       <Contact />
    </div>
  
</template>

<script>
import Picture from './picture.vue'
import Contact from './contact.vue'
import workJson from '../data/work.json'
    export default {
        name:'About',
        works:workJson,
        date(){
            return{
                
            }
        },
        components:{
            Picture,
            Contact
        }
    }
</script>

<style scoped>

.inline{
    display: inline;
}
#myDescription{
    padding: 10px;
}
h5{
    color:black;
    background-color: lightblue;
}
</style>