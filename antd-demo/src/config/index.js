const config = {
  appName: '',
  iconfontUrl: '',
  root: process.env.PUBLIC_URL,
  theme: { // 配置一些主要的颜色，其他可在variables中自行添加
    primaryColor: '#e30a20',                         // 全局主色
    successColor: '#52c41a',                         // 成功色
    warningColor: '#faad14',                         // 警告色
    errorColor: '#f5222d',                           // 错误色
    fontSizeBase: '14px',                            // 主字号
    textColor: 'rgba(0, 0, 0, .65)',                 // 主文本色
    textColorSecondary:' rgba(0, 0, 0, .45)',        // 次文本色
    disabledColor: 'rgba(0, 0, 0, .25)',             // 失效色
    borderRadiusBase: '4px',                         // 组件/浮层圆角
    borderColorBase: '#d9d9d9'                       // 边框色
  }
}
module.exports = config