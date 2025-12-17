/*Aca se explica la frangmentacion del componente, pues esto sirve si deseamos re usar el codigo
  con diferentes cuerpos, estilos etc. */

import {Body} from '../fragments/01-Card_body'

function Card() {
  return (
    <div className="card" style={{ width: 250 }}>
      <div className="card-body">
        <Body />
      </div>
    </div>
  );
}

export default Card;
