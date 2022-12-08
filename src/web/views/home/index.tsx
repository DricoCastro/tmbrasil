import { FifthScreen } from "../components/FifthScreen";
import { FirstScreen } from "../components/FirstScreen";
import { FourthScreen } from "../components/FourthScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";
import Image from "next/image";

import { SeventhScreen } from "../components/SeventhScreen";
import { EighthScreen } from "../components/EighthScreen";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import { useRouter } from "next/router";
import {
  HomeHolder,
  HomeHolderWaveBottom,
  HomeHolderWaveTop,
  Wpp,
} from "./styles";

const wave = require("../../../../public/images/wavesDivider.svg");

export const HomePage = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
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
      <SeventhScreen />
      <HomeHolderWaveBottom>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveBottom>
      <EighthScreen />
      <HomeHolderWaveTop>
        <Image style={{ width: "100%" }} src={wave} alt="wave" />
      </HomeHolderWaveTop>
      <Wpp onClick={wppText}>
        <PrimaryIcon icon={IconsEnum.WHATSAPP_ICON} size="25px" fill="white" />
      </Wpp>
    </HomeHolder>
  );
};
