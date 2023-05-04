import React from 'react'
import { divContainerSearch } from '../Styled/Cards/Cards'

const CardSearch = () => {


    return (
        <>
            <divContainerSearch>

                <div className="row">
                    
                    <div className="left">
                        <img src="" alt="" />
                    </div>

                    <div className="rigth">
                     <div className="titles">
                            <h6>Producto</h6>
                            <p>precio</p>
                        </div>
                        <div className="options">
                            <button>Ver Detalles</button>
                        </div>
                    </div>

                </div>
            </divContainerSearch>
        </>
    )
}

export default CardSearch