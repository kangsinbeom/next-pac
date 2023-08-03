"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner, { BannerProps } from "./Banner";
import { setTokenSourceMapRange } from "typescript";
interface StateProps {
  from: string;
  subject: string;
  comment: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<StateProps>({
    from: "",
    subject: "",
    comment: "",
  });
  const [banner, setBanner] = useState<BannerProps | null>(null);
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // return 이 나와야하니깐 ()를 붙이거나 return을 사용하거나!!
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "성공이다", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };
  return (
    <section>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md flex flex-col bg-slate-600 gap-2 m-4 p-4 text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={onChangeHandler}
          required
          autoFocus
          className="text-black"
        />
        <label htmlFor="from" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChangeHandler}
          required
          className="text-black"
        />
        <label htmlFor="from" className="font-semibold">
          Comment
        </label>
        <textarea
          rows={10}
          id="comment"
          name="comment"
          value={form.comment}
          onChange={onChangeHandler}
          required
          className="text-black"
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
