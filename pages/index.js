import React, { useEffect, useState, useContext, useRef } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Loader from "@/components/Loader1";
import { ReflectionContext } from "@/context/ReflectionContext";
import { Archivo } from "next/font/google";
import Standard from "@/components/Standard";
import {useRouter} from "next/router";

const archivo = Archivo({ subsets: ["latin"] });

const styles = {
  cards: "flex flex-col p-10 grid-cols-2 sm:gap-9 gap-[4rem] grid-cols-3",
  container: "max-w-7xl flex-1 gap-5",
  main: "flex justify-center gap-5",
  wrapper: "mx-auto my-auto",
};


export default function Home() {
  const { Posts } = useContext(ReflectionContext);
  const [loading, setLoading] = useState(true);
  const { handleUserAuthentication,currentUser } = useContext(ReflectionContext);
  const router = useRouter();
  const handleAcceptAndSignIn = () => {
    router.push("/");
    handleUserAuthentication();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
         <>
          {loading ? (
            <Loader />
          ) : (
            <main className={archivo.className}>
              <div className={styles.wrapper}>
                  <Navbar />
                  <Banner />
                <div className={styles.main}>
                  <div className={styles.container}>
                    {currentUser ? (
                      <div className={styles.cards}>
                        {Posts.map((post) => (
                          <Cards post={post} key={post.id} />
                        ))}
                      </div>
                    ) : (
                      <Standard />
                    )}
                  </div>
                </div>
              </div>
            </main>
          )}
        </>
  );
}
