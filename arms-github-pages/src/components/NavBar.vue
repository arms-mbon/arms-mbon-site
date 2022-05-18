<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><router-link to="/">ARMS</router-link></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" ><router-link to="/about"><i class="fas fa-question-circle"></i> About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/contact"> <i class="fas fa-address-card"></i> Contacts</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/event"><i class="fas fa-sitemap"></i> Events</router-link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-folder-open" style="color: #42b983;"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item"><i class="fas fa-images"></i> <router-link to="/images">Images</router-link></a></li>
              <li><a class="dropdown-item"><i class="fas fa-dna"></i> <router-link to="/sequences">Sequences</router-link></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <input class="form-control me-2" type="search" v-model="globalsearch" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" @click="changeQueryString" type="submit">Search</button>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
      changeQueryString() {
          this.$router.replace({ query: {globalsearch: this.globalsearch.toLowerCase() } });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>