<template>
    <div>
        <div v-if="event">
            <br>
            <button class="accordion active"><i class="fas fa-info"></i> General</button>
            <div class="panel" style="max-height:100%;">
                <br>
                <div class="container">
                    <table class='table table-striped'>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{{generalinfo.id}}</td>
                            </tr>
                            <tr>
                                <td>Sampling area</td>
                                <td>{{generalinfo.name}}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{{generalinfo.country}}</td>
                            </tr>
                            <tr>
                                <td>Longitude</td>
                                <td>{{generalinfo.longitude}} +- {{generalinfo.longitude_precision}}</td>
                            </tr>
                            <tr>
                                <td>Latitude</td>
                                <td>{{generalinfo.latitude}} +- {{generalinfo.latitude_precision}}</td>
                            </tr>
                            <tr>
                                <td>Owner</td>
                                <td>{{generalinfo.owner}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button class="accordion" @click="showimage = true">  <i class="fas fa-camera"></i> Images</button>
            <div v-if="showimage" class="panel">
                <div class="gallery">
                    <div class="gallery-panel" v-for="item in event.files" :key="item">
                        <suspense>
                            <template #default>
                                <AsyncImage :imageurl="item.download_link" :imagename="item.identifier"></AsyncImage>
                            </template>
                            <template #fallback>
                                <Loading></Loading>
                            </template>
                        </suspense>
                        <!--<img :src="thumbUrl(photo.filename)"> -->
                    </div>
                </div>
            </div>
            <button class="accordion"><i class="fas fa-dna"></i> Sequences</button>
            <div class="panel">
                <br>
                <div class="container" style="overflow: scroll;overflow-x: hidden;max-height: 30vh">
                    <table class="table table-striped">
                        <thead style="position: sticky;top: 0" class="table-dark">
                            <tr>
                                <td>
                                    sequence id
                                </td>
                                <td>
                                    length
                                </td>
                                <td>
                                    forward primer
                                </td>
                                <td>
                                    reverse primer
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in event.sequences" :key="item">
                                <td>
                                    <a :href="'#' + item.id"><router-link :to='"/sequences/"+ item.id'>{{item.id}}</router-link></a>
                                </td>
                                <td>
                                    {{item.sequence.length}}
                                </td>
                                <td>
                                    {{item.forw_primer_sequence}}
                                </td>
                                <td>
                                    {{item.rev_primer_sequence}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br>
            </div>
        </div>
        <div v-else>
            <img alt="404 image" src="../assets/404_img.jpg" class="center">
        </div>
    </div>
</template>

<script>
    //imports
    import { defineAsyncComponent } from 'vue'
    import store from '@/store/index'
    import Loading from '@/components/Loading.vue'

    //export with all logic for vue page
    export default {
        data () {
            return {
                showimage:false
            }
        },
        components: {
            AsyncImage: defineAsyncComponent(() => import('@/components/Image.vue')),
            Loading
        },
        computed: {
            destinationId(){
                return parseInt(this.$route.params.id)
            },
            
            event(){
                return store.state.allevents.find(event => event.id === this.destinationId)
            },
            generalinfo(){
                return store.state.generalinfoevent
            },
            allevents() {
                return store.state.allevents
            },
        },
        methods: {
            getallevents () {
                store.commit('allEvents')
            },
            getgeneralinfo(destinationId) {
                console.log(destinationId);
                store.commit('generalinfo', {destinationId})
                return store.state.generalinfoevent
            }
        },
        beforeMount() {
            this.getallevents(),
            this.getgeneralinfo(this.$route.params.id)
        },
        mounted(){
            //logic for page that doesn't leave template
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
            }
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
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
}

.gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
}
</style>