<template>
  <center>
    <h1>Not Found!</h1>
    <p>
      <a href="/arms-mbon-site/">Go home?</a>
    </p>
  </center>
</template>

<script>
    var pathSegmentsToKeep = 0;
    var l = window.location;
    l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
    );
  export default {
    name: 'NotFound'
  }

</script>

<style scoped>

  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>