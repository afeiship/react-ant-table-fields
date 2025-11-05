import { BooleanField, DateField, ImageField, UrlField } from '@jswork/react-ant-table-fields/src/main';
import '@jswork/react-ant-table-fields/src/style.scss';
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
        <div>
          <ImageField className="size-20" value="https://tva1.js.work/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg" />
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
