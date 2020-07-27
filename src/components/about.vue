<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <Picture />
            </div>
            <div class="col-sm-4"></div>
        </div>
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
                            <li class="list-group-item d-flex justify-content-between align-items-center">Diploma, Physics and Mathematics </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">B.S. Computer Software, Shariaty Technical And Vocational University (2016-2020)</li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">B.S. French, Tehran University (2020- 2022)</li>
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
                           
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                C#, Dotnet Framework
                                <span class="badge badge-primary badge-pill">50%</span>
                            </li>
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                               Object Oriented Principles
                                <span class="badge badge-primary badge-pill">50%</span>
                            </li>
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                               Domain Driven Design
                                <span class="badge badge-primary badge-pill">30%</span>
                            </li>   
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                               CQRS
                                <span class="badge badge-primary badge-pill">10%</span>
                            </li> 
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                               Entity Framework Core
                                <span class="badge badge-primary badge-pill">20%</span>
                            </li>
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                               Microsoft SQL Server
                                <span class="badge badge-primary badge-pill">10%</span>
                            </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                               Angular, TypeScript
                                <span class="badge badge-primary badge-pill">10%</span>
                            </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center">
                               HTML, CSS, Bootstrap
                                <span class="badge badge-primary badge-pill">10%</span>
                            </li>
                            
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                               Vue Js
                                <span class="badge badge-primary badge-pill">10%</span>
                            </li>
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                              JavaScript, JQuery
                                <span class="badge badge-primary badge-pill">30%</span>
                            </li>
                             <li class="list-group-item d-flex justify-content-between align-items-center">
                              Git
                                <span class="badge badge-primary badge-pill">50%</span>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="card border-info" style="width: 32rem;">
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

ul{
    list-style-type: square;
}
.inline{
    display: inline;
}
#myDescription{
    padding: 10px;
    margin: 20px;
}
h5{
    color:black;
    background-color: lightblue;
}
</style>