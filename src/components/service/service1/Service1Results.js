import {useNavigate} from "react-router";
import Slider from 'react-slick';

import styles from "./Service1Results.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import Loading from "../../Loading";


const Service1Results = () => {
    let jsonArr = [];

    const navigate = useNavigate();
    // const location = useLocation();
    // const axiosPrivate = useAxiosPrivate();
    // const [loading, setLoading] = useState(true);
    // const [cards, setCards] = useState({
    //     topTenCards: [{}],
    //     bestCardBenefits: [{}],
    // });

    const [result, setResult] = useState(() => {
        const item = localStorage.getItem("serviceone");
        const parsedItem = JSON.parse(item);
        return parsedItem || {};
    })

    const [progress, setProgress] = useState(true);

    useEffect(() => {
        const item = localStorage.getItem('isLoading');
        const parsedItem = JSON.parse(item);
        setProgress(parsedItem);
    }, []);


    console.log(result);
    console.log(progress);

    // useEffect(() => {
    //     for (var i = SelectedBrands.length - 1; i >= 0; i--) {
    //         jsonArr[i] = { memberId: 1, brandName: SelectedBrands[i] };
    //         // SelectedBrands 리스트 비우기!!!
    //         SelectedBrands.pop();
    //     }
    //
    //     const getResults = async () => {
    //         // console.log(jsonArr);
    //
    //         const parsedUrlEncodedData = JSON.stringify(jsonArr);
    //
    //         try {
    //             const response = await axiosPrivate({
    //                 method: "POST",
    //                 url: "/benefit/select",
    //                 data: parsedUrlEncodedData,
    //             });
    //             setTimeout(() => {
    //                 setServiceone(response.data);
    //                 setLoading(false);
    //             }, 500)
    //         } catch (err) {
    //             console.error(err);
    //             navigate('/login', { state: { from: location }, replace: true });
    //         }
    //     }
    //
    //     getResults();
    // }, []);



    function benefitParser(type, numberOne, numberTwo) {
        if (type === "PBD") {
            return numberOne + "% 청구 할인";
        } else if (type === "PID") {
            return numberOne + "% 즉시 할인";
        } else if (type === "PND") {
            return numberOne + "% 할인";
        } else if (type === "PCB") {
            return numberOne + "% 캐시백";
        } else if (type === "PGP") {
            return numberOne + "% 포인트/마일리지 적립";
        } else if (type === "WBD") {
            return numberOne + "원 청구 할인";
        } else if (type === "WID") {
            return numberOne + "원 즉시 할인";
        } else if (type === "WND") {
            return numberOne + "원 할인";
        } else if (type === "WCB") {
            return numberOne + "원 캐시백";
        } else if (type === "FGP") {
            return numberOne + "원당" + numberTwo + "포인트/마일리지 적립";
        } else if (type === "FBD") {
            return numberOne + "원당" + numberTwo + "원 청구 할인";
        } else if (type === "FID") {
            return numberOne + "원당" + numberTwo + "원 즉시 할인";
        } else if (type === "FND") {
            return numberOne + "원당" + numberTwo + "원 할인";
        } else if (type === "NGP") {
            return numberOne + "포인트/마일리지 적립";
        } else if (type === "LBD") {
            return "1리터당" + numberOne + "원 청구 할인";
        } else if (type === "LID") {
            return "1리터당" + numberOne + "원 즉시 할인";
        } else if (type === "LND") {
            return "1리터당" + numberOne + "원 할인";
        } else if (type === "LGP") {
            return "1리터당" + numberOne + "포인트/마일리지 적립";
        } else if (type === "LCB") {
            return "1리터당" + numberOne + "원 캐시백";
        }
    }



    function typeParser(type) {
        if (type === "credit\r" || type === "credit") {
            return "신용카드";
        } else if (type === "check\r" || type === "check") {
            return "체크카드";
        } else if (type === "hybrid\r" || type === "hybrid") {
            return "하이브리드 카드";
        }
    }



    function BenefitElements(props) {
        return (
            <div className={styles.brandsZone}>
                <div className={styles.brandImageZone}>
                    <img
                        className={styles.brandImage}
                        alt="brands"
                        src={
                            process.env.PUBLIC_URL +
                            "/images/brands_logo/" +
                            result.bestCardBenefits[props.order].brandName +
                            ".png"
                        }
                    />
                </div>

                <div className={styles.brandBenefitZone}>
                    <div className={styles.brandBenefitName}>
                        {result.bestCardBenefits[props.order].brandNameKor}
                    </div>

                    <div className={styles.brandBenefitInfo}>
                        {benefitParser(
                            result.bestCardBenefits[props.order].feeType,
                            result.bestCardBenefits[props.order].numberOne,
                            result.bestCardBenefits[props.order].numberTwo
                        )}
                    </div>
                </div>
            </div>
        );
    }



    function CardElements(props) {
        return (
            <div className={styles.moreCardsZone} onClick={() => {navigate("/cardinfo/" + result.topTenCards[props.order].id) }}>
                <img
                    className={styles.moreCardsImage}
                    alt="cards"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/card_images/" +
                        result.topTenCards[props.order].id +
                        ".png"
                    }
                />

                <img
                    className={styles.moreCardsCompanyImage}
                    alt="cards"
                    src={
                        process.env.PUBLIC_URL +
                        "/images/card_logo/center_aligned/" +
                        result.topTenCards[props.order].company_eng +
                        ".png"
                    }
                />

                <div className={styles.moreCardsName}>
                    {result.topTenCards[props.order].name}
                </div>
            </div>
        );
    }



    return (
        <div>
            {
                progress

                    ?

                    <Loading message="데이터 분석중" />

                    :

                    (
                        <div>
                            <div className={styles.backgroundZone}>
                                <div className={styles.bestCardZone}>
                                    <img
                                        className={styles.bestCardImage}
                                        alt="cards"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/card_images/" +
                                            result.topTenCards[0].id +
                                            ".png"
                                        }
                                    />

                                    <div className={styles.bestCardName}>
                                        {result.topTenCards[0].name}
                                    </div>

                                    <div>
                                        <label className={styles.bestCardType}>
                                            {typeParser(result.topTenCards[0].type)}
                                        </label>

                                        <img
                                            className={styles.bestCardCompanyImage}
                                            alt="cards"
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/images/card_logo/left_aligned/" +
                                                result.topTenCards[0].company_eng +
                                                ".png"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className={styles.subText}>
                                주요 맟춤 혜택
                            </div>
                            <div className={styles.brandsRow}>
                                <Slider {...{
                                    dots: false,
                                    arrows: false,
                                    infinite: true,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    speed: 2000,
                                    autoplaySpeed: 2000,
                                    pauseOnHover: false,
                                }}>
                                    {
                                        result.bestCardBenefits.map((current, index) => (
                                            <BenefitElements order={index} />
                                        ))
                                    }
                                </Slider>
                            </div>



                            <div className={styles.subText}>
                                이 카드는 어때요?
                            </div>
                            <div className={styles.moreCardsRow}>
                                <CardElements order={1} />
                                <CardElements order={2} />
                                <CardElements order={3} />
                                <CardElements order={4} />
                            </div>



                            <div className={styles.extraButtonsZone}>
                                <button
                                    className={styles.toMoreCardsButton}
                                    onClick={() => {
                                        navigate("/service1/results/more");
                                    }}
                                >
                                    더 많은 카드 보기
                                </button>
                                <br />
                                <br />

                                <button
                                    className={styles.goBackButton}
                                    onClick={() => {
                                        navigate(-1);
                                    }}
                                >
                                    혜택 다시 선택하기
                                </button>
                            </div>
                        </div>
                    )}
        </div>
    );
}

export default Service1Results;
