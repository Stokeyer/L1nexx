import cl from "./styles.module.scss";
import type { HeaderProps } from "./types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultHeaderData: HeaderProps = {
  header: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    project: "Проекты",
    contacts: "Контакты",
  },
};

const NAVIGATION_PATHS: { [key: string]: string } = {
  home: "/",
  about: "/about",
  skills: "/skills",
  project: "/project",
  contacts: "/contacts",
};

// Варианты анимаций для Framer Motion
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut" as const,
    },
  },
};

export const Header: React.FC<HeaderProps> = (props = defaultHeaderData) => {
  const headerData = { ...defaultHeaderData, ...props };

  const [activeItem, setActiveItem] = useState(() => {
    const saved = localStorage.getItem("activeNavItem");
    return saved || "home";
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeNavItem", activeItem);
  }, [activeItem]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.includes("/about")) {
      setActiveItem("about");
    } else if (currentPath.includes("/skills")) {
      setActiveItem("skills");
    } else if (currentPath.includes("/project")) {
      setActiveItem("project");
    } else if (currentPath.includes("/contacts")) {
      setActiveItem("contacts");
    } else {
      setActiveItem("home");
    }
  }, []);
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    e.preventDefault();
    setActiveItem(item);
    setIsMobileMenuOpen(false);

    const path = NAVIGATION_PATHS[item] || "/";

    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItem = (key: string, href: string, label: string) => (
    <motion.li
      className={cl[`header__${key}`]}
      variants={navItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className={activeItem === key ? cl.active : ""}
        onClick={(e) => handleClick(e, key)}
      >
        {label}
      </a>
    </motion.li>
  );

  const renderMobileNavItem = (key: string, href: string, label: string) => (
    <motion.li
      variants={navItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className={activeItem === key ? cl.active : ""}
        onClick={(e) => handleClick(e, key)}
      >
        {label}
      </a>
    </motion.li>
  );

  return (
    <motion.div
      className={cl.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={cl.header__container}>
        <motion.nav variants={logoVariants}>
          <a href="./">
            <span className={cl.logo}>FD</span>
          </a>
          <a href="./" className={cl.logo__text}>
            <span>Frontend Developer</span>
          </a>
        </motion.nav>

        <motion.button
          className={`${cl.burger} ${isMobileMenuOpen ? cl.burger_active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <motion.section className={cl.header__section} variants={navVariants}>
          <ul>
            {renderNavItem("home", "./", headerData.header.home)}
            {renderNavItem("about", "./about", headerData.header.about)}
            {renderNavItem("skills", "./skills", headerData.header.skills)}
            {renderNavItem("project", "./project", headerData.header.project)}
            {renderNavItem(
              "contacts",
              "./contacts",
              headerData.header.contacts
            )}
          </ul>
        </motion.section>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`${cl.mobile__menu} ${cl.mobile__menu_open}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {renderMobileNavItem("home", "./", headerData.header.home)}
                {renderMobileNavItem("about", "./about", headerData.header.about)}
                {renderMobileNavItem("skills", "./skills", headerData.header.skills)}
                {renderMobileNavItem("project", "./project", headerData.header.project)}
                {renderMobileNavItem(
                  "contacts",
                  "./contacts",
                  headerData.header.contacts
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
