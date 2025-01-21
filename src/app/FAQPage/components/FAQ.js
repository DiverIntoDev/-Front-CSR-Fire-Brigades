"use client"
import Questions from "@/app/constants/questionsFAQ";
import { useState } from "react";
import styles from "./FAQ.module.css";
import Icons from "@/app/constants/icons";
import Image from "next/image";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <ul className={styles.list}>
        {Questions.map((item, index) => (
          <li
            key={index}
            className={`${styles.item} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <div
              className={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span
                className={`${styles.arrow} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                {activeIndex === index ? <Image
                  src={Icons.uplaranja.value}
                  alt={Icons.uplaranja.alt}
                  width={30} /> : <Image
                  src={Icons.up.value}
                  alt={Icons.up.alt}
                  width={30} />}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
