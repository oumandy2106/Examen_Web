//https://newsapi.org/v2/everything
//GET https://newsapi.org/v2/everything?q=apple&from=2026-02-22&to=2026-02-22&sortBy=popularity&apiKey=API_KEY

const btnBuscar = document.getElementById("btnBuscar");
const cardNoticias = document.getElementById("cardNoticias");

const getNoticias = async () =>{
    cardNoticias.innerHTML = "";
    const inputBuscar = document.getElementById("inputBuscar").value;
    const fromInput = document.getElementById("fromInput").value;
    const toInput = document.getElementById("toInput").value;

    if(inputBuscar === ""){
        console.log("Ingresa una palabra clave");
        return;
    }
    if(fromInput === ""){
        console.log("Ingresa una fecha");
        return;
    }
    if(toInput === ""){
        console.log("Ingresa una fecha");
        return;
    }
    const respuesta = await fetch(`https://newsapi.org/v2/everything?q=${inputBuscar}&from=${fromInput}&to=${toInput}&sortBy=popularity&apiKey=b882286be1dd4a4b9598d71925673c5e`);
    const datos = await respuesta.json();

        const divX = document.createElement("div");
        divX.classList.add("col-md-6");

        divX.innerHTML = `<br>
        <div class="card" style="width: 18rem;">
            <h2 class="card-title">${datos.title}</h2>
            <img src="${datos.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${datos.description}</p>
            <h5 class="card-text">${datos.source.name}</h5>
            <h6 class="card-text">${datos.publishedAt}</h6>
            <a href="${datos.url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <br>`
        cardNoticias.appendChild(divX);

}

btnBuscar.addEventListener("click", getNoticias);

