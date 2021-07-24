<template>
  <div class="home">
    <h1>echarts组件</h1>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>


export default {
  name: 'Myecharts',
  components: {
  },
  mounted(){
   var myChart = this.$echarts.init(document.getElementById('main'))
   var  option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        myChart.setOption(option);
  }
  
}

</script>

<style lang="scss" scoped>
.home {
  h1 {
    text-align: center;
  }
}
</style>
