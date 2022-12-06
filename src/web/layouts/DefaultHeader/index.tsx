import Image from "next/image";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import { COLORS } from "../../../../utils/colors";
import { useState } from "react";
import { Divider, IconButton, Menu } from "@mui/material";
import {
  HeaderContainer,
  HolderLogoHeader,
  HolderMenuIcon,
  HolderTitleIcon,
  HolderTitlesHeader,
  HomeHeaderHolder,
  MenuItemStyledComponent,
  TitleHeaderMoney,
  TitleMenuDrawer,
  TitlesHeader,
} from "./styles";
import { useRouter } from "next/router";

const logo = require("../../../../public/images/logo-tm-brasil.jpeg");

export const DefaultHeader = () => {
  const [drawer, setDrawer] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const openDrawer = drawer !== null;

  const handleClose = () => {
    setDrawer(null);
  };

  function openUserMenu(event: React.MouseEvent<HTMLElement>) {
    setDrawer(event.currentTarget);
  }

  function onTapMenu() {
    alert("Em Construção");
  }

  function onTapHomePage() {
    router.push("/");
  }

  function onTapServicesPage() {
    router.push("/servicos-prestados");
  }

  return (
    <HomeHeaderHolder>
      <HeaderContainer>
        <HolderLogoHeader>
          <Image
            onClick={onTapHomePage}
            style={{ cursor: "pointer" }}
            src={logo}
            alt="logoHeader"
            width={80}
            height={80}
          />
        </HolderLogoHeader>
        <HolderTitlesHeader>
          <HolderTitleIcon onClick={onTapHomePage}>
            <PrimaryIcon
              size={"18px"}
              icon={IconsEnum.HOME_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>HOME</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapServicesPage}>
            <PrimaryIcon
              size={"18px"}
              icon={IconsEnum.SERVICES_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>SERVIÇOS</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapMenu}>
            <PrimaryIcon
              size={"18px"}
              icon={IconsEnum.PORTFOLIO_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>PORTFÓLIO</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapMenu}>
            <PrimaryIcon
              size={"18px"}
              icon={IconsEnum.CIPHER_ICON}
              stroke={COLORS.scooter}
              fill={COLORS.scooter}
            />
            <TitleHeaderMoney>ORÇAMENTO</TitleHeaderMoney>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapMenu}>
            <PrimaryIcon
              size={"18px"}
              icon={IconsEnum.CART_STORE_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>LOJA</TitlesHeader>
          </HolderTitleIcon>
        </HolderTitlesHeader>
        <HolderMenuIcon>
          <IconButton
            onClick={openUserMenu}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={openDrawer ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDrawer ? "true" : undefined}
          >
            <PrimaryIcon
              size={"25px"}
              icon={IconsEnum.MENU_ICON}
              fill={COLORS.scooter}
            />
          </IconButton>
        </HolderMenuIcon>
        <Menu
          anchorEl={drawer}
          id="account-menu"
          open={openDrawer}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 6px var(--parsley))",
              borderRadius: "5px",
              width: "200px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 1.5,
              "@media (min-width: 900px)": {
                display: "none",
              },
              "&:before": {
                // eslint-disable-next-line quotes
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div>
            <MenuItemStyledComponent onClick={onTapHomePage}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.HOME_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Home</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider style={{ width: "200px" }} />

            <MenuItemStyledComponent onClick={onTapServicesPage}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.SERVICES_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Serviços</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={onTapMenu}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.PORTFOLIO_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Portifólio</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={onTapMenu}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.CIPHER_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Orçamento</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={onTapMenu}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.CART_STORE_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Loja</TitleMenuDrawer>
            </MenuItemStyledComponent>
          </div>
        </Menu>
      </HeaderContainer>
    </HomeHeaderHolder>
  );
};
