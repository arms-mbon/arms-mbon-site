<template>
    <div>
        <div v-if="event">
            <h2>Event: {{$route.params.id}}</h2>
            <p>{{event}}</p>
        </div>
        <div v-else>
            <img alt="404 image" src="../assets/404_img.jpg" class="center">
        </div>
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

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
</style>