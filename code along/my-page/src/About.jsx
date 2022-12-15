import Carousel from 'react-bootstrap/Carousel';

function About() {
    return (
        <div className='container mt-5 pt-5'>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                        className="img-fluid d-flex mx-auto w-100"
                        style={{ height: "60vh" }}
                        src="https://cdn.pixabay.com/photo/2022/12/03/20/25/man-7633372__340.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="img-fluid d-flex mx-auto w-100"
                        style={{ height: "60vh" }}
                        src="https://cdn.pixabay.com/photo/2017/08/12/14/59/sad-boy-2634521__340.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="img-fluid d-flex mx-auto w-100"
                        style={{ height: "60vh" }}
                        src="https://cdn.pixabay.com/photo/2021/11/14/18/16/woman-6795381__340.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <img src="" className="img-fluid d-block w-100"></img>
            <div className="text-center p-5">
                <h3 className="display-5 mb-3"><strong>ABOUT US.</strong>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus tempora maiores veniam provident distinctio ad, repellendus vel, fuga a modi. Omnis assumenda magnam, 
                    nesciunt ducimus pariatur harum id ut.</p>
            </div>
        </div>
    )
}
export default About;