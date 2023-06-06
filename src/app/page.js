import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
const styles = {
  cards: "flex flex-col gap-3 p-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3",
  container: "max-w-7xl flex-1",
  main: "flex justify-center",
  wrapper: "mx-auto",
};
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.cards}>
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
