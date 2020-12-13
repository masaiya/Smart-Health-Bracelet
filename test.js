myChart.setOption({
    title: { text: '上一周体温指标' },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['体温指标']
    },
    xAxis: {
      name: '日期',
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      name: '体温(℃)',
      type: 'value'
    },
    series: [{
      name: '体温',
      data: this.healthDate.map(function(i) {
        return i.temprature
      }),
      type: 'line',
      smooth: true
    }]
  });