<template>
    <div class="container">
        <!-- Sidebar -->
        <aside class="container__sidebar">
            <slot name="searchui"></slot>
        </aside>

        <!-- Main -->
        <main class="container__main">
            <slot name="maindata"></slot>
        </main>
    </div>
</template>

<script>
export default {
  name: 'SearchPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    max-width: 80%;
}

.container__sidebar {
    width: 22%;
    border-right: rgb(245, 245, 245) solid 2px;
}

.container__main {
    /* Take the remaining width */
    flex: 1;

    /* Make it scrollable */
    overflow: auto;
}
</style>