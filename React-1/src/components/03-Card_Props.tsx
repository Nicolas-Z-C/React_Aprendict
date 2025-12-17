/*Aca se explica el paso de propiedades de un lado a otro,
  esto nos sirve para hacer nuestros componentes mucho mas dinamicos
  lo cual facilita el funcionamiento */

//Se Crea una interface para poder tener un valor exacto para los props
interface Props{
    body:string
};
//Con esto se evita el error de Props:any y se forma un autocompletado
function Card3(props:Props) {
    const body = props.body
    //const { body } = props;
  return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        {body}
      </div>
    </div>
  );
}

export default Card3;
