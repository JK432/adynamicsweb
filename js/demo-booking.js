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
     
        isValidDay = true;
        demoBookingContainer1.style.visibility = "hidden";
        demoBookingContainer2.style.visibility = "visible";
        demoBookingContainer3.style.visibility = "hidden";
        demoBookingContainer4.style.visibility = "hidden";

    });
    if (isValidDay === false) {
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
    demoBookingContainer4.style.visibility = "hidden";
  });

  toSec2Btn2.addEventListener("click", () => {
    demoBookingContainer1.style.visibility = "hidden";
    demoBookingContainer2.style.visibility = "visible";
    demoBookingContainer3.style.visibility = "hidden";
    demoBookingContainer4.style.visibility = "hidden";
  });

  submitDemoBooking.addEventListener("click", () => {


    


    const userName = document.getElementById("demo-name").value;
    const userEmail = document.getElementById("demo-email").value;
    const userPhone = document.getElementById("demo-phone").value;
    const month = document.getElementById("demo-month-id").textContent.trim();
    const day = document.getElementById("demo-day-id").textContent.trim();
    const year = document.getElementById("demo-year-id").textContent.trim();
    const monthNumber = new Date(`${month} 1, ${year}`).getMonth() + 1; 
    const formattedDate = `${year}-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const selectedDate = formattedDate;

    if( !userName && !userEmail && !userPhone && !selectedDate ) {
      alert("Please fill in all fields");
      return;
    }

    // send data to google sheets

    scriptURL = 'https://script.google.com/macros/s/AKfycbyPMxgvHAWuF8yrbBkMJP0T5UsDz0dqtlzMMcK-gORibCNYmwtcKMKDFaLpVQU3ybfZRw/exec'
      const timestamp = Date.now();
      const formData = new FormData();
			formData.append('name', userName);
			formData.append('email', userEmail);
      formData.append("phone", userPhone);
      formData.append("date", selectedDate);
      formData.append("order_id",`${userPhone}${timestamp}`)

      fetch(scriptURL, { method: 'POST', body: formData, mode: "no-cors" })
				.then(response => {
              
                    const postData = {
                      merchant_id: "3651020",
                      language: "EN",
                      amount: "10",
                      currency: "INR",
                      redirect_url: "https://www.adynamics.in/",
                      cancel_url: "https://www.adynamics.in/",
                      order_id: `${userPhone}${timestamp}`,
                    };

                    // Create a hidden form
                    const form = document.createElement("form");
                    form.method = "POST";
                    form.action = "ccavRequestHandler.php";
                    form.style.display = "none";

                    // Add form fields for each key-value pair in postData
                    for (const key in postData) {
                      if (postData.hasOwnProperty(key)) {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = key;
                        input.value = postData[key];
                        form.appendChild(input);
                      }
                    }

                    // Append the form to the body
                    document.body.appendChild(form);

                    // Submit the form
                    form.submit();
    
          console.log("demo-submit respomse : ", response)}
        ).then(()=>{
              demoBookingContainer1.style.visibility = "hidden";
              demoBookingContainer2.style.visibility = "hidden";
              demoBookingContainer3.style.visibility = "hidden";
              demoBookingContainer4.style.visibility = "visible";
        })
				.catch(error => {console.error('Error!', error.message);statusResponse('success');})
 

  });
    
  // statusResponse('success');


  function statusResponse(status){
    console.log("status response working with status : ",status);
    const bookingStatus = demoBookingContainer4.querySelector(".demo-booking-status");
    
    if(status){
      demoBookingContainer1.style.visibility = "hidden";
      demoBookingContainer2.style.visibility = "hidden";
      demoBookingContainer3.style.visibility = "hidden";
      demoBookingContainer4.style.visibility = "visible";
    }else{
      demoBookingContainer1.style.visibility = "visible";
      return
    }

    if (status === "success") {
      console.log("success");
      
      bookingStatus.classList.add("success");
    }else if(status==="abort"){
      console.log("abort");
      bookingStatus.classList.add("abort");
    }else if(status==="cancel"){
      console.log("cancel");
      
      bookingStatus.classList.add("cancel");
    }else if(status==="illegel"){
      console.log("illegel");
      bookingStatus.classList.add("illegel");
    }
  }



});
