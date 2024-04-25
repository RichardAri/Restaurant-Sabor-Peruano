var cartaButton = document.getElementById("cartaButton");
var reservaButton = document.getElementById("reservaButton");
var deliveryButton = document.getElementById("deliveryButton");

cartaButton.addEventListener("click", function() {
    window.location.href = "./src/carta.html"; 
});

reservaButton.addEventListener("click", function() {
    window.location.href = "./src/reserva.html"; 
});

deliveryButton.addEventListener("click", function() {
    window.location.href = "./src/delivery.html"; 
});
