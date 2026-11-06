"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "GT3RS",
            subtitle: "Supercar Porsche Terkencang.",
            imageUrl: "/images/banner_01.jpg",
        },
        {
            title: "Mission S",
            subtitle: "Hypercar warisan Porsche 918",
            imageUrl: "/images/banner_02.jpg",
        },
        {
            title: "Cayenne Electric",
            subtitle: "SUV Porsche bertenaga listrik.",
            imageUrl: "/images/banner_03.jpg",
        }
    ]

    return (
        <Carousel fade interval={ 4000 } data-bs-theme="dark">
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        style={{
                            backgroundImage:`url(${ slide.imageUrl})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            height:"60vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold" style={{ color: "white" }}>{ slide.title }</h1>
                        <p className="lead" style={{ color: "white" }}>{ slide.subtitle }</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;