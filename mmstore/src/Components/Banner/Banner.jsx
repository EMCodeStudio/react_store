import Carousel from 'react-bootstrap/Carousel';
import { dataBanner } from './Data_Banner';
import './Banner.scss'

function Banner() {
    return (
        <div className="banner">
            <Carousel>
                {
                    dataBanner.map((data) => (
                        <Carousel.Item key={data.id}>
                            <div className="coverDark"></div>
                            <img
                                className="d-block w-100 bannerImage fluid"
                                src={data.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="textBanner">
                                    <h3 className='text-light'>{data.title}</h3>
                                    <p>{data.subtitle}</p>
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