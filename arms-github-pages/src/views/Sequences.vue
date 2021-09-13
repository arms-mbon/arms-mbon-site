<template>
<div>
    <br>
    <SearchPage>
        <template v-slot:searchui>
            <h1>To insert search functionality later</h1>
            <div class="input" style="width:90%;">
                <input type="text" v-model="description" class="form-control me-2" placeholder="Description" aria-label="Description">
                <br>
            </div>
            <button @click="changeQueryString" class="btn btn-outline-success">Search</button>
        </template>
        <template v-slot:maindata>
            <div style="height: 870px;overflow: scroll;">
                <table class='table table-striped'>
                    <thead style="position: sticky;top: 0" class="table-dark">
                        <tr>
                            <th>
                                id event
                            </th>
                            <th>
                                description event
                            </th>
                            <th>
                                id sequence
                            </th>
                            <th>
                                sequence
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <template v-for="item in allevents">
                        <tr v-for="seq in item.sequences" :key="seq.id">
                            <td>
                                {{item.id}}
                            </td>
                            <td>
                                <a :href="'#' + item.id"><router-link :to='"/event/"+ item.id'>{{item.description}}</router-link></a>
                            </td>
                            <td>
                                <a :href="'#' + seq.id"><router-link :to='"/sequences/"+ seq.id'>{{seq.id}}</router-link></a>
                            </td>
                            <td>
                            {{seq.sequence}}
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </template>
    </SearchPage>
    <br>
</div>

</template>

<script>
    import SearchPage from '@/components/SearchPage.vue'
  import store from '@/store/index'
  export default {
    data() {
        return {description: ''}
    },
    components: {
        SearchPage
    },
    computed: {
          alldata() {
              return store.state.alldata
          },
          allevents() {
              return store.state.allevents
          },
      },
      beforeMount() {
          this.getallevents(),
          this.searchevents(this.$route.query)
      },
      methods: {
            getallevents () {
                store.commit('allEvents')
            },
            searchevents(queryroute) {
                console.log(queryroute);
                store.commit('searchevents', {queryroute})
                return store.state.allevents
            },
            changeQueryString() {
                this.$router.replace({ query: {description: this.description.toLowerCase() } });
            }
      },
      watch: {
            $route() {
                this.searchevents(this.$route.query)
            }
        }
  }
</script>

<style scoped>
    .thead th{
        position:sticky;
        top: 0 ;
    }
</style>