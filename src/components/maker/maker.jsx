import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
