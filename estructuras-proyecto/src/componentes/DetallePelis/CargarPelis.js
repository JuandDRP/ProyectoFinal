const CargarPeliculas = async() => 
{
    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=fbe0be168c5b7c94765896d073c2497f&language=es-MX')

    console.log(respuesta);

    if(respuesta.status===200){
        const datos=await respuesta.json();
        console.log(datos)

        let peliculas =""; 

        datos.results.forEach(pelicula => {
            peliculas+=`
            <div class="pelicula">
             <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="titulo">${pelicula.title}</h3>
            `;
                        
        });

        document.getElementById('contenedor').innerHTML=peliculas;

    }else if(respuesta.status===401) {
        console.log("Pusiste los datos mal")
    }else if(respuesta.status==404){
        console.log("La pelicula que elegiste no existe")
    }else{
        console.log("Ocurrio un error")
    }

    }catch(error){
        console.log(error);
    }
    
}
CargarPeliculas();
