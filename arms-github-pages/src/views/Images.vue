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
  //import { saveAs } from 'file-saver';
  //import JSZipUtils from 'jszip-utils';

  import store from '@/store/index'
  //import Axios from 'axios';
  //import { saveAs } from 'file-saver';
  export default {
    data() {
        return {
            images: [],
            payload: {},
            src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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
              var tocheck = this.imagedatad;
              console.log(tocheck);
              /*
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
              }
                console.log(this.images);
                */
                var zip = new JSZip();
                var count = 0;
                var zipFilename = "zipFilename.zip";
                for (let index = 0; index < this.imagedatad.length; index++) {
                    var filename = this.imagedatad[index]['identifier'];
                    console.log(this.imagedatad[index]['url']);
                    // loading a file and add it in a zip file
                    let config = {
                        // example url
                        method: 'GET',
                        responseType: 'arraybuffer',
                        mode:'no-cors'
                    }
                    fetch(this.imagedatad[index]['url'], config)
                    .then((response) => {
                        var bytes = new Uint8Array(response.data);
                        var binary = bytes.reduce((data, b) => data += String.fromCharCode(b), '');
                        this.src = "data:image/jpeg;base64," + btoa(binary);
                        zip.file(filename, this.src, {binary:true});
                    }).then(() => {
                        count++;
                        console.log(count,this.imagedatad.length);
                        if (count == this.imagedatad.length) {
                            console.log(zip)
                            zip.generateAsync({type:'blob'}).then(function(content) {
                                //saveAs(content, zipFilename);
                                const link = document.createElement("a");
                                link.style.display = "none";
                                link.href = window.URL.createObjectURL(content);
                                const fileName = zipFilename;
                                link.download = fileName;
                                link.click();
                                window.URL.revokeObjectURL(link.href);
                            });
                        }
                    })
                }      
          },
      }
  }
</script>

<style scoped>
</style>