import { Fragment } from "react";
export function Body() {

    return (
        //Se puede usar tambien etiquetas vacias <>
        <Fragment>
            <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Este es el texto variable que podemos agregar mediante un fragmento
                </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </Fragment>
        );
}

export default Body;
