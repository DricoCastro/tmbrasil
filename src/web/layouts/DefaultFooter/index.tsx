import Link from "next/link";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import Image from "next/image";
import {
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

export const DeafultFooter = () => {
  const router = useRouter();
  function onTapHomePage() {
    router.push("/");
  }
  return (
    <HomeFooterHolder>
      <PanelFooterContainer>
        <PanelFooterTopContainer>
          <Image
            onClick={onTapHomePage}
            style={{ cursor: "pointer" }}
            src={logo}
            alt="logoHeader"
            width={100}
            height={100}
          />
          <span>Universo Jardinagem S.A. © Copyright 2022</span>
        </PanelFooterTopContainer>
        <PanelFooterBottomContainer>
          <PanelFooterBottomLinksUlContainer>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/servicos-prestados">Serviços</Link>
            </li>
            <li>
              <Link href="/">Portfólio</Link>
            </li>
            <li>
              <Link href="/">Orçamento</Link>
            </li>
            <li>
              <Link href="/">Loja</Link>
            </li>
          </PanelFooterBottomLinksUlContainer>
          <PanelFooterBottomSocialMediaContainerHolder>
            <span>Vem conversar com a gente</span>
            <PanelFooterBottomSocialMediaContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.FACEBOOK_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.INSTAGRAM_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
              <PanelFooterBottomSocialMediaButtonContainer>
                <Link href="/">
                  <PrimaryIcon
                    size="18px"
                    fill={COLORS.scooter}
                    icon={IconsEnum.WHATSAPP_ICON}
                  />
                </Link>
              </PanelFooterBottomSocialMediaButtonContainer>
            </PanelFooterBottomSocialMediaContainer>
          </PanelFooterBottomSocialMediaContainerHolder>
        </PanelFooterBottomContainer>
      </PanelFooterContainer>
    </HomeFooterHolder>
  );
};
