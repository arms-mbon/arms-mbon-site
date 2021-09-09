<template>
    <div>
        <h2>Hello destination {{$route.params.id}}</h2>
        <p>{{event}}</p>
    </div>
</template>

<script>
    import store from '@/store/index'
    export default {
        computed: {
            destinationId(){
                return parseInt(this.$route.params.id)
            },
            
            event(){
                return store.state.allevents.find(event => event.id === this.destinationId)
            },
            allevents() {
                return store.state.allevents
            },
        },
        methods: {
            getallevents () {
                store.commit('allEvents')
            }
        },
        beforeMount() {
            this.getallevents()
        }
    }
</script>