function toggleText1() {
    let text = document.getElementById("hiddenText1");
    let text2 = document.getElementById("hiddenText2");
    let text3 = document.getElementById("hiddenText3");
    let text4 = document.getElementById("hiddenText4");
    if (text.style.display === "none") {
      text.style.display = "block";
      text2.style.display = "none";
      text3.style.display = "none";
      text4.style.display = "none";
    } else {
      text.style.display = "none";
    }
  }

   function toggleImage1() {
    let img = document.getElementById("Imagen1");
    let img2 = document.getElementById("Imagen2");
    let img3 = document.getElementById("Imagen3");
    let img4 = document.getElementById("Imagen4");
    if (img.style.display === "none") {
      img.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
    } else {
      img.style.display = "none";
    }

   }

    function toggleText2() {
    let text2 = document.getElementById("hiddenText2");
    let text = document.getElementById("hiddenText1");
    let text3 = document.getElementById("hiddenText3");
    let text4 = document.getElementById("hiddenText4");
    if (text2.style.display === "none") {
      text2.style.display = "block";
      text.style.display = "none";
      text3.style.display = "none";
      text4.style.display = "none";
    } else {
      text2.style.display = "none";
    }
  }

   function toggleImage2() {
    let img2 = document.getElementById("Imagen2");
    let img = document.getElementById("Imagen1");
    let img3 = document.getElementById("Imagen3");
    let img4 = document.getElementById("Imagen4");
    if (img2.style.display === "none") {
      img2.style.display = "block";
      img.style.display = "none";
      img3.style.display = "none";
      img4.style.display = "none";
    } else {
      img2.style.display = "none";
    }
  }

  function toggleText3() {
    let text3 = document.getElementById("hiddenText3");
    let text = document.getElementById("hiddenText1");
    let text2 = document.getElementById("hiddenText2");
    let text4 = document.getElementById("hiddenText4");
    if (text3.style.display === "none") {
      text3.style.display = "block";
      text.style.display = "none";
      text2.style.display = "none";
      text4.style.display = "none";
    } else {
      text3.style.display = "none";
    }
  }

   function toggleImage3() {
    let img3 = document.getElementById("Imagen3");
    let img = document.getElementById("Imagen1");
    let img2 = document.getElementById("Imagen2");
    let img4 = document.getElementById("Imagen4");
    if (img3.style.display === "none") {
      img3.style.display = "block";
      img.style.display = "none";
      img2.style.display = "none";
      img4.style.display = "none";
    } else {
      img3.style.display = "none";
    }
  }

  function toggleText4() {
    let text4 = document.getElementById("hiddenText4");
    let text = document.getElementById("hiddenText1");
    let text2 = document.getElementById("hiddenText2");
    let text3 = document.getElementById("hiddenText3");
    if (text4.style.display === "none") {
      text4.style.display = "block";
      text.style.display = "none";
      text2.style.display = "none";
      text3.style.display = "none";
    } else {
      text4.style.display = "none";
    }
  }

   function toggleImage4() {
    let img4 = document.getElementById("Imagen4");
    let img = document.getElementById("Imagen1");
    let img2 = document.getElementById("Imagen2");
    let img3 = document.getElementById("Imagen3");
    if (img4.style.display === "none") {
      img4.style.display = "block";
      img.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
    } else {
      img4.style.display = "none";
    }
  }

    function toggleImage5() {
    let img5 = document.getElementById("demoImage");
    if (img5.style.display === "none") {
      img5.style.display = "block";
    } else {
      img5.style.display = "none";
    }
    }
  
  function changeColors() {
  // IDs de los contenedores donde están los textos
  const ids = ["hiddenText1", "hiddenText2", "hiddenText3", "hiddenText4"];

  // Recorremos cada contenedor
  ids.forEach(id => {
    const contenedor = document.getElementById(id);
    if (!contenedor) return; // si no existe, pasa al siguiente

    // Buscamos los textos dentro (h1, h2, h3)
    const textos = contenedor.querySelectorAll("h1, h2, h3");

    // Alternamos la clase activo en el contenedor
    contenedor.classList.toggle("activo");

    // Cambiamos el color dependiendo del estado
    textos.forEach(texto => {
      if (contenedor.classList.contains("activo")) {
        texto.style.color = "#97ed2dff"; // verde neón
      } else {
        texto.style.color = "#E6EBE7"; // gris claro
      }
    });
  });
}