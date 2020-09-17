<template>
  <div>
    <query-form ref="userQueryForm"></query-form>
    <a-table ref="userList" :row-key="record => record.id" :columns="columns" :data-source="data"
      :pagination="pagination" :loading="loading" @change="handleTableChange">

      <!-- <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template> -->

      <span slot="num" slot-scope="text, record, index">
        {{(pagination.current-1)*pagination.pageSize+parseInt(index)+1}}
      </span>

      <span slot="gender" slot-scope="gender">
        {{ gender == 1 ? "男" : gender == 0 ? "女" : "/" }}
      </span>

      <span slot="status" slot-scope="status">
        {{ status == 0 ? "正常" : "/" }}
      </span>
      <span slot="birthday" slot-scope="birthday">
        {{ birthday | dateFormat2 }}
      </span>

    </a-table>
  </div>
</template>
<script>
import queryForm from "./UserQueryForm.vue";

const columns = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  // },
  {
    title: '序号',
    dataIndex: 'num',
    key: 'num',
    width: '5%',
    align: 'center',
    scopedSlots: { customRender: 'num' },
  },
  {
    title: '人员编号',
    dataIndex: 'userCode',
    width: '10%',
  },
  {
    title: '人员名称',
    dataIndex: 'userName',
    width: '10%',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    scopedSlots: { customRender: "gender" },
    // filters: [
    //   { text: '男', value: '1' },
    //   { text: '女', value: '0' },
    //   { text: '/', value: '2' },
    // ],
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    scopedSlots: { customRender: "birthday" },
    sorter: true
  },
  {
    title: '联系地址',
    dataIndex: 'address',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: "status" },
  },
];

export default {
  components: {
    queryForm,
  },
  data () {
    return {
      data: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
        pages: 0,
        showTotal: total => `总数：${total}`, // 显示总数
      },
      loading: false,
      columns,
    };
  },
  mounted () {
    this.fetch(this.pagination, null);
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      let userQueryForm = this.$refs.userQueryForm;
      this.fetch({
        pageSize: pagination.pageSize,
        currentPage: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
      }, userQueryForm.queryMap);
    },
    async fetch (params1, params2) {
      console.log(params1);
      console.log(params2);
      const params = Object.assign(params1, params2);


      this.loading = true;
      const res = await this.$http.post('/user/queryUsers', params);
      this.loading = false;

      console.log(res);
      const pagination = { ...this.pagination };
      pagination.total = res.result.total;
      // pagination.pages = res.result.pages;
      this.data = res.result.records;
      this.pagination = pagination;
    },



  },
};
</script>
