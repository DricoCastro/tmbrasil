import { SVGProps } from "react";
import { IconsEnum } from "./enum/icons";
import CartStoreIcon from "./Icons/cart_store_icon";
import CipherIcon from "./Icons/cipher_icon";
import FacebookIcon from "./Icons/facebook_icon";
import HomeIcon from "./Icons/home_icon";
import InstagramIcon from "./Icons/instagram_icon";
import MenuIcon from "./Icons/menu_icon";
import PortfolioIcon from "./Icons/portfolio_icon";
import ServicesIcon from "./Icons/services_icon";
import WhatsappIcon from "./Icons/whatsapp_icon";
import { PrimaryIconContainer } from "./styles";

interface IconFromEnum extends SVGProps<SVGSVGElement> {
  icon_enum: IconsEnum;
}
const IconFromEnum = (props: IconFromEnum) => {
  switch (props.icon_enum) {
    case IconsEnum.FACEBOOK_ICON:
      return <FacebookIcon {...props} />;

    case IconsEnum.INSTAGRAM_ICON:
      return <InstagramIcon {...props} />;

    case IconsEnum.WHATSAPP_ICON:
      return <WhatsappIcon {...props} />;

    case IconsEnum.MENU_ICON:
      return <MenuIcon {...props} />;

    case IconsEnum.HOME_ICON:
      return <HomeIcon {...props} />;

    case IconsEnum.CART_STORE_ICON:
      return <CartStoreIcon {...props} />;

    case IconsEnum.CIPHER_ICON:
      return <CipherIcon {...props} />;

    case IconsEnum.SERVICES_ICON:
      return <ServicesIcon {...props} />;

    case IconsEnum.PORTFOLIO_ICON:
      return <PortfolioIcon {...props} />;
  }
};

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconsEnum;
  size?: string;
  alt?: string;
}
export const PrimaryIcon = (props: IconProps) => {
  const iconSize = props.size ?? "clamp(0.45rem, 1.15vw, 1.38rem)";

  return (
    <PrimaryIconContainer size={iconSize}>
      <IconFromEnum icon_enum={props.icon} {...props} />
    </PrimaryIconContainer>
  );
};
