import { useState } from 'react';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const sliderStyles = {
        height: '100%',
        position: 'relative',
    }

    const leftArrowStyles = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '0px',
        fontSize : '50px',
        color: '#000',
        cursor: 'pointer',
        zIndex: 1,
        opacity: '0.7',
        borderRadius: '10px 0 0 10px'
    }

    const rightArrowStyles = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '0px',
        fontSize : '50px',
        color: '#000',
        cursor: 'pointer',
        zIndex: 1,
        opacity: '0.7'
    }

    const slideStyles ={
        backgroundImage: `url(${slides[currentIndex]})`,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundsizes: 'cover',
    }
    
    const dotsCOntainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        height: '50px',
        alignItems: 'center',
    }

    function dotStyles(slideIndex) {
        return {
        margin: '0 3px',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: '#000',
        opacity: currentIndex === slideIndex ? '0.5' : '0.8',
        }
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious} className='hover:bg-slate-400'>❮</div>
            <div style={rightArrowStyles} onClick={goToNext}>❯</div>
            <div style={slideStyles}></div>
            <div style={dotsCOntainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style= {dotStyles(slideIndex)} onClick={() => goToSlide(slideIndex)}></div>
                ))}
            </div>
        </div>
} 

export default ImageSlider;