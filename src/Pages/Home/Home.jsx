import Banner from "./Banner/Banner";
import ExtraService from "./ExtraService/ExtraService";
import RecommandedItems from "./RecommandedItems/RecommandedItems";
import SubscribeField from "./SubscribeField/SubscribeField";
import SuppliersRegion from "./SuppliersRegion/SuppliersRegion";

const Home = () => {
  return (
    <div>
      <Banner />
      <RecommandedItems></RecommandedItems>
      <ExtraService></ExtraService>
      <SuppliersRegion></SuppliersRegion>
      <SubscribeField></SubscribeField>
    </div>
  );
};

export default Home;
