const theme = require('../config').theme
module.exports = {
  '@primary-color': theme.primaryColor,                    // 全局主色
  '@success-color': theme.successColor,                    // 成功色
  '@warning-color': theme.warningColor,                    // 警告色
  '@error-color': theme.errorColor,                        // 错误色
  '@font-size-base': theme.fontSizeBase,                   // 主字号
  '@text-color': theme.textColor,                          // 主文本色
  '@text-color-secondary': theme.textColorSecondary,       // 次文本色
  '@disabled-color': theme.disabledColor,                  // 失效色
  '@border-radius-base': theme.borderRadiusBase,           // 组件/浮层圆角
  '@border-color-base': theme.borderColorBase,             // 边框色
  '@link-color': '#1890ff',                                // 链接色
  '@heading-color': 'rgba(0, 0, 0, .85)',                  // 标题色
  '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)'       // 浮层阴影
}