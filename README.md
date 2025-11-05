# react-ant-table-fields
> Table fields for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-table-fields
```

## usage
  ```js
  import {
    BooleanField,
    DateField,
    EmailField,
    HtmlField,
    ImageField,
    TagField, TextField,
    UrlField,
  } from '@jswork/react-ant-table-fields';
  import '@jswork/react-ant-table-fields/dist/style.scss';
  import React from 'react';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="y-4">
          <div className="x-2 *:border-2 *:px-1 *:rounded-3xl border-gray-300 ">
            <BooleanField className="inline-block" value={true} title="Yes" />
            <BooleanField className="inline-block" value={false} title="No" />
          </div>
          <hr />
          <div className="y-2 *:text-blue-500">
            <DateField className="inline-block" value={new Date()} />
            <DateField className="inline-block" format="datetime" value="2025-11-05T03:18:06+08:00" />
            <DateField className="inline-block" format="time" value="2025-11-05T03:18:06+08:00" />
          </div>
          <hr />
          <div className="x-2">
            <EmailField value={'hello@world.com'} />
          </div>
          <hr />
          <div className="x-2">
            <HtmlField value="<h3>Hello</h1>" />
            <HtmlField value="<span>world</h1>" />
          </div>
          <hr />
          <div>
            <ImageField className="size-20" value="https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />
          </div>
          <hr />
          <div>
            <TagField value="published" />
            <TagField value="draft" color="green" />
          </div>
          <hr />
          <div className="y-2">
            <TextField value="一些文本" />
            <TextField className="text-slate-500 text-xs" value="一些文本测试，可复制" copyable />
          </div>
          <hr />
          <div>
            <UrlField className="text-blue-600 text-sm" value="https://js.work" />
          </div>
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-ant-table-fields/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-table-fields/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-table-fields
[version-url]: https://npmjs.org/package/@jswork/react-ant-table-fields

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-table-fields
[license-url]: https://github.com/afeiship/react-ant-table-fields/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-table-fields
[size-url]: https://github.com/afeiship/react-ant-table-fields/blob/master/dist/react-ant-table-fields.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-table-fields
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-table-fields
