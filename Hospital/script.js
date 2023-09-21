document.addEventListener("Appointment", function () {
    const timeForm = document.getElementById("timeForm");
    const timeInput = document.getElementById("time");
    const output = document.getElementById("output");

    timeForm.addEventListener("submit", function (e) {
        e.preventDefault();

   
        const selectedTime = timeInput.value;

        output.textContent = `Selected Time: ${selectedTime}`;
    });
});

