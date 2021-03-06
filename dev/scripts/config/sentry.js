const cfg = {
     MESSAGE:{
          10001: ['进入大厅',    1],
          10003: ['关闭大厅窗口', 1]
     },
     EVENT:{
          20001: ['设备详情',   0],
          20002: ['压缩出错',   -3],
          20003: ['系统弹窗',   -3],
          20004: ['完成，历史累计有效压缩数量',   0],
     },
     LEVEL:{
          [1]:  'log',
          [0]:  'info',
          [-1]: 'warning',
          [-2]: 'error',
          [-3]: 'fatal'
     }
};
module.exports = cfg;