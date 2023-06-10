import "@/styles/globals.css";
import "@/styles/rotate.css";
import { Provider } from "@/context/ReflectionContext";
import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <main className={archivo.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
