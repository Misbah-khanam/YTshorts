import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Shorts.css';
import Video from '../../components/Video/Video';
import Header from '../../components/Header/Header';
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';

const Shorts = () => {
    const swiperRef = useRef(null);
    const videoRefs = useRef([]);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const initializeSwiper = () => {
            if (swiperRef.current) {
                const swiper = new Swiper(swiperRef.current, {
                    direction: 'vertical',
                    mousewheel: true,
                    keyboard: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    on: {
                        slideChange: function () {
                            // Pause video in the previous slide
                            const previousSlideIndex = this.previousIndex;
                            if (videoRefs.current[previousSlideIndex]) {
                                videoRefs.current[previousSlideIndex].pause();
                            }

                            // Start video playback in the current slide if user has interacted
                            if (hasInteracted) {
                                const currentSlideIndex = this.activeIndex;
                                if (videoRefs.current[currentSlideIndex]) {
                                    videoRefs.current[currentSlideIndex].play();
                                }
                            }
                        },
                    },
                });

                videoRefs.current = swiper.slides.map(slide => slide.querySelector('video'));
            }
        };

        initializeSwiper();

        // Event listener for click event
        const handleMouseClick = () => {
            setHasInteracted(true);
        };
        const handleTouchStart = () => {
            setHasInteracted(true);
        };

        document.addEventListener('click', handleMouseClick);
        document.addEventListener('touchstart', handleTouchStart);

        return () => {
            document.removeEventListener('click', handleMouseClick);
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, [hasInteracted]);

    return (
        <div>
            <Header />
            <main>
                <div className="swiper-container" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Video video={video1} ref={(ref) => videoRefs.current.push(ref)} />
                        </div>
                        <div className="swiper-slide">
                            <Video video={video2} ref={(ref) => videoRefs.current.push(ref)} />
                        </div>
                        <div className="swiper-slide">
                            <Video video={video3} ref={(ref) => videoRefs.current.push(ref)} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Shorts;
