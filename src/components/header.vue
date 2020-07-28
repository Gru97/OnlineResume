<template>
    <header>
        <h1>Fatemeh Shanidani</h1>
        <ul>
            <li ><router-link to="/about">About Me</router-link></li>
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
    padding: 20px;
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

</style>