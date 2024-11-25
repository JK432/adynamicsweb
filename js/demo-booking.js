document.addEventListener("DOMContentLoaded", () => {
  const demoTrigger = document.getElementById("demo-trigger");
  const demoBookingSection = document.querySelector(
    "section.demo-booking-section"
  );
  const demoContainer = document.querySelector(
    "section.demo-booking-section .demo-booking-container"
  );
  const demoClose = document.querySelector("#demo-close");

  demoTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    demoBookingSection.style.display = "flex";
    demoBookingSection.classList.add("fade-in");
    demoBookingSection.classList.remove("fade-out");
    setTimeout(() => {
      demoContainer.classList.add("active");
    }, 220);
  });

  demoClose.addEventListener("click", () => {
    demoContainer.classList.remove("active");

    setTimeout(() => {
      demoBookingSection.classList.add("fade-out");
      demoBookingSection.classList.remove("fade-in");
      setTimeout(() => {
        demoBookingSection.style.display = "none";
      }, 200);
    }, 200);
  });




  const demoBookingContainer1 = demoBookingSection.querySelector(
    ".demo-booking-section-1"
  );
  const demoBookingContainer2 = demoBookingSection.querySelector(
    ".demo-booking-section-2"
  );
  const demoBookingContainer3 = demoBookingSection.querySelector(
    ".demo-booking-section-3"
  );
  const demoBookingContainer4 = demoBookingSection.querySelector(
    ".demo-booking-section-4"
  );
  const toSec2Btn = demoBookingContainer1.querySelector("#nextDemo");
  const toSec3Btn = demoBookingContainer2.querySelector("#demoTime");
  const toSec2Btn2 = demoBookingContainer3.querySelector("#backDemoToSec2");
  const toSec1Btn = demoBookingContainer2.querySelector("#backDemoToSec1");
  const submitDemoBooking = demoBookingContainer3.querySelector("#demoBook");
  

  toSec2Btn.addEventListener("click", () => {
    const demoWeekDay = document.querySelectorAll(".demo-week");
    let isValidDay = false;

    demoWeekDay.forEach((weekDay) => {
      if (
        weekDay.textContent === "Wednesday" ||
        weekDay.textContent === "Sunday"
      ) {
        isValidDay = true
        demoBookingContainer1.style.visibility = "hidden";
        demoBookingContainer2.style.visibility = "visible";
        demoBookingContainer3.style.visibility = "hidden";
        demoBookingContainer4.style.visibility = "hidden";
      }
    });
    if (isValidDay===false) {
      alert("Demo class only available on Wednesday and Sunday");
    }
  });

  toSec3Btn.addEventListener("click", () => {
    demoBookingContainer1.style.visibility = "hidden";
    demoBookingContainer2.style.visibility = "hidden";
    demoBookingContainer3.style.visibility = "visible";
    demoBookingContainer4.style.visibility = "hidden";
  });

  toSec1Btn.addEventListener("click", () => {
    demoBookingContainer1.style.visibility = "visible";
    demoBookingContainer2.style.visibility = "hidden";
    demoBookingContainer3.style.visibility = "hidden";
    demoBookingContainer4.style.visibility= "hidden";
  });

  toSec2Btn2.addEventListener("click", () => {
    demoBookingContainer1.style.visibility = "hidden";
    demoBookingContainer2.style.visibility = "visible";
    demoBookingContainer3.style.visibility = "hidden";
    demoBookingContainer4.style.visibility = "hidden";
  });

  submitDemoBooking.addEventListener("click", () => {
    const bookedUser = document.querySelector("#booked-user");
    const userName = document.querySelector("#demo-name");

    if(!userName.value){
      alert("Please enter the required details");
      return;
    }
    demoBookingContainer1.style.visibility = "hidden";
    demoBookingContainer2.style.visibility = "hidden";
    demoBookingContainer3.style.visibility = "hidden";
    demoBookingContainer4.style.visibility = "visible";

    bookedUser.textContent = userName.value;
    //  if(userName.value){
    //     const postData = {
    //             "merchant_id": "3651020",
    //             "language": "EN",
    //             "amount": "1",
    //             "currency": "INR",
    //             "redirect_url": "https://www.adynamics.in/",
    //             "cancel_url": "https://www.adynamics.in/",
    //             "billing_name": "jayakrishnan",
    //             "billing_address": "123 Main Street",
    //             "billing_state": "Kerala",
    //             "billing_zip": "695551",
    //             "billing_country": "India",
    //             "billing_tel": "9778064240",
    //             "billing_email": "jk04032002@gmail.com",
    //             "order_id":"9778064240"
    //         };

    //     // Create a new XMLHttpRequest
    //     const xhr = new XMLHttpRequest();

    //     // Open a connection
    //     xhr.open('POST', 'ccavRequestHandler.php', true);

    //     // Set the request header for JSON data
    //     xhr.setRequestHeader('Content-Type', 'application/json');

    //     // Handle the response
    //     xhr.onreadystatechange = function () {
    //       if (xhr.readyState === 4) { // When the request is done
    //         if (xhr.status === 200) { // If the request was successful
    //           console.log('Response:', xhr.responseText);
    //         } else {
    //           console.error('Error:', xhr.statusText);
    //         }
    //       }
    //     };

    //     // Send the POST request with data
    //     xhr.send(JSON.stringify(postData));
    // }
if (userName.value) {
    const postData = {
        "merchant_id": "3651020",
        "language": "EN",
        "amount": "1",
        "currency": "INR",
        "redirect_url": "https://www.adynamics.in/",
        "cancel_url": "https://www.adynamics.in/",
        "billing_name": "jayakrishnan",
        "billing_address": "123 Main Street",
        "billing_state": "Kerala",
        "billing_zip": "695551",
        "billing_country": "India",
        "billing_tel": "9778064240",
        "billing_email": "jk04032002@gmail.com",
        "order_id": "9778064240"
    };

    // Create a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'ccavRequestHandler.php';
    form.style.display = 'none';

    // Add form fields for each key-value pair in postData
    for (const key in postData) {
        if (postData.hasOwnProperty(key)) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = postData[key];
            form.appendChild(input);
        }
    }

    // Append the form to the body
    document.body.appendChild(form);

    // Submit the form
    form.submit();
}
  })
});
