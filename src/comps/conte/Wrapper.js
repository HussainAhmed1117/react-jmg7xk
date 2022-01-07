import React from 'react';
import DataContext from './ContextData';
export default function ({ childeren }) {
  const [data, setData] = useState(0);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
