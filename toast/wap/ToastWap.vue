<template>
  <div class="wtoast-wap" :class="{
    ['wtoast-wap-big']: icon,
  }" v-show="modalShow">
    <div class="wtoast-wap-icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <img :src="`https://static2.evente.cn/static/img/toast-${icon}.png`" alt="icon" class="wtoast-wap-icon" v-else-if="icon">
    <div class="wtoast-wap-text" v-if="meg">{{meg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meg: this.content,
      modalShow: false,
    };
  },
  props: {
    icon: String,
    content: String,
    duration: {
      type: Number,
      default: 5000,
    },
  },
  mounted() {
    this.$on('show', (params) => {
      this.childAction(params);
    });
  },
  methods: {
    childAction({ status = false, content = this.content, duration = this.duration }) {
      this.modalShow = status;
      this.meg = content;
      if (status) {
        setTimeout(() => {
          this.modalShow = false;
        }, duration);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import './toastwap.scss';
</style>
