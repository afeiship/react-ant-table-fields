import { HTMLAttributes } from 'react';

/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:28:32
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:42:39
 */
import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export type UrlFieldProps = {
  value: string;
} & HTMLAttributes<HTMLAnchorElement>

export function UrlField(props: UrlFieldProps) {
  const { value, ...rest } = props;
  return (
    <a href={value} {...rest}>
      <Space>
        {value}
        <LinkOutlined />
      </Space>
    </a>
  );
}
