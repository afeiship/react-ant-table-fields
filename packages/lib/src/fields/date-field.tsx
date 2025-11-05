/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 14:59:40
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:19:10
 */

import React, { FC, HTMLAttributes } from 'react';
import sdf, { FormatKey } from '@jswork/simple-date-format';

export type DateFieldProps = {
  value: string | Date;
  format?: FormatKey | string;
} & HTMLAttributes<HTMLSpanElement>;

const defaultProps = {
  format: 'YYYY-MM-DD',
};

export const DateField: FC<DateFieldProps> = (props) => {
  const { value, format, ...rest } = { ...defaultProps, ...props };
  const _value = sdf(format!, value);
  return (
    <span {...rest}>{_value}</span>
  );
};
