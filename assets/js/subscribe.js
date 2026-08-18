function SubscribeForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/SvuPip8YiQAFxai8/",
    type: "post",
    data: $("#subscribe").serializeArray(),
    success: function () {
      alert("Thank you for subscribing!");
    },
    error: function () {
      alert("There was an error");
    },
  });
}
