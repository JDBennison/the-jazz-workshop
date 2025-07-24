const today = new Date();
const formattedDate = today.toISOString().substring(0, 16);
document.getElementById("submitdate").value = formattedDate;

var practicalCheckbox = $("#practical");
var practicalHidden = $(".practical");
practicalHidden.hide();
practicalCheckbox.change(function () {
  if (practicalCheckbox.is(":checked")) {
    practicalHidden.show(500);
    $("#instrument").prop("required", true); //to add required
    $("#practicalAbility").prop("required", true);
    $("#practicalImprovisation").prop("required", true);
    $("#practicalNotes").prop("required", true);
  } else {
    practicalHidden.hide(500);
    $("#instrument").prop("required", false); //to remove required
    $("#practicalAbility").prop("required", false);
    $("#practicalImprovisation").prop("required", false);
    $("#practicalNotes").prop("required", false);
  }
});

var vocalCheckbox = $("#vocal");
var vocalHidden = $(".vocal");
vocalHidden.hide();
vocalCheckbox.change(function () {
  if (vocalCheckbox.is(":checked")) {
    vocalHidden.show(500);
    $("#vocalAbility").prop("required", true); //to add required
    $("#vocalImprovisation").prop("required", true);
    $("#vocalNotes").prop("required", true);
  } else {
    vocalHidden.hide(500);
    $("#vocalAbility").prop("required", false); //to remove required
    $("#vocalImprovisation").prop("required", false);
    $("#vocalNotes").prop("required", false);
  }
});
var theoryCheckbox = $("#theory");
var theoryHidden = $(".theory");
theoryHidden.hide();
theoryCheckbox.change(function () {
  if (theoryCheckbox.is(":checked")) {
    theoryHidden.show(500);
    $("#theoryAbility").prop("required", true); //to add required
    $("#theoryNotes").prop("required", true);
  } else {
    theoryHidden.hide(500);
    $("#theoryAbility").prop("required", false); //to remove required
    $("#theoryNotes").prop("required", false);
  }
});

function sendMail(contactForm) {
  function SubForm() {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/g6HrRoKUN7gYOJ4R/",
      type: "post",
      data: $("#get_involved").serializeArray(),
      success: function () {},
      error: function () {
        alert("There was an error :(");
      },
    });
  }
  var today = new Date();
  var formattedDate = today.toISOString().substring(0, 10);

  var practicalCheck = document.getElementById("practical");
  var vocalCheck = document.getElementById("vocal");
  var theoryCheck = document.getElementById("theory");

  if (practicalCheck.checked == true) {
    var practical = contactForm.practical.value;
  } else {
    var practical = "";
  }
  if (vocalCheck && vocalCheck.checked == true) {
    var vocal = contactForm.vocal.value;
  } else {
    var vocal = "";
  }
  if (theoryCheck.checked == true) {
    var theory = contactForm.theory.value;
  } else {
    var theory = "";
  }

  emailjs
    .send("the-jazz-workshop", "get_involved", {
      full_name: contactForm.full_name.value,
      email: contactForm.email.value,
      phone: contactForm.phone.value,
      message: contactForm.message.value,
      instrument: contactForm.instrument.value,
      practical: practical,
      vocal: vocal,
      theory: theory,
      practicalAbility: contactForm.practicalAbility.value,
      vocalAbility: contactForm.vocalAbility.value,
      theoryAbility: contactForm.theoryAbility.value,
      vocalImprovisation: contactForm.vocalImprovisation.value,
      practicalImprovisation: contactForm.practicalImprovisation.value,
      practicalNotes: contactForm.practicalNotes.value,
      vocalNotes: contactForm.vocalNotes.value,
      theoryNotes: contactForm.theoryNotes.value,

      submitdate: formattedDate,
      //   "g-recaptcha-response": grecaptcha.getResponse(),
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        SubForm();
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
