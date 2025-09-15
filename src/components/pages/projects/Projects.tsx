import { Header } from "../home/header/header.tsx";
import { ContentTransition } from "../../transitions/ContentTransition.tsx";
import cl from "../../transitions/styles.module.scss";

const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки",
  project: "Проекты",
  contacts: "Контакты"
};

const contentStyles = {
  padding: "60px 20px",
  textAlign: "center" as const,
  maxWidth: "1200px",
  margin: "0 auto"
};

const titleStyles = {
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: "#1f2937",
  fontWeight: "700" as const
};

const subtitleStyles = {
  fontSize: "1.2rem",
  color: "#6b7280",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6"
};

export const Projects = () => {
  return (
    <div>
      <Header header={headerData} />
      <main style={contentStyles}>
        <ContentTransition delay={200}>
          <h1 style={titleStyles} className={cl.fadeInUp}>
            Мои проекты
          </h1>
        </ContentTransition>
        <ContentTransition delay={400}>
          <p style={subtitleStyles} className={cl.fadeInUp}>
           Примеры моих работ и демонстрация навыков.
          </p>
        </ContentTransition>
        <ContentTransition delay={500}>
          <p style={subtitleStyles} className={cl.fadeInUp}>
           Здесь пока нечего нету =(</p>
        </ContentTransition>
      </main>
    </div>
  );
}