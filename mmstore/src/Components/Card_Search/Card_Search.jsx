import React from 'react'
import './Card_Search.scss'


const CardSearch = ({ dataSearch }) => {


    return (
        <>
            <div className="containerSearch">
                <div className="rowSearch">
                    <div className="leftSearch">
                        <img src={dataSearch.image} alt="" />
                    </div>
                    <div className="rightSearch">
                        <div className="titleSearch">
                            <h6>{dataSearch.title}</h6>
                            <p>{dataSearch.price}</p>
                        </div>
                        <div className="optionSearch">
                            <button>Ver Detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSearch