"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import SimpleAlert, { AlertProps } from "./SimpleAlert";
import { sendContactEmail } from "@/service/contact";

export type FormType = {
  from: string;
  title: string;
  body: string;
};
const INITIAL_FORM = {
  from: "",
  title: "",
  body: "",
};
export default function Form() {
  const [form, setForm] = useState<FormType>(INITIAL_FORM);
  const [banner, setBanner] = useState<AlertProps | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner((prev) => ({
          ...prev,
          state: "success",
          text: "메일이 성공적으로 전송되었습니다.",
        }));
        setForm(INITIAL_FORM);
      })
      .catch(() => {
        setBanner((prev) => ({
          ...prev,
          state: "error",
          text: "메일이 전송에 실패했습니다. 다시 시도해 주세요",
        }));
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <div className="grid w-full max-w-md gap-3">
      {banner && <SimpleAlert banner={banner} />}
      <div className="border border-foreground bg-white px-6 py-5">
        <form onSubmit={handleSubmit}>
          <fieldset className="grid w-full">
            <legend className="mb-4 text-center font-[family-name:var(--font-changwon-bold)] text-2xl">
              Contact Me 💗
            </legend>
            <label htmlFor="from" className="hidden">
              이메일
            </label>
            <input
              className="border border-foreground p-2"
              type="email"
              name="from"
              id="from"
              required
              onChange={handleChange}
              value={form.from}
              placeholder="이메일"
            />

            <label htmlFor="title" className="hidden">
              제목
            </label>
            <input
              className="border-x border-foreground p-2"
              type="text"
              name="title"
              id="title"
              required
              onChange={handleChange}
              value={form.title}
              placeholder="제목"
            />

            <label htmlFor="body" className="hidden">
              내용
            </label>
            <textarea
              className="h-full w-full resize-none border border-foreground p-2"
              name="body"
              id="body"
              rows={10}
              required
              onChange={handleChange}
              value={form.body}
              placeholder="내용"
            />
          </fieldset>
          <button
            className="mx-auto mt-5 flex w-full max-w-52 justify-center bg-brand py-3 text-sm text-background hover:bg-sub hover:text-foreground"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
