import ContactForm from "@/components/ContactForm";

const LINKS = [
  { url: "", icon: "youtube" },
  { url: "", icon: "github" },
  { url: "", icon: "idk" },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-4xl my-2">Contact Me</h2>
      <p>kanian16@naver.com</p>
      <ul>
        {LINKS.map((link, index) => (
          <a className="mx-3" key={index} href={link.url}>
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="font-bold text-3xl mt-10">or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
