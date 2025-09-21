import { Header } from "../home/header/header.tsx";
import { ContentTransition } from "../../transitions/ContentTransition.tsx";
import cl from "./styles.module.scss";
import { ContactInfo } from "./contactInfo/contactInfo.tsx";
import { SendMail } from "./sendMail/sendMail.tsx";
import { Footer } from "../home/footer/footer.tsx";

const headerData = {
  home: "Главная",
  about: "Обо мне",
  skills: "Навыки", 
  project: "Проекты",
  contacts: "Контакты"
};

export const Contacts = () => {
  return (
    <>
      <Header header={headerData}/>
      <ContentTransition delay={300}>
      <div className={cl.div}>
         <h1>Свяжитесь со мной</h1>
         <ContentTransition delay={400}>
         <p>Готов обсудить новые возможности и проекты</p>
         </ContentTransition>
         <div className={cl.Contacts__form_container}>
            <ContactInfo />
            <SendMail />
         </div>
      </div>
    </ContentTransition>
    <Footer/>
    </>
  );
}