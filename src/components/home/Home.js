import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import styles from './Home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Home() {
    const navigate = useNavigate();

    const [scrollY, setScrollY] = useState(0);
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);

        if (scrollY < (window.innerHeight * 0.5)) {
            setShowOne(true);
            setShowTwo(false);
            setShowThree(false);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 0.5) && scrollY < (window.innerHeight * 1.5)) {
            setShowOne(false);
            setShowTwo(true);
            setShowThree(false);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 1.5) && scrollY < (window.innerHeight * 2.5)) {
            setShowOne(false);
            setShowTwo(false);
            setShowThree(true);
            setShowFour(false);
        }

        if (scrollY >= (window.innerHeight * 2.5)) {
            setShowOne(false);
            setShowTwo(false);
            setShowThree(false);
            setShowFour(true);
        }
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener("scroll", handleFollow)
        }
    })

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };



    return (
        <section>
            <div className={styles.container}>
                <div className={styles.pageOneBackground}>
                    <img alt="home" src={process.env.PUBLIC_URL + "/images/background.png"} />
                </div>

                <div className={styles.pageOne}>
                    <div className={showOne ? styles.pageOneShow : styles.pageOneHide}>
                        <div className={styles.pageOneText}>
                            ????????? ?????? ?????? ??????<br />
                            ?????? ?????? ?????????<br />
                        </div>

                        <img alt="home" className={styles.pageOneLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_nomargin_white.png"} />

                        <div className={styles.pageOneStartZone}>
                            <div className={styles.pageOneStartText}>
                                ?????? ??????
                            </div>

                            <button className={styles.pageOneStartButton} onClick={() => {
                                navigate("/login");
                            }}>
                                ????????????
                            </button>
                        </div>

                        <div className={styles.pageOneScroll}>
                            ????????? ??????<br />

                            <img alt="arrow" className={styles.pageOneScrollArrow} src={process.env.PUBLIC_URL + "/images/icons/arrow_down_blue.png"} />
                        </div>
                    </div>
                </div>



                <div className={styles.pageTwo}>
                    <div className={styles.pageTwoMainText}>
                        ????????? ???????????? ????????????<br />
                        ????????? ???????????? ??? ?????????.
                    </div>

                    <div className={styles.pageTwoSubText}>
                        ??? 400?????? ????????? ?????? ??????
                    </div>



                    <div className={styles.pageTwoCarousel}>
                        <Slider {...settings}>
                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/1.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/2.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/3.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/4.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/5.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/6.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/7.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/8.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/9.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/10.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/11.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/12.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/13.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/14.png"} />

                            <img alt="home" className={styles.pageTwoCarouselElements} src={process.env.PUBLIC_URL + "/images/icons/filled/15.png"} />
                        </Slider>
                    </div>
                </div>



                <div className={styles.pageThree}>
                    <div className={styles.pageThreeMainText}>
                        ??????????????? ????????? ????????????<br />
                        ??? ????????? ????????? ?????? ??? ?????????.
                    </div>

                    <div className={styles.pageThreeSubText}>
                        ???????????? ?????? ?????? ????????? ??????
                    </div>

                    <img alt="home" className={showThree ? styles.pageThreeGraphicShow : styles.pageThreeGraphicHide} src={process.env.PUBLIC_URL + "/images/graphics/7.png"} />
                </div>



                <div className={styles.pageFour}>
                    <div className={styles.pageFourAppear}>
                        ?????? ????????? ??????
                    </div>

                    <div className={styles.pageFourContainer}>
                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_card_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                ??????
                            </div>

                            <div className={styles.pageFourValues}>
                                450
                                <span className={styles.pageFourGae}>???</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_company_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                ?????????
                            </div>

                            <div className={styles.pageFourValues}>
                                15
                                <span className={styles.pageFourGae}>???</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_brands_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                ?????????
                            </div>

                            <div className={styles.pageFourValues}>
                                199
                                <span className={styles.pageFourGae}>???</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_benefits_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                ??????
                            </div>

                            <div className={styles.pageFourValues}>
                                6264
                                <span className={styles.pageFourGae}>???</span>
                            </div>
                        </div>

                        <div className={styles.pageFourElements}>
                            <img alt="graphic" className={styles.pageFourIcon} src={process.env.PUBLIC_URL + "/images/icons/carddata_payment_blue.png"} />

                            <div className={styles.pageFourTypes}>
                                ?????????
                            </div>

                            <div className={styles.pageFourValues}>
                                40
                                <span className={styles.pageFourGae}>???</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;