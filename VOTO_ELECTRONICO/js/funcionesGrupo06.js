//Hero del contacto

var imgRefreshBtn = document.getElementById("hero__img-refresh");

// Actualice la fuente de la imagen de picsum en btn click
imgRefreshBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "https://picsum.photos/1280/720?rand=" + new Date().getTime();
};