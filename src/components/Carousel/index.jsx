/* eslint-disable react/prop-types */

import style from './Carousel.module.scss';
import { useState } from 'react';
import chevronLeft from '../../assets/images/chevron_left.svg';
import chevronRight from '../../assets/images/chevron_right.svg';
import { PropTypes } from 'prop-types';

export default function Carousel ({id, pictures}) {

    const [pictureCurrent, setPictureCurrent] = useState(0);
    const slidesLength = pictures.length;

    //numérotation des slides
    const numberSlide = `${pictureCurrent + 1} / ${slidesLength}` 


    function nextSlide() {
        setPictureCurrent(pictureCurrent === slidesLength - 1 ? 0 : pictureCurrent + 1);
    }

    function prevSlide() {
        setPictureCurrent(pictureCurrent === 0 ? slidesLength - 1 : pictureCurrent - 1);
    }

    
    return (
        <section key={id} className={style.sectionImageRental}>
            {slidesLength > 1 &&
            <>
                <img src={chevronLeft} alt="flèche précédente" onClick={prevSlide} className={style.arrowLeft}/>
                <img src={chevronRight} alt="flèche suivante" onClick={nextSlide} className={style.arrowRight}/>
            </>
            }
            <div className={style.slider}>
            {pictures.map((slide, index) => {
                return (
                    <div key={index} className={pictureCurrent === index ? style.slideActive : style.slide}>
                        {index === pictureCurrent &&
                            <>
                                <img src={slide} alt={`appartement`} />
                                {slidesLength > 1 &&
                                    <span className={style.slideNumber}>{numberSlide}</span>
                                }
                            </>
                        }
                    </div>
                )})}
            </div>
        </section>
    );
}

Carousel.propTypes = {
    length: PropTypes.node
}