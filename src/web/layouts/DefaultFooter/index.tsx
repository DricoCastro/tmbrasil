import Link from "next/link";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import Image from "next/image";
import {
  HolderLogo,
  HomeFooterHolder,
  PanelFooterBottomContainer,
  PanelFooterBottomLinksUlContainer,
  PanelFooterBottomSocialMediaButtonContainer,
  PanelFooterBottomSocialMediaContainer,
  PanelFooterBottomSocialMediaContainerHolder,
  PanelFooterContainer,
  PanelFooterTopContainer,
} from "./styles";
import { COLORS } from "../../../../utils/colors";
import { useRouter } from "next/router";

const logo = require("../../../../public/images/logo-tm-brasil.jpeg");
const wave = require("../../../../public/images/wavesDivider.svg");

export const DeafultFooter = () => {
  const router = useRouter();
  function onTapHomePage() {
    router.push("/");
  }
  const brokeLine: string = "%0A";
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  function onTapPdfPage() {
    window.open(
      "https://drive.google.com/file/d/1Cfhz0XXINzNMHDjgznJpn5uewp9cT1lx/view?usp=sharing"
    );
  }
  return (
    <HomeFooterHolder>
      <PanelFooterContainer>
        <PanelFooterTopContainer>
          <HolderLogo>
            <Image
              onClick={onTapHomePage}
              style={{ cursor: "pointer" }}
              src={logo}
              alt="logoHeader"
              width={160}
              height={80}
            />
          </HolderLogo>
          <span>TM Brasil Proteção Veicular S.A. © Copyright 2022</span>
        </PanelFooterTopContainer>
        <PanelFooterBottomContainer>
          <PanelFooterBottomLinksUlContainer>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1Cfhz0XXINzNMHDjgznJpn5uewp9cT1lx/view?usp=sharing">
                Regulamento
              </Link>
            </li>
            <li>
              <Link href="/">TM Brasil</Link>
            </li>
            <li>
              <Link href="/">Benefícios</Link>
            </li>
            <li>
              <Link href="/">Clube Certo</Link>
            </li>
            <li>
              <Link href="/">Associado</Link>
            </li>
          </PanelFooterBottomLinksUlContainer>
          <PanelFooterBottomSocialMediaContainerHolder>
            <span>Vem conversar com a gente</span>
            <PanelFooterBottomSocialMediaContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="mailto:thiago@tmbrasilbeneficios.com.br">
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.EMAIL_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="https://www.instagram.com/tmbrasiloficial/">
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.INSTAGRAM_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <div onClick={wppText}>
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.WHATSAPP_ICON}
                  />
                </div>
              </PanelFooterBottomSocialMediaButtonContainer>
            </PanelFooterBottomSocialMediaContainer>
          </PanelFooterBottomSocialMediaContainerHolder>
        </PanelFooterBottomContainer>
      </PanelFooterContainer>
    </HomeFooterHolder>
  );
};
