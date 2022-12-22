import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  SecondScreenHolder,
  TextTitle,
  FirstParagraph,
  HolderTexts,
  HolderInfos,
  HolderCards,
  Card,
} from "./styles";
import { useRouter } from "next/router";

const shieldIcon = require("../../../../../public/icons/shield.png");
const BandeiraIcon = require("../../../../../public/icons/bandeira.jpeg");

export const SecondScreen = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  return (
    <SecondScreenHolder>
      <HolderInfos>
        <HolderTexts>
          <TextTitle>Por que a TM Brasil ?</TextTitle>
          <FirstParagraph>
            Oferecemos ao Associado TM Brasil uma garantia de <a>EXCELÊNCIA</a>{" "}
            no atendimento!
          </FirstParagraph>
        </HolderTexts>
        <HolderCards>
          <Card>
            <Image width={150} src={shieldIcon} alt={"shieldIcon"} />
            <a>
              Cobertura 24H <br /> 7 Dias por semana
            </a>
          </Card>
          <Card>
            <Image width={150} src={BandeiraIcon} alt={"shieldIcon"} />
            <a>
              Em todo <br /> território nacional
            </a>
          </Card>
        </HolderCards>
        <PrimaryButton text="Faça uma cotação agora!" onClick={wppText} />
      </HolderInfos>
    </SecondScreenHolder>
  );
};
