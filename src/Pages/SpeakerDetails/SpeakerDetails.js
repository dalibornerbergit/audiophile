import { useParams } from "react-router-dom";
import Menu from "../../Components/Common/Menu/Menu";
import SomeGuy from "../../Components/Common/SomeGuy/SomeGuy";
import Header from "../../Components/Layout/Header/Header";
import YouMayAlsoLike from "../../Components/Common/YouMayAlsoLike/YouMayAlsoLike";
import ImageMosaic from "../../Components/Common/ImageMosaic/ImageMosaic";
import ProductDetails from "../../Components/Common/ProductDetails/ProductDetails";
import GoBack from "../../Components/Common/GoBack/GoBack";
import ItemDetails from "../../Components/Common/ItemDetails/ItemDetails";

import data from "../../data.json";

import "./SpeakerDetails.css";

const SpeakerDetails = () => {
  const params = useParams();

  return (
    <>
      <div className="dark-header">
        <Header />
      </div>

      <div className="container">
        <GoBack />

        <ItemDetails data={data} params={params} />

        <ProductDetails item={data[params.id]} />

        <ImageMosaic item={data[params.id]} />

        <YouMayAlsoLike />

        <Menu />

        <SomeGuy />
      </div>
    </>
  );
};

export default SpeakerDetails;
