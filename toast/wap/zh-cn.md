# ToastWap 组件
> 手机端操作之后的提示

## 基本用法

[浏览器手机模式在线预览](https://output.jsbin.com/qimiteg)

<br>

<p>
  <button @click="status1 = !status1">{{ status1 ? '隐藏' : '显示' }}</button>
  <w-toast-wap v-show="status1" content="确定退出吗"></w-toast-wap>
</p>
<br>
<br>

## 成功用法

[浏览器手机模式在线预览](https://output.jsbin.com/kolasul)

> 失败(error)和成功(success)是内置的，使用 `icon` 字段即可

<br>

<p>
  <button @click="status2 = !status2">{{ status2 ? '隐藏' : '显示' }}</button>
  <w-toast-wap v-show="status2" icon="success" content="确定退出吗"></w-toast-wap>
</p>
<br>
<br>

## 自定义图片用法

[浏览器手机模式在线预览](https://output.jsbin.com/rucuyum)

<br>

<p>
  <button @click="status3 = !status3">{{ status3 ? '隐藏' : '显示' }}</button>
  <w-toast-wap v-show="status3" content="确定退出吗">
    <img src="https://static2.evente.cn/static/img/icon.jpg" alt="icon" class="wtoast-wap-icon" slot="icon">
  </w-toast-wap>
</p>
<br>
<br>

## 自动关闭

[浏览器手机模式在线预览](https://output.jsbin.com/rurohuc)

> 需要添加 `ref` ，然后利用 `$emit`。自定义图片需要添加 `slot="icon"` 。

<br>

<p>
  <button @click="autoClose">{{ status3 ? '隐藏' : '显示' }}</button>
  <w-toast-wap v-show="status3" content="确定退出吗" ref="toast3">
    <img src="https://static2.evente.cn/static/img/icon.jpg" alt="icon" class="wtoast-wap-icon" slot="icon">
  </w-toast-wap>
</p>
<br>
<br>

## 自动关闭定制成功或失败

[浏览器手机模式在线预览](https://output.jsbin.com/yiyunil)

> 方法新增 `icon` 参数，只能定制成功(success)|失败(error)。 

<br>

<p>
  <button @click="autoClose1">{{ status4 ? '隐藏' : '显示' }}</button>
  <w-toast-wap v-show="status4" content="确定退出吗" ref="toast4">
  </w-toast-wap>
</p>
<br>
<br>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|content|内容|String|否|无|
|icon|成功或者失败的图片名字，与 CDN 结合。可选值： success, error|String|否|无|


<script>
import WToastWap from './ToastWap';

export default {
  data() {
    return {
      status1: false,
      status2: false,
      status3: false,
      status4: false,
    };
  },
  methods: {
    autoClose() {
      this.$refs.toast3.$emit('show', {
        content: '这只是一个错误',
        status: true,
        duration: 1000,
      });
    },
    autoClose1() {
      this.$refs.toast4.$emit('show', {
        content: '这只是一个错误',
        icon: 'success',
        status: true,
        duration: 1000,
      });
    },
  },
  components: {
    WToastWap,
  },
};
</script>
