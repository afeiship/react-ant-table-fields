/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:28:32
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:55:57
 */
import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import { LinkProps } from 'antd/es/typography/Link';

export type UrlFieldProps = {
  value: string;
} & LinkProps

export function UrlField(props: UrlFieldProps) {
  const { value, ...rest } = props;
  return (
    <Typography.Link href={value} {...rest}>
      <Space>
        {value}
        <LinkOutlined />
      </Space>
    </Typography.Link>
  );
}
