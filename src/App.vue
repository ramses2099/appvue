<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn red">Guardar<i class="material-icons">save</i></button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
      });

  },
};
</script>

<style>
</style>
