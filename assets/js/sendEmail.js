function sendMail(contactForm) {
  emailjs
    .send("the-jazz-workshop", "contact_form", {
      full_name: contactForm.full_name.value,
      email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
      //   "g-recaptcha-response": grecaptcha.getResponse(),
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert(
          "Your messsage has been sent! Someone will be in touch very soon"
        );
      },
      function (error) {
        console.log(FAILED, error);
        alert(
          "There has been an error in sending your message. Please try again later."
        );
      }
    );
  return false;
}
