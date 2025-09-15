import { Header } from "../home/header/header.tsx";
import { Cover } from "../about/cover/cover.tsx"
import { ContentTransition } from "../../transitions/ContentTransition.tsx";
import { RoadMap } from "./roadmap/roadmap.tsx";
import { Footer } from "../home/footer/footer.tsx";

const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки", 
  project: "Проекты",
  contacts: "Контакты"
};


export const About = () => {
  return (
    <div>
      <Header header={headerData}/>
      <ContentTransition delay={300}>
        <Cover/>
        <RoadMap/>
        <Footer/>
      </ContentTransition>
    </div>
  );
}