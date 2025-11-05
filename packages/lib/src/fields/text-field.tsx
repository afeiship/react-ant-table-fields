/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 16:00:52
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 16:02:11
 */
import React from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

export type TextFieldProps = {
  value: string;
} & TextProps

export function TextField(props: TextFieldProps) {
  const { value, ...rest } = props;
  return <Typography.Text {...rest}>{value}</Typography.Text>;
}
