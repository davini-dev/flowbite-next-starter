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
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map posix={[-23.462007, -46.556279]} />
      </div>
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
              </section>
    </>
  );
};

function useAccount(): { isConnecting: any; address: any; isConnected: any; chain: any; } {
  throw new Error("Function not implemented.");
}
  