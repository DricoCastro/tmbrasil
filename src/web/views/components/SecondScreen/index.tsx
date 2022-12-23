import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  SecondScreenHolder,
  TextTitle,
  FirstParagraph,
  HolderTexts,
  HolderInfos,
  HolderCards,
  Card,
  DescritionSection,
} from "./styles";
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
            <Image width={125} src={shieldIcon} alt={"shieldIcon"} />
            <a>
              Cobertura 24H <br /> 7 Dias por semana
            </a>
          </Card>
          <Card>
            <Image width={125} src={BandeiraIcon} alt={"shieldIcon"} />
            <a>
              Em todo <br /> território nacional
            </a>
          </Card>
        </HolderCards>
        <DescritionSection>
          Com propósito de cuidar de todos os veículos e frotas de nossos
          associados de forma eficaz! <br /> Temos uma equipe preparada para lhe
          atender, visando a solução dos problemas, garantindo um atendimento de
          qualidade, personalizado e diferenciado quando você mais precisa!
        </DescritionSection>
        <PrimaryButton text="Faça uma cotação agora!" onClick={wppText} />
      </HolderInfos>
    </SecondScreenHolder>
  );
};
