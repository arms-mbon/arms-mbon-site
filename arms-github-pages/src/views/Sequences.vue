<template>
  <div class="about">
    <h1>This is the sequence page</h1>
    <div class="container">
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
  </div>
</template>

<script>
  import store from '@/store/index'
  export default {
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