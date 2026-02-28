const btnBuscar = document.getElementById("btnBuscar");
const cardNoticias = document.getElementById("cardNoticias");

const getNoticias = async () =>{
    cardNoticias.innerHTML = "";
    const inputBuscar = document.getElementById("inputBuscar").value;
    const fromInput = document.getElementById("fromInput").value;
    const toInput = document.getElementById("toInput").value;

    if(inputBuscar === "" || fromInput === "" || toInput === ""){
        if(inputBuscar === ""){
            console.log("Ingresa una palabra clave");
            const divX = document.createElement("div");
            divX.classList.add("col-md-4");
            divX.innerHTML = `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">  
                <div class="card-body">
                <h5 class="card-title">Ingrese palabra clave</h5>
                </div>`
            cardNoticias.appendChild(divX);
        }

        if(fromInput === ""){
            console.log("Ingresa una fecha de inicio");
            const divX = document.createElement("div");
            divX.classList.add("col-md-4");
            divX.innerHTML = `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">  
                <div class="card-body">
                <h5 class="card-title">Ingrese la fecha de inicio</h5>
                </div>`
            cardNoticias.appendChild(divX);
        }

        if(toInput === ""){
            console.log("Ingresa una fecha de fin");
            const divX = document.createElement("div");
            divX.classList.add("col-md-4");
            divX.innerHTML = `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">  
                <div class="card-body">
                <h5 class="card-title">Ingrese la fecha de fin</h5>
                </div>`
            cardNoticias.appendChild(divX);
        }

        return;
    }


    const respuesta = await fetch(`https://newsapi.org/v2/everything?q=${inputBuscar}&from=${fromInput}&to=${toInput}&sortBy=popularity&apiKey=b882286be1dd4a4b9598d71925673c5e`);
    const datos = await respuesta.json();
    console.log(datos);
    if (datos.articles.length === 0) {
    cardNoticias.innerHTML = `
    <div class ="container">
    <div class="card text-bg-warning mb-3" style="max-width: 18rem;">  
                <div class="card-body">
                <h5 class="card-title">Sin resultados</h5>
                </div>
                </div>`;
    return;
}
    
    datos.articles.forEach(noticia => {

        const divX = document.createElement("div");
        divX.classList.add("col-md-6");

        divX.innerHTML = `<br>
        <div class="container">
        <div class="card">
            <h2 class="card-title">${noticia.title}</h2>
            <img src="${noticia.urlToImage}" class="card-img-top" alt="..." onerror="this.src='/img/imgnoencontrada.jpg'">
            <div class="card-body">
            <p class="card-text">${noticia.description}</p>
            <h5 class="card-text">${noticia.source.name}</h5>
            <h6 class="card-text">${noticia.publishedAt}</h6>
            <a href="${noticia.url}" class="btn btn-primary">Ir a la noticia</a>
            </div>
        </div>
        </div>
        <br>`
        cardNoticias.appendChild(divX);    
    });
    
} 

btnBuscar.addEventListener("click", getNoticias);

