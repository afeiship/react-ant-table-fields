/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:22:11
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:26:57
 */
import React, { Image, ImageProps } from 'antd';

export type ImageFieldProps = {
  value?: string;
} & ImageProps

export function ImageField(props: ImageFieldProps) {
  const { value, className, ...rest } = props;
  return <Image rootClassName={className} src={value} {...rest} />;
}
