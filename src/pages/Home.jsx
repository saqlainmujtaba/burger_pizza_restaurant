import BestSellers from "../components/BestSellers";
import ExploreMenu from "../components/Explore Menu";
import Feauture from "../components/Feauture";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import TopDeals from "../components/TopDeals";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <ExploreMenu />
      <BestSellers />
      <TopDeals />
      <Feauture />
      <Footer /> 
      {/* 
      */}
    </>
  );
};

export default Home;
