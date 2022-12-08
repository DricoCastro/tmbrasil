import { FifthScreen } from "../components/FifthScreen";
import { FirstScreen } from "../components/FirstScreen";
import { FourthScreen } from "../components/FourthScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";
import Image from "next/image";
import { HomeHolder, HomeHolderWaveBottom, HomeHolderWaveTop } from "./styles";

const wave = require("../../../../public/images/wavesDivider.svg");

export const HomePage = () => {
  return (
    <HomeHolder>
      <FirstScreen />
      <HomeHolderWaveBottom>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveBottom>
      <SecondScreen />
      <HomeHolderWaveTop>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveTop>
      <ThirdScreen />
      <HomeHolderWaveBottom>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveBottom>
      <FourthScreen />
      <HomeHolderWaveTop>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveTop>
      <FifthScreen />
      <HomeHolderWaveBottom>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveBottom>
      <SixthScreen />
      <HomeHolderWaveTop>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveTop>
    </HomeHolder>
  );
};
