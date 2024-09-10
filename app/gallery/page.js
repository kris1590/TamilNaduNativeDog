import Navbar from "../components/Navbar";
import ImageSlider from "./image-slider";
import {
  RAJAPALAYAM_IMAGES,
  CHIPPI_IMAGES,
  KANNI_IMAGES,
} from "../static-content.js";
export default function Gallery() {
  return (
    <>
      <Navbar />;
      <div className="flex flex-col items-center ">
        <div className="mb-8 mt-8">
          <h1 className=" text-3xl font-bold tracking-tight lg:text-4xl text-center mb-4">
            Rajapalayam
          </h1>
          <div className="  max-w-sm  md:max-w-md lg:max-w-lg   ">
            <ImageSlider images={RAJAPALAYAM_IMAGES} />
          </div>
        </div>
        <div className="mb-8 mt-8">
          <h1 className=" text-3xl font-bold tracking-tight lg:text-4xl text-center mb-4">
            Chippiparai
          </h1>
          <div className="  max-w-sm  md:max-w-md lg:max-w-lg   ">
            <ImageSlider images={CHIPPI_IMAGES} />
          </div>
        </div>
        <div className="mb-8 mt-8">
          <h1 className=" text-3xl font-bold tracking-tight lg:text-4xl text-center mb-4">
            Kanni
          </h1>
          <div className="  max-w-sm  md:max-w-md lg:max-w-lg   ">
            <ImageSlider images={KANNI_IMAGES} />
          </div>
        </div>
      </div>
    </>
  );
}
