<template>
  <div>
    <div class="statistics__metric">
      <div class="statistics__metricCaption ui__mediumText">
        {{ nomeVariavel }}
      </div>
      <div class="statistics__metricDots"></div>
      <div class="statistics__metricCounter ui__headerExtraSmall">
        {{ maximoTrofeus }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultStatistics',
  props: {
    nomeVariavel: {
      type: String,
      required: true,
    },
    maximoTrofeus: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style scoped>
.statistics__metric {
  width: 100%;
  margin-bottom: 0px;
  display: flex;
  min-height: 32px;
}
.ui__mediumText {
  font-size: 16px;
  line-height: 26px;
}
.statistics__metricCaption {
  white-space: nowrap;
}
.statistics__metricDots {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  border-bottom: 1px dotted rgb(204, 204, 204);
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  top: -13px;
}
.ui__headerExtraSmall {
  font-size: 20px;
  line-height: 20px;
  font-weight: 900;
}
.statistics__metricCounter {
  font-size: 18px;
  margin-top: 3px;
  text-align: right;
  font-feature-settings: 'tnum';
}
</style>
