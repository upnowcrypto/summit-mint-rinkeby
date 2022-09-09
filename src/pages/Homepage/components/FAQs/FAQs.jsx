import React from "react";

import classes from "./FAQs.module.css";

import { faqsData } from "./data";

const Faqs = () => {
  React.useEffect(() => {
    let question = document.querySelectorAll(`.${classes.question}`);

    question.forEach((question) => {
      question.addEventListener("click", (event) => {
        const active = document.querySelector(`.${classes.question.active}`);
        if (active && active !== question) {
          active.classList.toggle("active");
          active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      });
    });
  }, []);

  return (
    <section id="faqs" className={classes.faqs}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="glowTitle2">FAQ</h2>

            <br />
            <br />

            <div className={classes.wrapper}>
              {faqsData.map((faq, index) => (
                <div key={index} className="container">
                  <div className={classes.question} style={faq.questionColor}>
                    {faq.question}
                  </div>
                  <div className={classes.answerContainer}>
                    <div className={classes.answer}>
                      {faq.answer}
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sparaters"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
