function validation() {
    const people = document.getElementById("num-travelers").value.trim();

    if (people < 1 || people > 15) {
        alert("Please enter a number between 1 and 15.");
        return false;
    }

    if (document.getElementById("join-land").checked) {
        if (!confirm("Are you sure to buy flight tickets yourself")) {
            return false; 
        }
        alert("You choose to buy yourself tickets");
    }

    return true; 
}
