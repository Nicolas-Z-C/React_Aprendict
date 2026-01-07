import type { ReactNode } from "react";
import styled from 'st';
const Btn = styled.``
type props = {
    isLoading?:boolean;
    children:ReactNode;
    onClick():void;
}

function Btn({children,isLoading,onClick}:props) {
    return(
        <button onClick={onClick} disabled={isLoading} ></button>
    )
}

export default Btn;