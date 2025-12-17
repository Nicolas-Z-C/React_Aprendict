/*Aca se explica o se muestra el funcionamiento basico de un componente
  Se debe tener en cuenta que para pasar un valor a un componente se debe
  pasar un objeto como se muestra abajo. */

function Card1() {
  return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card1;
