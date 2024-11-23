import Destinations from "../Destinations/Destinations";
import SliderBanner from "../Slider/Sliderbanner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import WhyChoose from "../WhyChoose/WhyChoose";
import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div className="font-bodyFont">
      <SliderBanner />
      <WhyChoose />
      <Feature />
      <Destinations />
      <SpecialOffers />
    </div>
  );
};

export default Home;
