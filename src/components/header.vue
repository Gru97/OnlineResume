<template>
    <header>
        <li><h1>Fatemeh Shanidani</h1></li>
        <ul class="list-group-horizontal">
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/contact">Contact Me</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
        </ul>
    </header>
</template>

<script>
    export default {
        name:'Header',

    }
</script>

<style  scoped>
header {
    color:white;
    padding: 10px;
    background-color: black;
}
ul {
  list-style-type: none;
  margin: 20px;
  padding: 0;
}
li {
  display: inline;
  padding: 50px;
  cursor: pointer;
  color: white;
}
h1{
    display: inline;

}
a{
    color: white;
}
a:hover{
    text-decoration:none;
    color:crimson;
}
</style>