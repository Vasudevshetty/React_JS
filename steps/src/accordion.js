import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          num={index}
          title={faq.title}
          text={faq.text}
          currOpen={currOpen}
          onToggle={setCurrOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onToggle }) {
  const open = num === currOpen;

  return (
    <div
      className={`item ${open && "opened"}`}
      onClick={() => {
        onToggle((open) => (open ? null : num));
      }}
    >
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{!open ? "+" : "-"}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
