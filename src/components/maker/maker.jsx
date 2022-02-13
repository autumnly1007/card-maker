import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "autumn",
      company: "kakao",
      theme: "light",
      title: "front-end developer",
      email: "autumnly1007@gmail.com",
      message: "hello world!",
      fileName: "autumn",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "cat",
      company: "naver",
      theme: "colorful",
      title: "DBA",
      email: "cat@gmail.com",
      message: "hello cat!",
      fileName: "autumn",
      fileURL: "autumn.png",
    },
    3: {
      id: "3",
      name: "keyboard",
      company: "toss",
      theme: "dark",
      title: "back-end developer",
      email: "keyboard@gmail.com",
      message: "hello keyboard!",
      fileName: "autumn",
      fileURL: null,
    },
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
