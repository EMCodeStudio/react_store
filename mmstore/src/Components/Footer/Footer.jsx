import React from 'react'
import { LiFooter, UlFooter } from '../Styled/List/List'
import './Footer.scss'
const Footer = () => {
    return (


        <>
            <div className="footer">

                <div className="listFooter">
                    <UlFooter>
                        <LiFooter >
                            <h5>About</h5>
                        </LiFooter>
                        <LiFooter >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem? Quam ab commodi soluta, doloremque nostrum inventore dolores nisi doloribus quod distinctio harum, aspernatur sed sit corrupti, quas veniam vitae.</p>
                        </LiFooter>
                    </ UlFooter>
                    <UlFooter>
                        <LiFooter >
                            <h5>Servicios</h5>
                        </LiFooter>
                        <LiFooter >
                            <p>addsasd</p>
                        </LiFooter>
                    </ UlFooter>
                    <UlFooter>
                        <LiFooter >
                            <h5>Enlaces</h5>
                        </LiFooter>
                        <LiFooter >
                            <p>asdasdasd</p>
                        </LiFooter>
                    </ UlFooter>
                    <UlFooter>
                        <LiFooter >
                            <h5>Categorias</h5>
                        </LiFooter>
                        <LiFooter >
                            <p>vero maiores.</p>
                        </LiFooter>
                    </ UlFooter>
                    <UlFooter>
                        <LiFooter >
                            <h5>Informacion</h5>
                        </LiFooter>
                        <LiFooter >
                            <p>asdasdasd</p>
                        </LiFooter>
                    </ UlFooter>

                </div>

                <div className="bottom">

                </div>

            </div>
        </>
    )
}

export default Footer