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
  import JSZip from 'jszip'
  //import Imagetable from '@/components/ImageTable.vue'

  import store from '@/store/index'
  //import Axios from 'axios';
  //import { saveAs } from 'file-saver';
  export default {
    data() {
        return {
            images: [],
            payload: {}
        }
    },
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
              this.images = []
              for (let index = 0; index < this.imagedatad.length; index++) {
                    console.log(this.imagedatad[index]);
                    let url = this.imagedatad[index]['url'];
                    let name = this.imagedatad[index]['identifier']
                    
                    fetch(url, {
                        mode:'no-cors'
                    })
                        .then(res => res.blob()) // Gets the response and returns it as a blob
                        .then(blob => {
                            // Here's where you get access to the blob
                            // And you can use it for whatever you want
                            // Like calling ref().put(blob)
                            console.log(blob);
                            // Here, I use it to make an image appear on the page
                            let objectURL = URL.createObjectURL(blob);
                            this.images.push({'data':objectURL,'name':name});
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
              var zip = new JSZip();
              this.images.forEach(function(url){
                var filename = url["name"];
                // loading a file and add it in a zip file
                zip.file(filename, url["data"], {binary:true});
                count++;
                if (count == urls.length) {
                    let tosave = await zip.generateAsync({type:'blob'})
                    let blub = await new Blob([tosave], {type: "application/zip",});
                    const link = document.createElement("a");
                    link.style.display = "none";
                    link.href = window.URL.createObjectURL(blub);
                    const fileName = "images.zip"
                    link.download = fileName;
                    link.click();
                    window.URL.revokeObjectURL(link.href);
                }
              });

              console.log(this.images);
          },
      }
  }
</script>

<style scoped>
</style>