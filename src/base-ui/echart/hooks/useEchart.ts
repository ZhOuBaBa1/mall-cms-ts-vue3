import * as echarts from 'echarts'

import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const ecahrtInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsCoreOption) => {
    ecahrtInstance.setOption(options)
  }

  window.addEventListener('resize', () => {
    ecahrtInstance.resize()
  })

  return {
    setOptions,
    ecahrtInstance
  }
}
