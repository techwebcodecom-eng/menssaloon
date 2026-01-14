function scrollToBooking(){
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

// Disable past dates
let dateInput = document.getElementById("date");
if(dateInput){
  dateInput.min = new Date().toISOString().split("T")[0];
}

// Time validation
let timeInput = document.getElementById("time");
if(timeInput){
  timeInput.addEventListener("change",()=>{
    if(timeInput.value < "10:00" || timeInput.value > "22:00"){
      alert("Salon timing is 10AM – 10PM");
      timeInput.value="";
    }
  });
}

// Booking submit demo
document.getElementById("bookingForm").addEventListener("submit",function(e){
  e.preventDefault();
  document.getElementById("msg").innerText =
    "✅ Booking Submitted (Demo Only)";
});
