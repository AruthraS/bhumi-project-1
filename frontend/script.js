document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("donationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    gtag("event", "form_submit", {
      event_category: "Form",
      event_label: "Sample Form",
    });
    // You can add form validation or data processing here if needed
    window.alert("Form submitted!"); // For demo purposes only
    // Redirect to another page
    window.location.href = "https://buy.stripe.com/test_bIY3eR07j40s23KaEE"; // Replace 'success.html' with your target page
  });
});
