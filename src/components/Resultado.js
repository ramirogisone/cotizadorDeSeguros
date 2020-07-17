import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotiza = styled.div`
    text-align: center;
    padding: 5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {
    return ( 
        (cotizacion === 0)
            ? <Mensaje>Selecciona una marca, un año y el tipo de cotización.</Mensaje> 
            : 
                (
                    <ResultadoCotiza>
                        <TransitionGroup
                            component='span'
                            className='resultado'
                        >
                            <CSSTransition
                                classNames='resultado'
                                key={cotizacion}
                                timeout={{enter: 500, exit: 500}}
                            >
                                <TextCotizacion>La cotización total es: $ <span>{cotizacion}</span></TextCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                    </ResultadoCotiza>
                )
     );
}
 
export default Resultado;