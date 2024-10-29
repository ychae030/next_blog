import Container from "@/components/common/Container";
import Form from "@/components/contact/Form";
import React from "react";
import styles from "@/styles/ContactPage.module.css";
import SimpleAlert from "@/components/contact/SimpleAlert";

export default function ContactPage() {
  return (
    <section className={`${styles.fromWrap} flex items-center justify-center`}>
      <Form />
    </section>
  );
}
