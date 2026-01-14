import { useEffect } from "react";

function exampleUseEffect()
{
    /* Use efect tiene dos parametros, el primero es la funcion que se realizara, y el segundo el array con sus dependecias, asi mismo se entiende que 
       si no le pasamos el segundo parametro opcional, el codigo que realicemos se ejecutara cada vez que se renderize el componente, a comparacion de que si le enviamos 
       dicho array este solo se ejecutara una vez*/
    useEffect(()=>{

    },[])
}

export default exampleUseEffect;
