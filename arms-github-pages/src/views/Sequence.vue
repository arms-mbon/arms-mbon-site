<template>
    <div>
        <div v-if="sequence">
            <h2>Sequence: {{$route.params.id}}</h2>
            <p>{{sequence}}</p>
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
            sequence(){
                var allevents = store.state.allevents
                for (let i = 0; i < allevents.length; i++) {
                    var sequencee = allevents[i]['sequences'].find(sequence => sequence.id === this.destinationId)
                    if(sequencee != null){
                        if (Object.keys(sequencee).length != 0) {
                            return allevents[i]['sequences'].find(sequence => sequence.id === this.destinationId)
                        }
                    }
                }
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