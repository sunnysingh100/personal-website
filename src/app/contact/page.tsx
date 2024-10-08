import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact page of sunny singh",
};
function page() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title">Let&apos;s talk about your project!</h2>{" "}
        <ContactForm />
      </div>
    </section>
  );
}

export default page;
