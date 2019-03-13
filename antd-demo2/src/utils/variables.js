module.exports = {
  '@primary-color': '#555555',                             // 全局主色
  '@primary-1': 'fade(@primary-color, 10)',
  '@primary-2': 'fade(@primary-color, 20)',

  '@success-color': '#52c41a',                             // 成功色
  '@warning-color': '#faad14',                             // 警告色
  '@error-color': '#f5222d',                               // 错误色
  '@normal-color': '#d9d9d9',

  '@font-size-base': '14px',                               // 主字号
  '@text-color': 'rgba(0, 0, 0, .65)',                     // 主文本色
  '@text-color-secondary': 'rgba(0, 0, 0, .45)',           // 次文本色
  '@disabled-color': 'rgba(0, 0, 0, .25)',                 // 失效色
  '@border-radius-base': '4px',                            // 组件/浮层圆角
  '@border-color-base': '#d9d9d9',                         // 边框色
  '@link-color': '#1890ff',                                // 链接色
  '@heading-color': 'rgba(0, 0, 0, .85)',                  // 标题色
  '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',      // 浮层阴影
  '@layout-header-height': '64px',                         // 头部的高度
  '@layout-header-background': '#001529', // 头部背景色

  '@item-active-bg': '@primary-1',
  '@item-hover-bg': '@primary-1',

  '@menu-width': '256px',  // 菜单宽度
  '@menu-bg': '#fff',
  '@menu-item-color': '@text-color',
  '@menu-highlight-color': '@primary-color',
  '@menu-item-active-bg': '@item-active-bg',
  '@menu-collapsed-width': '80px'
}