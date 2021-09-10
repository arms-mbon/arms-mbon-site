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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>