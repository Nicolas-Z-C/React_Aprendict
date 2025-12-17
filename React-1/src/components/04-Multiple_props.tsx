/*Aca se explica el paso de propiedades de un lado a otro,
  esto nos sirve para hacer nuestros componentes mucho mas dinamicos
  lo cual facilita el funcionamiento */

//Se Crea una interface para poder tener un valor exacto para los props
//El ? permite que un valor sea opcional
interface Props {
  Title?:string,
  Paragraph?:string,
}
//Con esto se evita el error de Props:any y se forma un autocompletado
function Card4(props: Props) {
  const { Title } = props;
  const { Paragraph } = props;
  //const { body } = props;
  return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Paragraph}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card4;
