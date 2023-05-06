import React from 'react'
import './Card_Search.scss'
import { ButtonProduct } from '../Styled/Buttons/Buttons'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

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
                           {/*  <button>Ver Detalles</button> */}
                           <ButtonProduct
                           >
                            {/*   <p>
                                {isLoading ? 'Cargan...' : 'Comprar'}
                            </p> */}
                            Comprar
                            <AddShoppingCartIcon className='icon' />
                        </ButtonProduct>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSearch