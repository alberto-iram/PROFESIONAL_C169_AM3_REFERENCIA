AFRAME.registerComponent("markerhandler", {
  init: async function () {

    this.el.addEventListener("markerFound", () => {
      console.log("Se encontró el marcador")
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("Se perdió el marcador")
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function () {
    // Cambiar la visibilidad del botón div
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("rating-button");
    var orderButtton = document.getElementById("order-button");

    // Usar los eventos de clic
    ratingButton.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Calificar platillo",
        text: "Procesando calificación"
      });
    });

    orderButtton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "¡Gracias por tu orden!",
        text: "¡Recibirás tu orden pronto!"
      });
    });
  },

  handleMarkerLost: function () {
    // Cambiar la visibilidad del botón div
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
