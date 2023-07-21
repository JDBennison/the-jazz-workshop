function sendMail(contactForm) {
  var workshopCheck = document.getElementById("workshop");
  var theoryCheck = document.getElementById("theory");
  var mondayCheck = document.getElementById("monday");
  var tuesdayCheck = document.getElementById("tuesday");
  var wednesdayCheck = document.getElementById("wednesday");
  var thursdayCheck = document.getElementById("thursday");
  var fridayCheck = document.getElementById("friday");
  if (workshopCheck.checked == true) {
    var workshop = contactForm.workshop.value;
  } else {
    var workshop = "";
  }
  if (theoryCheck.checked == true) {
    var theory = contactForm.theory.value;
  } else {
    var theory = "";
  }
  if (mondayCheck.checked == true) {
    var monday = contactForm.monday.value;
  } else {
    var monday = "";
  }
  if (tuesdayCheck.checked == true) {
    var tuesday = contactForm.tuesday.value;
  } else {
    var tuesday = "";
  }
  if (wednesdayCheck.checked == true) {
    var wednesday = contactForm.wednesday.value;
  } else {
    var wednesday = "";
  }
  if (thursdayCheck.checked == true) {
    var thursday = contactForm.thursday.value;
  } else {
    var thursday = "";
  }
  if (fridayCheck.checked == true) {
    var friday = contactForm.friday.value;
  } else {
    var friday = "";
  }
  emailjs
    .send("the-jazz-workshop", "get_involved", {
      full_name: contactForm.full_name.value,
      email: contactForm.email.value,
      phone: contactForm.phone.value,
      message: contactForm.message.value,
      instrument: contactForm.instrument.value,
      workshop: workshop,
      theory: theory,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      ability: contactForm.ability.value,
      improvisation: contactForm.improvisation.value,
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
