document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("donationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    gtag("event", "form_submit", {
      event_category: "Form",
      event_label: "Sample Form",
    });
    window.location.href = "https://buy.stripe.com/test_bIY3eR07j40s23KaEE";
  });
});
