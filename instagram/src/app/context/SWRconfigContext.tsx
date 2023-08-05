"use client";

import { SWRConfig } from "swr";

interface Props {
  children: React.ReactNode;
}

const SWRconfigContext = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
export default SWRconfigContext;
