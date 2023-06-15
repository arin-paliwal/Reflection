// import Navbar from "@/components/Navbar";
// import Banner from "@/components/Banner";
// import Cards from "@/components/Cards";
// import { useContext } from "react";
// import { ReflectionContext } from "@/context/ReflectionContext";
// import { Archivo } from "next/font/google";
// const archivo = Archivo({ subsets: ["latin"] });
// const styles = {
//   cards: "flex flex-col gap-3 p-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3",
//   container: "max-w-7xl flex-1",
//   main: "flex justify-center",
//   wrapper: "mx-auto",
// };
// export default function Home() {
//   const { Posts } = useContext(ReflectionContext);
//   return (
//     <main className={archivo.className}>
//       <div className={styles.wrapper}>
//         <Navbar />
//         <Banner />
//         <div className={styles.main}>
//           <div className={styles.container}>
//             <div className={styles.cards}>
//               {Posts.map((post) => (
//                 <Cards post={post} key={post.id} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import React, { useEffect, useState, useContext } from "react";
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
  container: "max-w-7xl flex-1",
  main: "flex justify-center",
  wrapper: "mx-auto",
};

export default function Home() {
  const { Posts } = useContext(ReflectionContext);
  const [loading, setLoading] = useState(true);
  const {currentUser}=useContext(ReflectionContext);

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
                {currentUser?(
                  <div className={styles.cards}>
                  {Posts.map((post) => (
                    <Cards post={post} key={post.id} />
                  ))}
                </div>
                ):(
                  <Standard/>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
