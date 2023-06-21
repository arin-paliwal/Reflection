import React, { useEffect, useState, useContext, useRef } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Loader from "@/components/Loader1";
import { ReflectionContext } from "@/context/ReflectionContext";
import { Archivo } from "next/font/google";
import Standard from "@/components/Standard";

const archivo = Archivo({ subsets: ["latin"] });

const styles = {
  cards: "flex flex-col gap-3 p-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3",
  container: "max-w-7xl flex-1 gap-5",
  main: "flex justify-center gap-5",
  wrapper: "mx-auto",
  // landingPage: "h-screen",
};

export default function Home() {
  const { Posts } = useContext(ReflectionContext);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(ReflectionContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 600);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobileScreen ? (
        <div className="h-screen w-screen">
          <div className=" flex h-full items-center justify-center">
            <h1 className="text-xl">Page Not Found | 404</h1>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <main className={archivo.className}>
              <div className={styles.wrapper}>
                <div className={styles.landingPage}>
                  <Navbar />
                  <Banner />
                </div>
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
      )}
    </>
  );
}
