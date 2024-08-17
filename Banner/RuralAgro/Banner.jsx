// Install react responsive carousel
// Rural Agro project banner component
// Change Content,design and logo as necessary

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/Banner/banner-1.jpg";
import img2 from "../../assets/images/Banner/banner-2.jpg";
import img3 from "../../assets/images/Banner/banner-3.jpg";
import img4 from "../../assets/images/Banner/banner-4.jpg";
import img5 from "../../assets/images/Banner/banner-5.jpg";
import img6 from "../../assets/images/Banner/banner-6.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img3} />
        <p className="legend">
          In the heart of Bangladesh`s countryside, a farmer`s dedication shines
          through as he nurtures the land that sustains generations
        </p>
      </div>
      <div>
        <img src={img1} />
        <p className="legend">
          Children`s laughter fills the air as they run through lush green
          fields, symbolizing the freedom and prosperity of rural life
        </p>
      </div>
      <div>
        <img src={img5} />
        <p className="legend">
          Amidst the golden hues of ripening crops, a farmer smile reflects the
          hope and promise of a fruitful season
        </p>
      </div>
      <div>
        <img src={img2} />
        <p className="legend">
          The mustard fields of Bangladesh stretch endlessly, a sea of vibrant
          yellow blossoms that dance under the warm sun
        </p>
      </div>

      <div>
        <img src={img6} />
        <p className="legend">
          The bustling rural market, alive with trade and vibrant with local
          produce, showcases the economic heartbeat of Bangladesh’s agricultural
          communities
        </p>
      </div>

      <div>
        <img src={img4} />
        <p className="legend">
          In the mustard fields, where golden blooms paint the landscape, the
          promise of a prosperous harvest brightens the spirits of all who
          witness it
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;
