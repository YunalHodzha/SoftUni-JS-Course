function attachEventsListeners() {
    //config
    const RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    //helper functions
    function convert(value, unit) {
        const inDays = value / RATIOS[unit]

        return {
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds,
        };
    }

    //capture elements
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    //evvent listener setup
    document.querySelector("main").addEventListener("click", onConvert);

    //on click setup
    function onConvert(e) {
        if(e.target.tagName = "INPUT" && e.target.type === "button") {
            const input = e.target.parentElement.querySelector('input[type="text"]');

            const inputValue = Number(input.value);
            const time = convert(inputValue, input.id);

            daysInput.value = time.days
            hoursInput.value = time.hours
            minutesInput.value = time.minutes
            secondsInput.value = time.seconds
        }
    }
}