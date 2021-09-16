<template>
<div>
    <br>
    <SearchPage>
        <template v-slot:searchui>
            <h1>To insert search functionality later</h1>
            <div class="input" style="width:90%;">
                <input type="text" v-model="description" class="form-control me-2" placeholder="Description" aria-label="Description">
                <br>
            </div>
            <button @click="changeQueryString" class="btn btn-outline-success">Search</button>
        </template>
        <template v-slot:maindata>
            <suspense>
                <template #default>
                    <AsyncSequenceTable></AsyncSequenceTable>
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
  export default {
    data() {
        return {description: ''}
    },
    components: {
        SearchPage,
        AsyncSequenceTable: defineAsyncComponent(() => import('@/components/SequencesTable.vue')),
        Loading
    },
    methods: {
        changeQueryString() {
            this.$router.replace({ query: {description: this.description.toLowerCase() } });
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