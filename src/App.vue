<template>
  <div id="app">
    <Header />
    <About />
    <Footer />
    
  </div>
</template>

<script>
import Header from './components/header.vue'
import About from './components/about.vue'
import Footer from './components/footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    About,
    Footer
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
