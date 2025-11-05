import React, { Typography } from 'antd';
import { LinkProps } from 'antd/es/typography/Link';

/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:52:37
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:55:41
 */
export type EmailFieldProps = {
  value: string;
} & LinkProps;

export function EmailField(props: EmailFieldProps) {
  const { value, ...rest } = props;
  return <Typography.Link href={`mailto:${value}`} {...rest}>{value}</Typography.Link>;
}
