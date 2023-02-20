"use client";
import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

import { Button, Container } from "@mui/material";
import style from "../../styles/header.module.scss";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from "next-i18next";

const Header = (props) => {
  const headerRef = useRef(null);
  const [languageToggle, setlanguageToggle] = useState(false);
  const menuRef = useRef(null);
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  // const { t: translate } = useTranslation("common");

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  const NAV__LINK = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "about-us",
      display: "About",
    },
    {
      path: "services",
      display: "Services",
    },
    {
      path: "demo",
      display: "Demo",
    },
    {
      path: "contact",
      display: "Contact",
    },
  ];
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${style.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${style.header__shrink}`);
    }
  };
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      scroll: false,
      locale: newLocale,
    });
    setlanguageToggle(!languageToggle);
  };

  const changeTo = router.locale === "en" ? "de" : "en";

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${style.menu__active}`);

  return (
    <header className={`${style.header_container}`} ref={headerRef}>
      <nav className="header_nav">
        <Container>
          <div className={`${style.nav__wrapper}`}>
            {/* ======== navigation logo ======== */}
            <div className={`${style.logo}`}>
              <h1>FOYS</h1>
            </div>

            {/* ========= nav menu =========== */}
            <div
              className={`${style.navigation}`}
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className={`${style.nav__menu}`}>
                {NAV__LINK.map((item, index) => (
                  <Link href={item.path} key={index}>
                    {item.display}
                  </Link>
                ))}
              </div>
            </div>
            <div className={`${style.nav__right}`}>
              <div className="header_language">
                <button onClick={() => setlanguageToggle(!languageToggle)}>
                  {locale}
                </button>
                <ul
                  className={`language_container ${
                    languageToggle ? "activeMenu" : ""
                  }`}
                >
                  {[
                    { title: "English", path: "en" },
                    { title: "German", path: "de" },
                  ].map((el) => (
                    <li
                      key={el.title}
                      onClick={() => onToggleLanguageClick(changeTo)}
                      className="language_item"
                    >
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href=""
                        locale={changeTo}
                      >
                        {el.title}
                      </a>
                      {locale == el.path && <CheckIcon></CheckIcon>}
                    </li>
                  ))}
                </ul>
              </div>
              <p className=" d-flex align-items-center gap-2 mb-0">
                <Button size="large" variant="outlined">
                  Get Started
                </Button>
              </p>
            </div>

            <span onClick={toggleMenu} className={`${style.mobile__menu}`}>
              HH=ello
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </Container>
      </nav>
    </header>
  );
};
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hero"])),
      // Will be passed to the page component as props
    },
  };
}
export default Header;
