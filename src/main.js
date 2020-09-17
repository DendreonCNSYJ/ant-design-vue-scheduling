import Vue from 'vue'
import {
  FormModel,
  Input,
  Button,
  Layout,
  Icon,
  Menu,
  Breadcrumb,
  Divider,
  Table,
  Tag,
  Select,
  Radio,
  Checkbox,
  Switch,
  DatePicker,
  Modal,
  Descriptions,
  List,
  Row,
  Col,
  PageHeader,
  Calendar,
  Popconfirm,
  message,
} from 'ant-design-vue'

// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 NProgress 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import moment from 'moment' //导入文件
Vue.prototype.moment = moment

import axios from 'axios'
Vue.prototype.$http = axios
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8088/'
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use((config) => {
  // console.log(config)
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use((config) => {
  NProgress.done()
  return config
})

Vue.config.productionTip = false

Vue.use(FormModel)
Vue.use(Input)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Divider)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Modal)
Vue.use(Descriptions)
Vue.use(List)
Vue.use(Row)
Vue.use(Col)
Vue.use(PageHeader)
Vue.use(Calendar)
Vue.use(Popconfirm)

Vue.prototype.$message = message
message.config({
  duration: 2, // 持续时间
  top: `100px`, // 到页面顶部距离
  maxCount: 3, // 最大显示数, 超过限制时，最早的消息会被自动关闭
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

axios.interceptors.response.use(
  function(res) {
    // console.log(res)
    var data = res.data
    return data
  },
  function(err) {
    console.log(err)
  }
)

Vue.filter('dateFormat1', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (dateStr == null || dateStr == '') {
    return ''
  }
  return moment(dateStr).format(pattern)
})
Vue.filter('dateFormat2', function(dateStr, pattern = 'YYYY-MM-DD') {
  if (dateStr == null || dateStr == '') {
    return ''
  }
  return moment(dateStr).format(pattern)
})
