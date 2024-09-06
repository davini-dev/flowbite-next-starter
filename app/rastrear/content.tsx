import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useBalance, useEnsName } from "wagmi";
import { useMemo } from "react";
//import Map from "@/components/map";



//const { isConnecting, address, isConnected, chain } = useAccountx();
  

export const HomePageContent: NextPage = function () {

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <p>Lendo mapa...</p>,
        ssr: false,
      }),
    []
  );

  return (
     <>
      <section>
      <div>
        <Map posix={[-23.462007, -46.556279]} />
      </div>
      </section>     
      <section>
              <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 12,
            }}
          >
                  <ConnectButton />
          </div>
          <FooterPage />
      </section>
    </>
  );
};


  