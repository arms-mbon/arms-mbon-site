<template>
<SearchPage>
    <template v-slot:searchui>
        <h1>To insert search functionality later</h1>
    </template>
    <template v-slot:maindata>
        <div>
            <table class='table table-striped'>
                <thead>
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
                            {{seq.id}}
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
</template>

<script>
    import SearchPage from '@/components/SearchPage.vue'
  import store from '@/store/index'
  export default {
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
          this.getallevents()
      },
      methods: {
          getallevents () {
              store.commit('allEvents')
          },
      },
  }
</script>