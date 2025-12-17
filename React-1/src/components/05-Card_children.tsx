import type { ReactNode } from "react";

/*Ahora siguiendo con los multiple props vamos a pasar un parametro
  de forma children*/
interface Props{
    //Para evitar errores al pasarle otro componente debemos usar un tipo especifico de dato
    children?:ReactNode,

}
function Card5(props:Props) {
  const {children} = props
    return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card5;
