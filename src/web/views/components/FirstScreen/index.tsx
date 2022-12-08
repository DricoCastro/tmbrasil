import { Divider } from "@mui/material";
import { COLORS } from "../../../../../utils/colors";
import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  FirstScreenHolder,
  HolderLeftSide,
  HolderRightSide,
  HolderTexts,
  TextSubtitle,
  TextTitle,
} from "./styles";
import { useRouter } from "next/router";

const menImg = require("../../../../../public/images/men-first-screen.png");

export const FirstScreen = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  return (
    <FirstScreenHolder>
      <HolderLeftSide>
        <HolderTexts>
          <TextTitle>
            Proteção Veicular é TM Brasil Clube e Beneficios
          </TextTitle>
          <Divider
            style={{ width: "150px", backgroundColor: `${COLORS.scooter}` }}
          />
          <TextSubtitle>
            Contar com ATENDIMENTO e toda Segurança atraves de uma cobertura 24
            horas.
          </TextSubtitle>
        </HolderTexts>
        <PrimaryButton text="Fazer Simulação" onClick={wppText} />
      </HolderLeftSide>
      <HolderRightSide>
        <Image src={menImg} alt="men" width={250} />
      </HolderRightSide>
    </FirstScreenHolder>
  );
};
