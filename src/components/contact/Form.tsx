"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

export type FromType = {
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
  const [form, setForm] = useState<FromType>(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setForm(INITIAL_FORM);
  };
  return (
    <div className="mx-auto w-full max-w-lg border border-foreground bg-white py-5">
      <h2 className="mb-4 text-center font-[family-name:var(--font-changwon-bold)] text-2xl">
        Contact Me 💗
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-md flex-col justify-center border border-foreground bg-slate-100"
      >
        <label htmlFor="from" className="hidden">
          이메일
        </label>
        <input
          className="border-b border-foreground p-2"
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
          className="border-b border-foreground p-2"
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
          className="h-full w-full resize-none p-2"
          name="body"
          id="body"
          rows={10}
          required
          onChange={handleChange}
          value={form.body}
          placeholder="내용"
        />
      </form>
      <button
        className="mx-auto mt-5 flex w-full max-w-52 justify-center bg-brand py-3 text-sm text-background hover:bg-sub hover:text-foreground"
        type="submit"
      >
        SUBMIT
      </button>
    </div>
  );
}
