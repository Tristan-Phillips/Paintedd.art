function updateInfernoCountdown() {
    const now = new Date();
    const nextBurn = new Date();

    // Set to today 20:00 GMT+2
    nextBurn.setUTCHours(18, 0, 0, 0);
    nextBurn.setDate(now.getDate());

    if (now > nextBurn) {
        // If it's past 20:00 today, set to next Wednesday 20:00 GMT+2
        nextBurn.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7));
        nextBurn.setUTCHours(18, 0, 0, 0);
    }

    const diff = nextBurn - now;

    const dys = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("dys").textContent = dys.toString().padStart(2, "0");
    document.getElementById("hrs").textContent = hrs.toString().padStart(2, "0");
    document.getElementById("min").textContent = min.toString().padStart(2, "0");
    document.getElementById("sec").textContent = sec.toString().padStart(2, "0");
}

setInterval(updateInfernoCountdown, 1000);
updateInfernoCountdown();
