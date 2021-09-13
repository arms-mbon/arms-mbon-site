
<template>
<div>
    <br>
    <div class="container">
        <h1>This is the event page</h1>
        <div style="height: 800px;overflow: scroll;">
            <table class='table table-striped'>
                <thead style="position: sticky;top: 0" class="table-dark">
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
    <br>
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
            globalsearch(queryroute) {
                console.log(queryroute);
                store.commit('globalsearch', {queryroute})
                return store.state.allevents
            },
        },
        watch: {
            $route() {
                this.globalsearch(this.$route.query)
            }
        }
    }
</script>

<style scoped>
    .thead th{
        position:sticky;
        top: 0 ;
    }
    .container{
        max-width: 80%;
    }
</style>