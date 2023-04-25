import Carousel from 'react-bootstrap/Carousel';
import { dataBanner } from './Data_Banner';
import './Banner.scss'

function Banner() {
    return (
        <div className="banner mt-5">
            <Carousel >
                {
                    dataBanner.map((dataB) => (
                        <Carousel.Item key={dataB.id}>
                            <div className="coverDark"></div>
                            <img
                                className="d-block w-100 bannerImage fluid"
                                src={dataB.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="textBanner">
                                    <h3>{dataB.title}</h3>
                                    <p>{dataB.subtitle}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Banner;