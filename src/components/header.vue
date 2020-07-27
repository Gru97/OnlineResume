<template>
    <header>
        <h1>Fatemeh Shanidani</h1>
        <ul>
            <li ><a>About Me</a></li>
            <li><a>Contact Me</a></li>
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
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  padding: 50px;
}

</style>