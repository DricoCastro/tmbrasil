import Link from "next/link";
import { useRouter } from "next/router";
import { COLORS } from "../../../../../utils/colors";
import { PrimaryIcon } from "../../../components/PrimaryIcon";
import { IconsEnum } from "../../../components/PrimaryIcon/enum/icons";
import {
  EighthScreenHolder,
  HolderSocials,
  Maps,
  SocialsRadius,
  Title,
} from "./styles";

export const EighthScreen = () => {
  const router = useRouter();
  const brokeLine: string = "%0A";
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  return (
    <EighthScreenHolder>
      <Title>Entre em contato com a gente !</Title>
      <HolderSocials>
        <SocialsRadius>
          <Link href="mailto:thiago@tmbrasilbeneficios.com.br">
            <PrimaryIcon
              size="25px"
              fill={COLORS.scooter}
              icon={IconsEnum.EMAIL_ICON}
            />
          </Link>
        </SocialsRadius>
        <SocialsRadius>
          <Link href="https://www.instagram.com/tmbrasiloficial/">
            <PrimaryIcon
              size="25px"
              fill={COLORS.scooter}
              icon={IconsEnum.INSTAGRAM_ICON}
            />
          </Link>
        </SocialsRadius>

        <SocialsRadius onClick={wppText}>
          <PrimaryIcon
            style={{}}
            size="25px"
            fill={COLORS.scooter}
            icon={IconsEnum.WHATSAPP_ICON}
          />
        </SocialsRadius>
      </HolderSocials>
      <Title>E venha nos conhecer !</Title>
      <Maps
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7501.501813034599!2d-43.97171500000001!3d-19.934899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697088f42a727%3A0xeda71f7f35a665c3!2sR.%20Maria%20Macedo%2C%20233%20-%20Nova%20Granada%2C%20Belo%20Horizonte%20-%20MG%2C%2030421-223!5e0!3m2!1spt-BR!2sbr!4v1670525486740!5m2!1spt-BR!2sbr"
        loading="lazy"
      />
    </EighthScreenHolder>
  );
};
