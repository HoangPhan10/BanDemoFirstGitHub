import styles from "./home.module.scss";
import CarouselSlide from "./CarouselSlide";
import BasicTabs from "./Tabs";
function Home() {
  return (
    <div className={styles.home}>
      <CarouselSlide />
      <BasicTabs />
    </div>
  );
}
export default Home;
