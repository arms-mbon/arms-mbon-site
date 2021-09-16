<template>
<div>
    <br>
    <SearchPage>
        <template v-slot:searchui>
            <h1>To insert search functionality later</h1>
            <button @click="downloadImages" class="btn btn-outline-success">Download Images</button>
        </template>
        <template v-slot:maindata>
            <suspense>
                <template #default>
                    <AsyncImageTable></AsyncImageTable>
                </template>
                <template #fallback>
                    <Loading></Loading>
                </template>
            </suspense>
        </template>
    </SearchPage>
    <br>
</div>

</template>

<script>
  import { defineAsyncComponent } from 'vue'
  import SearchPage from '@/components/SearchPage.vue'
  import Loading from '@/components/Loading.vue'
  //import Imagetable from '@/components/ImageTable.vue'

  import store from '@/store/index'
  //import Axios from 'axios';
  //import { saveAs } from 'file-saver';
  export default {
    components: {
        SearchPage,
        AsyncImageTable: defineAsyncComponent(() => import('@/components/ImageTable.vue')),
        Loading
    },
    computed: {
          imagedatad() {
              return store.state.imagedatad
          },
      },
      methods: {
          downloadImages() {
              //get all the ticked boxes
              var checkedboxes = []
              var checkboxes = document.querySelectorAll('input[type="checkbox"]');
              for (var checkbox of checkboxes) {
                  if(checkbox.checked){
                      checkedboxes.push(checkbox.id);
                  }
              }
              console.log(checkedboxes);
              // store function to get all the image urls with the right names
              store.dispatch('downloadimagespost', {checkedboxes})
              console.log(this.imagedatad);
              for (let index = 0; index < this.imagedatad.length; index++) {
                  console.log(this.imagedatad[index]);
                    let url = this.imagedatad[index]['url'];
                    fetch(url, {
                        mode:'no-cors'
                    })
                        .then(response => {
                            const blob = new Blob([response.data])
                            const link = document.createElement('a')
                            link.href = URL.createObjectURL(blob)
                            link.download = this.imagedatad[index]['identifier']
                            link.click()
                            URL.revokeObjectURL(link.href)
                        }).catch(console.error)
                    console.log('downloading', url);
                    /*
                  Axios.get(this.imagedatad[index]['url'],{
                            'method': 'GET',
                            'mode': 'no-cors',
                            'Access-Control-Allow-Origin': "*"
                        })
                        .then(response => {
                            const blob = new Blob([response.data], { type: 'application/pdf' })
                            const link = document.createElement('a')
                            link.href = URL.createObjectURL(blob)
                            link.download = this.imagedatad[index]['identifier']
                            link.click()
                            URL.revokeObjectURL(link.href)
                        }).catch(console.error)
                        */
              }
          }
      }
  }
</script>

<style scoped>
    .thead th{
        position:sticky;
        top: 0 ;
    }
</style>