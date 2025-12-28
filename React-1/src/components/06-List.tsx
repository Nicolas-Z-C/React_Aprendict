import { useState } from "react";

/*Aca se hace el pequeno codigo de TS para mostrar la lista, asi mismo se debe lograr que no hayan errores en consola
  por lo cual para estos archivos deberemos agregar un ID, pues este no funciona como en las bases de datos, donde estos
  ya las traen incluidas, asi mismo pudimos hacer otro modulo importado donde se puede presenciar el efecto del click
  esto es sumamente util cuando tenemos Modales de cientos de lineas */
type Props = {
  data:string[],
}

function List({data}: Props) {
  /*Aca tendremos el sistema basico bajo el cual podemos chequear el estado de nuestro
    codigo elegido y asi mismo podremos chequear el estado del clickeo para asi poder
    chequear este, esto lo logramos a travez del useState de react, lo que permite que 
    podamos tener una variable de index, y que esta pueda cambiar de estado y react la reconozca*/
 const [index, setIndex]= useState(1) 
 const Click= (e:string,i:number) => {
      /*useState nos trae un array con dos variables, una que podemos cambiar y otra que no*/
      alert(`HICISTE CLICK WUAPO y el nombre de lo que elegiste es ${e}`)
      setIndex(i)      
  }  
  
  //Vamos ahora a crear una variable para mantener el estado de nuestros componentes
  return (
    <ul className="list-group">
        {data.map((elemento,i) => ( 
          //<li  onClick={Click} key={elemento}className="list-group-item">{elemento}</li> 
          <li  onClick={() => Click(elemento,i)} key={elemento}className={`list-group-item ${index===i ? "active":""}`}>{elemento}</li> //Se usa la fat arrow para poder enviarle los parametros al evento
        ))}
    </ul>
  );
};

export default List;