import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import { ConnectButton } from '@rainbow-me/rainbowkit';


export const HomePageContent: NextPage = function () {
    return (
        <>
      <div className="p-6">
        <section>

        </section>
        <section>
          
        <iframe width='100%' height='510px' src="https://api.mapbox.com/styles/v1/iotbrlabs/clzpfc34l00bk01pd5y074u1l.html?title=false&access_token=pk.eyJ1IjoiaW90YnJsYWJzIiwiYSI6ImNseXczYzJkMjBrcDAycXBtYTAzYmFpdDQifQ.Jma-gft9DEziqxjo6RFcCA&zoomwheel=false#2/-23.46/-46.55" title="Streets" />
          
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
  