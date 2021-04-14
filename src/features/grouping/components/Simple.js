import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Typography from '@material-ui/core/Typography';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  {
    id:1,
    sector:'Bilding Construction',
    img:"/img/ben-allan-BIeC4YK2MTA-unsplash.jpg",
    count:33380
  },
  {
    id:2,
    sector:'Power & Energy',
    img:"/img/charlie-hang-Hf1Wk-T4Lxo-unsplash.jpg",
    count:4180
  },
  {
    id:1,
    sector:'Ports',
    img:"/img/danist-8Gg2Ne_uTcM-unsplash.jpg",
    count:5780
  },
  {
    id:1,
    sector:'Marine',
    img:"/img/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg",
    count:780
  },
  {
    id:1,
    sector:'Airports/Aviation',
    img: "/img/fre-sonneveld-q6n8nIrDQHE-unsplash.jpg",
    count:500
  },
  {
    id:1,
    sector:'Landscaping',
    img:"/img/patrick-hendry-6xeDIZgoPaw-unsplash.jpg",
    count:5780
  },
  
  {
    id:1,
    sector:'Electrical and Instrumentation',
    img:"/img/andre-robillard-IUwLkxL49co-unsplash.jpg",
    count:2780
  }
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 7).map((image) => {
        return (
          <>
          <Image
            draggable={false}
            style={{ width: "100%", height: "90%" }}
            src={image.img}
          />
          <Typography variant="button" display="block" className="mt-1" gutterBottom>
            {image.sector}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
          {image.count} listings
          </Typography>
      </>
        );
      })}
    </Carousel>
  );
};

export default Simple;
