import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AssociatesData from "./data";
import styles from "./StylesArrow.module.css";
import clsx from "clsx";
import { HolderCarousel, PageHolder, HolderCard } from "./styles";
import Image from "next/image";

export default function AssociatesCarousel() {
  const associateCarousel = AssociatesData.map((associate, i) => (
    <HolderCard key={i}>
      <Image
        width={250}
        height={350}
        style={{
          borderRadius: "10px",
          margin: "auto",
          boxShadow:
            " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
        src={associate.image}
        alt="logo"
      />
    </HolderCard>
  ));

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function Carousel() {
    const configCarousel = {
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            cssEase: "linear",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 799,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <HolderCarousel>
        <Slider {...configCarousel}>{associateCarousel}</Slider>
      </HolderCarousel>
    );
  }

  return (
    <PageHolder>
      <Carousel />
    </PageHolder>
  );
}
