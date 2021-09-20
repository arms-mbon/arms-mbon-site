<template>
    <div>
        <div v-if="sequence">
            <h2 style="text-align:center;"> <i class="fas fa-dna"></i> Sequence: {{$route.params.id}}</h2>
            <br>
            <button class="accordion active"><i class="fas fa-info"></i> General</button>
            <div class="panel" style="max-height:100%;">
                <br>
                <div class="container">
                    <br>
                    <table class='table table-striped'>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{{sequence.id}}</td>
                            </tr>
                            <tr>
                                <td>Sampling event</td>
                                <td>{{sequence.source_id}}</td>
                            </tr>
                            <tr>
                                <td>Sequenced region</td>
                                <td>{{sequence.regions}}</td>
                            </tr>
                            <tr>
                                <td>Remarks</td>
                                <td>{{sequence.remarks}}</td>
                            </tr>
                            <tr>
                                <td>Form Name</td>
                                <td>{{sequence.mainform}}</td>
                            </tr>
                            <tr>
                                <td>Forward Primer Sequence</td>
                                <td>{{sequence.forw_primer_sequence}}</td>
                            </tr>
                            <tr>
                                <td>Forward Primer Name</td>
                                <td>{{sequence.forw_primer_name}}</td>
                            </tr>
                            <tr>
                                <td>Reverse Primer Sequence</td>
                                <td>{{sequence.rev_primer_sequence}}</td>
                            </tr>
                            <tr>
                                <td>Reverse Primer Name</td>
                                <td>{{sequence.rev_primer_name}}</td>
                            </tr>
                            <tr>
                                <td>Chimeric</td>
                                <td>{{sequence.chimeric_status}}</td>
                            </tr>
                            <tr>
                                <td>Low Quality</td>
                                <td>{{sequence.quality_status}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="accordion"> <i class="fas fa-passport"></i> Identifications</button>
            <div class="panel">
                <br>
                <div v-for="seq in sequence.determinations" :key="seq.id" class="container">
                    <br>
                    <table class='table table-striped'>
                        <tbody>
                            <tr>
                                <td>Taxon name</td>
                                <td>{{seq.taxon_node}}</td>
                            </tr>
                            <tr>
                                <td>Taxon name add.</td>
                                <td>{{seq.new_name}}</td>
                            </tr>
                            <tr>
                                <td>Date identified</td>
                                <td>{{seq.determined_date}}</td>
                            </tr>
                            <tr>
                                <td>Typification</td>
                                <td>{{seq.typification}}</td>
                            </tr>
                            <tr>
                                <td>Assessment</td>
                                <td>{{seq.assessment}}</td>
                            </tr>
                            <tr>
                                <td>Remarks</td>
                                <td>{{seq.remarks}}</td>
                            </tr>
                            <tr>
                                <td>Identifiers</td>
                                <td>{{seq.basis}}</td>
                            </tr>
                            <tr>
                                <td>Created</td>
                                <td>{{seq.updated_at}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="accordion"><i class="fas fa-database"></i> Raw JSON Data</button>
            <div class="panel">
                <br>
                <p>{{sequence}}</p>
                <br>
            </div>
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
.thead th{
    position:sticky;
    top: 0 ;
}
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
</style>