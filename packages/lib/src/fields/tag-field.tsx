/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:44:32
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:45:28
 */
import React, { Tag, TagProps } from 'antd';

export type TagFieldProps = {
  value?: string;
} & TagProps;

export function TagField(props: TagFieldProps) {
  const { value, ...rest } = props;
  return <Tag {...rest}>{value}</Tag>;
}
