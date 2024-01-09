import React, {useState, useEffect} from "react";

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    //Caso queira adicionar um botão
    
    // const prevImage = () => {
    //     setCurrentImageIndex((currentImageIndex -1 + images.length) % images.length);
    // };

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextImage();
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div >
            {images.map((image, index) => (
                <img key={image} src={image} alt={`Imagem ${index + 1}`} style={{ display: index === currentImageIndex ? 'block' : 'none'}} />
            ))}
        
        </div>
    )
}