import type { ReactNode } from "react";

/*En este caso lo que hicimos fue crear un componente que acepta a otro para su body
  escencialmente lo que hicimos fue pasar una pequena lista al body mediante otro 
  componente, finalmente cabe aclarar que se debe agregar un ID en estos casos*/
interface Props{
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
