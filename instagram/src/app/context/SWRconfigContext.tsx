"use client";

import { SWRConfig } from "swr";

interface Props {
  children: React.ReactNode;
}

const SWRconfigContext: React.FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
export default SWRconfigContext;
