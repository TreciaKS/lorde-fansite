import { useState } from "react";
import FaqData from "../data/faq.json";

const Faq = () => {
const [faqs, setFaqs] = useState(FaqData);
    
  return (
    <>
      <div className="faq">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      )
    </>
  );
};

export default Faq;
