import Image from "next/image";
import {
  CardDescription,
  Card,
  HolderCards,
  HolderTexts,
  TextSubTitle,
  TextTitle,
  ThirdScreenHolder,
  CardTitle,
  Information,
} from "./styles";
const theft = require("../../../../../public/images/roubo.svg");
const colision = require("../../../../../public/images/colisao.png");
const colisionThird = require("../../../../../public/images/dano.png");
const broken = require("../../../../../public/images/broken.png");

export const ThirdScreen = () => {
  return (
    <ThirdScreenHolder>
      <HolderTexts>
        <TextTitle>Proteção Veicular de VERDADE!</TextTitle>
        <TextSubTitle>
          A TM Brasil é lider no mercado quando o assunto é PROTEÇÃO VEICULAR
        </TextSubTitle>
      </HolderTexts>
      <HolderCards>
        <Card>
          <Image src={theft} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Roubo e Furto</CardTitle>
          <CardDescription>
            Proteção contra roubo e furto do seu veículo, com indenização de
            100% do valor!*
            <br />
            <br />
          </CardDescription>
        </Card>
        <Card>
          <Image src={colision} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Colisão</CardTitle>
          <CardDescription>
            Cobertura em caso de colisão do seu veículo. Também oferecemos
            cobertura para terceiros, veja a melhor opção para você.
          </CardDescription>
        </Card>
        <Card>
          <Image
            src={colisionThird}
            alt={"carTheft"}
            height={100}
            width={100}
          />
          <CardTitle>Danos a Terceiros</CardTitle>
          <CardDescription>
            Cobertura para terceiros, temos várias opções de valores, veja a
            melhor opção para você.
          </CardDescription>
        </Card>
        <Card>
          <Image src={broken} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Perda Total</CardTitle>
          <CardDescription>
            Indenização do associado de 100% do valor do seu veículo.*
            <br />
            <br />
          </CardDescription>
        </Card>
      </HolderCards>
      <Information>
        *Valor contratado em contrato e atenção às regras de veículos
        recuperados e etc.
      </Information>
    </ThirdScreenHolder>
  );
};
