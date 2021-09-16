<template>
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

<script>
import store from '@/store/index'
export default {
    name:"SequenceTable",
    computed: {
        alldata() {
            return store.state.alldata
        },
        allevents() {
            return store.state.allevents
        }
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
        }
    },
    watch: {
        $route() {
            this.searchevents(this.$route.query)
        }
    }
}
</script>

<style>
</style>