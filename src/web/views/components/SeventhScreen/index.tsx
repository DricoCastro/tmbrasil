import ImagesCarousel from "./components/carousel";
import { SeventhScreenHolder, SeventhScreenTitle } from "./styles";

export const SeventhScreen = () => {
  return (
    <SeventhScreenHolder>
      <SeventhScreenTitle>
        O que nossos Associados tem a dizer sobre a gente:
      </SeventhScreenTitle>
      <ImagesCarousel />
    </SeventhScreenHolder>
  );
};
