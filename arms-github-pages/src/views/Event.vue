
<template>
  <div class="about">
    <h1>This is the event page</h1>
    <div class="container">
        <table class='table table-striped'>
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        description
                    </th>
                    <th>
                        begin
                    </th>
                    <th>
                        end
                    </th>
                    <th>
                        #files
                    </th>
                    <th>
                        #sequences
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in allevents" :key="item">
                    <td>
                        {{item.id}}
                    </td>
                    <td>
                        <a :href="'#' + item.id"><router-link :to='"/event/"+ item.id'>{{item.description}}</router-link></a>
                    </td>
                    <td>
                        {{item.begin}}
                    </td>
                    <td>
                        {{item.end}}
                    </td>
                    <td>
                        {{item.nfiles}}
                    </td>
                    <td>
                        {{item.nseq}}
                    </td>
                </tr>
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