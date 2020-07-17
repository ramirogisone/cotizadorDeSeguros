import React from 'react';
import styled from '@emotion/styled';
import {capitalize} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, anio, plan} = datos;

    if(marca === '' || anio === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {capitalize(marca)} </li>
                <li>Plan: {capitalize(plan)} </li>
                <li>Año del auto: {anio} </li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;