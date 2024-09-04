import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useBalance, useEnsName } from "wagmi";
import { useMemo } from "react";
//import Map from "@/components/map";



//const { isConnecting, address, isConnected, chain } = useAccountx();
  

export const HomePageContent: NextPage = function () {

  return (
      <>
    <div className="p-6">
      <section>

      </section>
      <section>
        
      <iframe src="./rastrear.html" width='100%' height='470px'></iframe> 
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
      </section>
    </div>
  </>
  )
};
  