const faqs = [
    {
      question: "How do I apply to the college?",
      answer: "You can apply to the college by filling out the online application form available on our website."
    },
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary depending on the program you are applying to. Please visit our Admissions page for detailed information."
    },
    {
      question: "What majors and programs does the college offer?",
      answer: "We offer a wide range of majors and programs across various disciplines. You can explore our academic offerings on our website or contact our Admissions Office for more information."
    },
    {
      question: "Is financial aid available, and how do I apply for it?",
      answer: "Yes, financial aid is available for eligible students. You can apply for financial aid by completing the Free Application for Federal Student Aid (FAFSA) form online."
    },
    {
      question: "What are the tuition fees for the current academic year?",
      answer: "Tuition fees for the current academic year can be found on our Tuition and Fees page."
    },
    {
      question: "Can I schedule a campus tour?",
      answer: "Yes, campus tours are available. You can schedule a tour through our Admissions Office."
    },
    {
      question: "Are there on-campus housing options available?",
      answer: "Yes, we offer on-campus housing options for students. You can find more information about housing on our Housing page."
    },
    {
      question: "What dining options are there on campus?",
      answer: "We have a variety of dining options available on campus, including cafeterias, food courts, and specialty eateries."
    },
    {
      question: "How can I get involved in student clubs and organizations?",
      answer: "You can explore our list of student clubs and organizations on our website and contact the respective club leaders for more information on how to join."
    },
    {
      question: "Are there opportunities for undergraduate research?",
      answer: "Yes, there are opportunities for undergraduate research. You can reach out to faculty members in your department or visit our Undergraduate Research Office for more information."
    },
    {
      question: "What support services are available for students with disabilities?",
      answer: "We offer a range of support services for students with disabilities, including accommodations, assistive technology, and counseling. Contact our Disability Services Office for more information."
    },
    {
      question: "What are the library hours?",
      answer: "Library hours vary depending on the day and time of year. You can find our current library hours on our website."
    },
    {
      question: "How can I access online resources and databases?",
      answer: "You can access our online resources and databases through the library website using your student login credentials."
    },
    {
      question: "Is there a career center to help with job placements?",
      answer: "Yes, we have a career center that provides resources and assistance with job placements, resume building, and career counseling."
    },
    {
      question: "What recreational facilities are available for students?",
      answer: "We have a variety of recreational facilities on campus, including fitness centers, sports fields, and outdoor recreation areas."
    },
    {
      question: "Are there opportunities for studying abroad?",
      answer: "Yes, we offer opportunities for studying abroad through our international programs office. You can explore our study abroad programs on our website."
    },
    {
      question: "How do I register for classes?",
      answer: "You can register for classes online through our student portal during the designated registration period."
    },
    {
      question: "What is the student-to-faculty ratio?",
      answer: "Our student-to-faculty ratio is 50:1. This ensures personalized attention and support for our students."
    },
    {
      question: "How can I get in touch with academic advisors?",
      answer: "You can get in touch with academic advisors by scheduling an appointment through our advising office or contacting them via email or phone."
    },
    {
      question: "What safety measures are in place on campus?",
      answer: "We have various safety measures in place on campus, including campus security patrols, emergency call boxes, and safety training programs. Additionally, we have a dedicated campus police department available 24/7."
    }
  ];
  let isAnswering=false;
  function askQuestion() {
    const userInput = document.getElementById("user-input").value;
    const chatDiv = document.getElementById("chat");
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = "You: " + userInput;
    chatDiv.appendChild(userMessage);

      const botMessage = document.createElement("p");
      botMessage.className = "bot-message";
      botMessage.textContent = "Bot: ...";
      chatDiv.appendChild(botMessage);
      
      if(isAnswering){
        return;
      }


    const foundFAQ = faqs.find(faq => faq.question.toLowerCase() === userInput.toLowerCase());
    if (foundFAQ) {
      isAnswering=true;
      /*const botMessage = document.createElement("p");
      botMessage.className = "bot-message";
      botMessage.textContent = "Bot: " + foundFAQ.answer;
      chatDiv.appendChild(botMessage);*/

      setTimeout(() => {
        const botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = "Bot: " + foundFAQ.answer;
        chatDiv.appendChild(botMessage);
        isAnswering = false;
    }, 5000); // Delay for 5 seconds


    } else {
      /*const botMessage = document.createElement("p");
      botMessage.className = "bot-message";
      botMessage.textContent = "Bot: Sorry, I didn't understand the question.";
      chatDiv.appendChild(botMessage);

    }*/
    setTimeout(() => {
      const botMessage = document.createElement("p");
      botMessage.className = "bot-message";
      botMessage.textContent = "Bot: Sorry, I didn't understand the question.";
      chatDiv.appendChild(botMessage);
      isAnswering = false;
  }, 5000); // Delay for 5 seconds
}
    document.getElementById("user-input").value = "";
  }

  