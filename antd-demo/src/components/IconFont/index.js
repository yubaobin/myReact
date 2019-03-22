import { Icon } from 'ybbtestui1';
import { iconfontUrl, root } from '@/config';

// 使用：
// import IconFont from '@/components/IconFont';
// <IconFont type='icon-demo' className='xxx-xxx' />
const scriptUrl = iconfontUrl ? iconfontUrl : `${root}/iconfont/iconfont.js`
export default Icon.createFromIconfontCN({ scriptUrl });
