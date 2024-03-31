import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { BotanixTestnet } from "@thirdweb-dev/chains";

const smartWalletConfig = {
  factoryAddress: "0x219c60335e728b195b2101b3A8f2c23570173fAC",
  gasless: true,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={BotanixTestnet}
      clientId="aa131b3a51f3247c974b4611ac4ff73e"
      supportedWallets={[smartWallet(embeddedWallet(), smartWalletConfig)]}
    >
      <Toaster />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
