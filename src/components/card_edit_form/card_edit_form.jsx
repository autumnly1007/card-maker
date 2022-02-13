import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
        ref={titleRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        ref={messageRef}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
