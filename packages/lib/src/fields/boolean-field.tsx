/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 14:45:01
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 14:54:24
 */
import React from 'react';
import { HTMLAttributes, ReactNode } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export type BooleanFieldProps = {
  /**
   * The value of the field.
   */
  value: boolean;
  /**
   * The text shown in the tooltip.
   */
  title?: ReactNode;
  /**
   * If there is a value, this is the icon to use.
   */
  trueIcon?: ReactNode;
  /**
   * If there is no value, this is the icon to use.
   */
  falseIcon?: ReactNode;
  /**
   * If there is a value, this is the text to use.
   */
  valueLabelTrue?: ReactNode;
  /**
   * If there is no value, this is the text to use.
   */
  valueLabelFalse?: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const defaultProps = {
  trueIcon: <CheckOutlined />,
  falseIcon: <CloseOutlined />,
};

export function BooleanField(props: BooleanFieldProps) {
  const { value, title, trueIcon, falseIcon, valueLabelTrue, valueLabelFalse, ...rest } = { ...defaultProps, ...props };
  const icon = value ? trueIcon : falseIcon;
  const label = value ? valueLabelTrue : valueLabelFalse;
  return (
    <Tooltip title={title}>
      <span {...rest}>
        {icon}
        {label}
      </span>
    </Tooltip>
  );
}
