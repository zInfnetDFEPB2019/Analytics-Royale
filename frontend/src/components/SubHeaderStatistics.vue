<template>
  <div>
    <div class="statistics__subheader statistics__trophyCaption">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHeaderStatistics',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title',
    },
  },
};
</script>

<style scoped>
.statistics__subheader {
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  letter-spacing: 0.9px;
  line-height: 24px;
  margin: 16px 0px 6px;
}
.statistics__trophyCaption::before {
  height: 21px;
  background: url('../assets/trophy.png') 0% 0% / cover;
}

.statistics__trophyCaption::before {
  display: inline-block;
  vertical-align: middle;
  content: '';
  width: 22px;
  margin-right: 8px;
  margin-top: -2px;
}
</style>
