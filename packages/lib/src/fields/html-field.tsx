/**
 * @Author: aric.zheng 1290657123@qq.com
 * @Date: 2025-11-05 15:46:52
 * @LastEditors: aric.zheng 1290657123@qq.com
 * @LastEditTime: 2025-11-05 15:49:43
 */
import React, { HTMLAttributes } from 'react';

export type HtmlFieldProps = {
  value: string;
} & HTMLAttributes<HTMLSpanElement>

export function HtmlField(props: HtmlFieldProps) {
  const { value, ...rest } = props;
  return <span dangerouslySetInnerHTML={{ __html: value }} {...rest} />;
}
