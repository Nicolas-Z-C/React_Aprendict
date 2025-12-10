let Mundo = "Mundo";


function Title(){
  //jsx -> React.createElement
  const nombre = "Jefferson";
  if (nombre){
    return <p>Hola {nombre}</p>
  }
  return <p>Hola {Mundo}</p>; //Se pueden poner variables, funciones y demas
};

export default Title;   