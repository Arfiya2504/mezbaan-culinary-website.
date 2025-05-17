
import HeroSection from '../components/HeroSection';
import About from '../components/About.jsx';
import Qualities from '../components/Qualities.jsx';
import Menu from '../components/Menu.jsx';
import WhoAreWe from '../components/WhoAreWe.jsx';
import Team from '../components/Team.jsx'; // ✅ Import Team here
import Reservation from '../components/Reservation.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team /> {/* ✅ Use Team here */}
      <Reservation />
      <Footer />
    </>
  );
};

export default Home;
