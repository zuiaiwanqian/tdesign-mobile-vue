/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCheckTagProps } from '../tag/type';
import { PropType } from 'vue';

export default {
  /** 标签选中的状态，默认风格（theme=default）才有选中态 */
  checked: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  /** 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性 */
  defaultChecked: {
    type: Boolean,
    default: undefined,
  },
  /** 标签是否可关闭 */
  closable: Boolean,
  /** 组件子元素 */
  content: {
    type: [String, Number, Function] as PropType<TdCheckTagProps['content']>,
  },
  /** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
  disabled: Boolean,
  /** 标签中的图标，可自定义图标呈现 */
  icon: {
    type: Function as PropType<TdCheckTagProps['icon']>,
  },
  /** 标签类型，有三种：方形、圆角方形、标记型 */
  shape: {
    type: String as PropType<TdCheckTagProps['shape']>,
    default: 'square' as TdCheckTagProps['shape'],
    validator(val: TdCheckTagProps['shape']): boolean {
      return ['square', 'round', 'mark'].includes(val);
    },
  },
  /** 标签尺寸 */
  size: {
    type: String as PropType<TdCheckTagProps['size']>,
    default: 'medium' as TdCheckTagProps['size'],
    validator(val: TdCheckTagProps['size']): boolean {
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 组件子元素 */
  onChange: Function as PropType<TdCheckTagProps['onChange']>,
  /** 点击标签时触发 */
  onClick: Function as PropType<TdCheckTagProps['onClick']>,
};
