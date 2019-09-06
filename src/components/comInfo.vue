<template>
  <div class="content">
    <h3 class="header">信息录入</h3>
    <div class="action-title">企业信息</div>
    <el-form ref="formData" :model="formData" label-width="110px" :rules="rules">
      <!-- <el-card shadow="hover"> -->
        <el-form-item label="企业名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="纳税人识别号" prop="code">
          <el-input v-model="formData.code" placeholder="请输入纳税人识别号"></el-input>
        </el-form-item>
        <el-form-item label="企业地址">
          <el-input v-model="formData.address" placeholder="请输入企业地址"></el-input>
        </el-form-item>
        <el-form-item label="企业电话" prop="phone">
          <el-input v-model="formData.phone" placeholder="请输入企业电话"></el-input>
        </el-form-item>
        <el-form-item label="企业法人" prop="legalPerson">
          <el-input v-model="formData.legalPerson" placeholder="请输入企业法人"></el-input>
        </el-form-item>
      <!-- </el-card> -->
      <div class="action-title">账户信息</div>
      <!-- <el-card shadow="hover"> -->
        <el-form-item label="开户银行">
          <el-input v-model="formData.bank" placeholder="请输入开户银行"></el-input>
        </el-form-item>
        <el-form-item label="银行账号">
          <el-input v-model="formData.bankNo" placeholder="请输入银行账号"></el-input>
        </el-form-item>
      <!-- </el-card> -->
      <div class="action-title">角色信息</div>
      <!-- <el-card shadow="hover"> -->
        <el-form-item label="角色" prop="role">
          <el-select v-model="formData.role" placeholder="请选择企业角色">
            <el-option label="供应商" value="供应商"></el-option>
            <el-option label="经销商" value="经销商"></el-option>
          </el-select>
        </el-form-item>
      <!-- </el-card> -->
      <el-form-item>
        <el-button class="subBtn" type="primary" @click="submitForm('formData')">保 存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'comInfo',
  data () {
    return {
      formData: {
        name: '',
        code: '',
        address: '',
        phone: '',
        legalPerson: '',
        bank: '',
        bankNo: '',
        role: ''
      },
      rules: {
        name: [{ required: true, message: '请输入公司名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入纳税人识别号', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入单位电话', trigger: 'blur' }],
        legalPerson: [{ required: true, message: '请输入企业法人', trigger: 'blur' }],
        role: [{ required: true, message: '请选择角色', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let loading = this.$loading({
            lock: true,
            text: '信息提交中······',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
            _this.$message({type: 'success',message: '信息提交成功！'})
          },1000)
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.content {
  padding: 6px 4px;
}
.header {
  text-align: center;
  margin-bottom: 16px;
}
.action-title {
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-top: 10px;
}
.subBtn {
  margin-top: 10px;
  width: 50%;
}
</style>
