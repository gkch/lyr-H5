<template>
  <div class="content">
    <h3 class="header">信息录入说明</h3>
    <p class="explain">为了更好的服务集团公司上下游的企业，缩短企业资金回流周期，解决上下游企业的资金链问题，集团专门成立商业保理公司，为合作企业提供应收账款转让服务。</p>
    <p class="explain">因之前合作模式限制，合作企业的相关信息为线下纸质文件，为了方便应收账款转让业务的合作，现在需要合作企业提供最新的企业信息，谢谢！！!</p>
    <el-button class="subBtn" type="primary" @click="toNextPage()">立即去填写</el-button>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'explain',
  data () {
    return {
    }
  },
  methods: {
    toNextPage(formName) {
      this.$router.push({
        name: "comInfo"
      })
    }
  }
}
</script>

<style scoped>
.content {
  padding: 6px 4px;
  text-align: center;
}
.header {
  text-align: center;
  margin-bottom: 20px;
}
.explain {
  margin: 8px auto;
  line-height: 30px;
  text-indent: 2rem;
  text-align: left;
  padding-left: 6px;
}
.subBtn {
  margin-top: 30px;
  width: 50%;
}
</style>
