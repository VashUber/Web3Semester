<template>
  <a-table :columns="columns" :data-source="newsItems" bordered>
    <p slot="id" slot-scope="id">
      <router-link :to="`/newsItem/${id}`">-></router-link>
    </p>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'Title',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Check full',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: {customRender: 'id'},
  }
];
export default {
  name: 'Table',
  props: ['newsItems'],
  data() {
    return {
      columns,
    };
  },
};
</script>

<style lang="scss">

</style>