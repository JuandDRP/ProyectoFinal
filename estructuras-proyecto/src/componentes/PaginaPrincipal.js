import imagen from "./GatoLogin.jpg"

function PaginaPrincipal({ peliculas }) {
  
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
    
    
    <div className="contenedor-principal flex flex-row h-50">

    <div className="formulario w-50  ">
    <h1 className="text-5xl mt-5 mb-9 uppercase text-red-700 ">Login</h1>
    <p className="text-red-700 text-4xl text-left">Email</p>
    <input className="input-email border-black text-4xl mb-4"></input>
    <p className="text-red-700 text-4xl text-left">Password</p>
    <input className="input-password border text-4xl mb-4" ></input>
    <p className="text-blue-600 text-10 text-left">ForgotPassword?</p>
    </div>
    <div className="contenedor-imagen my-6">
      <img className="w-80 m-auto"src={imagen} alt="Gato del login"></img>
    </div>
    
    </div>

    <div className="botones flex justify-between items w-1/3 my-6">
    <button className="bg-red-700 text-white px-4 py-2 rounded">Login</button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </div>


    </div>
  );
}



export default PaginaPrincipal;