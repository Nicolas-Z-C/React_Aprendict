import { useState } from "react";
/*Ahora vamos a crear el componente demanera reutilizable, asi podremos usaro en diversas cosas
  logrando asi tener un componente separado de la logica, esto se logra a travez de usar funciones como
  si fueran props*/
type Props = {
  data:string[];
  onSelect?: (elmento:string) => void; //Se especifica el prop a usar y se dice que es una funcion que no retorna nada
}

function List2({data,onSelect}: Props) {
 const [index, setIndex]= useState(1) 
 const Click= (e:string,i:number) => {
      setIndex(i);
      onSelect?.(e);      
  }  
  return (
    <ul className="list-group">
        {data.map((elemento,i) => ( 
          //<li  onClick={Click} key={elemento}className="list-group-item">{elemento}</li> 
          <li  onClick={() => Click(elemento,i)} key={elemento}className={`list-group-item ${index===i ? "active":""}`}>{elemento}</li> //Se usa la fat arrow para poder enviarle los parametros al evento
        ))}
    </ul>
  );
};

export default List2;