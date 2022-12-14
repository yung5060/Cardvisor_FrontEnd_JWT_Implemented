import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";

import styles from './CardInfo.module.css';
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loading from "../Loading";



function CardInfo() {
    let { card_code } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(true);
    const [cardInfo, setCardInfo] = useState({
        benefits: [{}],
        fee: [{}],
        category: [{}],
        card: [{}],
    });

    const [like, setLike] = useState(false);

    useEffect(() => {
        // const getCardInfo = async () => {
        //     // const accessToken = localStorage.getItem("accessToken");
        //     const option = {
        //         method: "GET",
        //         url: "http://localhost:8080/card/" + card_code,
        //         headers: {
        //             Authorization: `Bearer ${auth.accessToken}`,
        //         },
        //     };
        //
        //     axios(option).then(({ data }) => {
        //         setTimeout(() => {
        //             setCardInfo(data);
        //             setLoading(false);
        //         }, 500);
        //     });
        // };

        const getCardInfo = async () => {
            try {
                const response = await axiosPrivate.get('/card/' + card_code.toString(), {
                });
                setTimeout(() => {
                    setCardInfo(response.data);
                    setLoading(false);
                }, 500)
                // console.log(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        // getCardList();

        getCardInfo();
    }, []);




    function benefitParser(type, numberOne, numberTwo) {
        if (type === "PBD") { return numberOne + "% ?????? ??????" }
        else if (type === "PID") { return numberOne + "% ?????? ??????" }
        else if (type === "PND") { return numberOne + "% ??????" }
        else if (type === "PCB") { return numberOne + "% ?????????" }
        else if (type === "PGP") { return numberOne + "% ?????????/???????????? ??????" }
        else if (type === "WBD") { return numberOne + "??? ?????? ??????" }
        else if (type === "WID") { return numberOne + "??? ?????? ??????" }
        else if (type === "WND") { return numberOne + "??? ??????" }
        else if (type === "WCB") { return numberOne + "??? ?????????" }
        else if (type === "FGP") { return numberOne + "?????? " + numberTwo + "?????????/???????????? ??????" }
        else if (type === "FBD") { return numberOne + "?????? " + numberTwo + "??? ?????? ??????" }
        else if (type === "FID") { return numberOne + "?????? " + numberTwo + "??? ?????? ??????" }
        else if (type === "FND") { return numberOne + "?????? " + numberTwo + "??? ??????" }
        else if (type === "NGP") { return numberOne + "?????????/???????????? ??????" }
        else if (type === "LBD") { return "1????????? " + numberOne + "??? ?????? ??????" }
        else if (type === "LID") { return "1????????? " + numberOne + "??? ?????? ??????" }
        else if (type === "LND") { return "1????????? " + numberOne + "??? ??????" }
        else if (type === "LGP") { return "1????????? " + numberOne + "?????????/???????????? ??????" }
        else if (type === "LCB") { return "1????????? " + numberOne + "??? ?????????" }
    }

    function typeParser(type) {
        if (type === "credit\r" || type === "credit") { return "????????????" }
        else if (type === "check\r" || type === "check") { return "????????????" }
        else if (type === "hybrid\r" || type === "hybrid") { return "??????????????? ??????" }
    }

    function feeNameParser(name) {
        if (name === "amex") { return "???????????? ???????????????" }
        else if (name === "amexFamily") { return "???????????? ???????????????(?????? ??????)" }
        else if (name === "amexMobile") { return "???????????? ???????????????(????????? ??????)" }
        else if (name === "bc") { return "BC??????" }
        else if (name === "bcGlobal") { return "BC ?????????" }
        else if (name === "bcDomestic") { return "BC??????(?????? ??????)" }
        else if (name === "jcb") { return "JCB" }
        else if (name === "jcbOneWay") { return "JCB(One Way)" }
        else if (name === "jcbGold") { return "JCB(??????)" }
        else if (name === "jcbMobile") { return "JCB(????????? ??????)" }
        else if (name === "jcbSilver") { return "JCB(??????)" }
        else if (name === "kWorld") { return "K-WORLD" }
        else if (name === "kWorldJcb") { return "K-WORLD(JCB)" }
        else if (name === "kWorldUpi") { return "K-WORLD(UPI)" }
        else if (name === "kWorldMobile") { return "K-WORLD(????????? ??????)" }
        else if (name === "master") { return "???????????????" }
        else if (name === "masterPlatinum") { return "???????????????(????????????)" }
        else if (name === "masterFamliy") { return "???????????????(?????? ??????)" }
        else if (name === "masterGold") { return "???????????????(??????)" }
        else if (name === "masterDomestic") { return "???????????????(?????? ??????)" }
        else if (name === "masterMobile") { return "???????????????(????????? ??????)" }
        else if (name === "masterSilver") { return "???????????????(??????)" }
        else if (name === "masterOverseas") { return "???????????????(?????? ??????)" }
        else if (name === "oneWay") { return "One Way" }
        else if (name === "sAnd") { return "S&" }
        else if (name === "unionPay") { return "???????????????" }
        else if (name === "unionPayDomestic") { return "???????????????(?????? ??????)" }
        else if (name === "unionPayMobile") { return "???????????????(????????? ??????)" }
        else if (name === "upi") { return "UPI" }
        else if (name === "urs") { return "URS" }
        else if (name === "visa") { return "????????????" }
        else if (name === "visaPlatinum") { return "????????????(????????????)" }
        else if (name === "visaFamily") { return "????????????(?????? ??????)" }
        else if (name === "visaGold") { return "????????????(??????)" }
        else if (name === "visaDomesticAndOverseas") { return "????????????(????????? ??????)" }
        else if (name === "visaMobile") { return "????????????(????????? ??????)" }
        else if (name === "visaSilver") { return "????????????(??????)" }
        else if (name === "domestic") { return "?????? ??????" }
        else if (name === "domesticFamily") { return "?????? ??????(?????? ??????)" }
        else if (name === "domesticMobile") { return "?????? ??????(????????? ??????)" }
    }

    function feeLinkParser(name) {
        if (name === "amex") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "amexFamily") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "amexMobile") { return "www.americanexpress.com/ko-kr/network/help" }
        else if (name === "bc") { return "www.bccard.com" }
        else if (name === "bcGlobal") { return "www.bccard.com" }
        else if (name === "bcDomestic") { return "www.bccard.com" }
        else if (name === "jcb") { return "www.kr.jcb" }
        else if (name === "jcbOneWay") { return "www.kr.jcb" }
        else if (name === "jcbGold") { return "www.kr.jcb" }
        else if (name === "jcbMobile") { return "www.kr.jcb" }
        else if (name === "jcbSilver") { return "www.kr.jcb" }
        else if (name === "kWorld") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "kWorldJcb") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "kWorldUpi") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "kWorldMobile") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "master") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterPlatinum") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterFamliy") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterGold") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterDomestic") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterMobile") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterSilver") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "masterOverseas") { return "www.mastercard.co.kr/ko-kr/personal/get-support.html" }
        else if (name === "oneWay") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "sAnd") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "unionPay") { return "www.unionpayintl.com/kr" }
        else if (name === "unionPayDomestic") { return "www.unionpayintl.com/kr" }
        else if (name === "unionPayMobile") { return "www.unionpayintl.com/kr" }
        else if (name === "upi") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "urs") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "visa") { return "www.visakorea.com" }
        else if (name === "visaPlatinum") { return "www.visakorea.com" }
        else if (name === "visaFamily") { return "www.visakorea.com" }
        else if (name === "visaGold") { return "www.visakorea.com" }
        else if (name === "visaDomesticAndOverseas") { return "www.visakorea.com" }
        else if (name === "visaMobile") { return "www.visakorea.com" }
        else if (name === "visaSilver") { return "www.visakorea.com" }
        else if (name === "domestic") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "domesticFamily") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
        else if (name === "domesticMobile") { return "?????? ???????????? ?????? ??????????????? ???????????? ????????????." }
    }

    function cardLinkParser(name) {
        if (name === "NH??????") { return "card.nonghyup.com" }
        else if (name === "????????????") { return "card.kbcard.com" }
        else if (name === "????????????") { return "www.ibk.co.kr/card/mainList.ibk" }
        else if (name === "????????????") { return "www.dgb.co.kr" }
        else if (name === "????????????") { return "www.lottecard.co.kr" }
        else if (name === "????????????") { return "www.busanbank.co.kr/ib20/mnu/FPM00001" }
        else if (name === "????????????") { return "www.samsungcard.com" }
        else if (name === "??????") { return "suhyup-bank.com" }
        else if (name === "????????????") { return "www.shinhancard.com" }
        else if (name === "????????????") { return "www.citibank.co.kr" }
        else if (name === "????????????") { return "www.wooricard.com" }
        else if (name === "????????????") { return "www.kbanknow.com/ib20/mnu/FPMCRD000000" }
        else if (name === "????????????") { return "www.hanacard.co.kr" }
        else if (name === "???????????????") { return "www.ehyundai.com/newPortal/card/main.do" }
        else if (name === "????????????") { return "www.hyundaicard.com" }
    }

    function cardPhoneNumberParser(name) {
        if (name === "NH??????") { return "1644-4000" }
        else if (name === "????????????") { return "1588-1688" }
        else if (name === "????????????") { return "1588-2588" }
        else if (name === "????????????") { return "1566-5050" }
        else if (name === "????????????") { return "1588-8100" }
        else if (name === "????????????") { return "1588-6200" }
        else if (name === "????????????") { return "1588-8700" }
        else if (name === "??????") { return "1588-1515" }
        else if (name === "????????????") { return "1544-7000" }
        else if (name === "????????????") { return "1566-1000" }
        else if (name === "????????????") { return "1588-9955" }
        else if (name === "????????????") { return "1522-1155" }
        else if (name === "????????????") { return "1800-1111" }
        else if (name === "???????????????") { return "1588-4560" }
        else if (name === "????????????") { return "1577-6000" }
    }

    function FeeElements({ providerName, fee }) {
        return (
            <div className={styles.feeElements}>
                <img className={styles.feeImage}
                    alt={providerName}
                    src={process.env.PUBLIC_URL + "/images/fee_logo/left_aligned/" + providerName + ".png"} />

                <div className={styles.feeInfo}>
                    <div className={styles.feeName}>
                        {feeNameParser(providerName)}
                    </div>

                    <div className={styles.feeValue}>
                        {fee === 0 ? <span>????????? ??????</span> : <span>{fee}???</span>}
                    </div>
                </div>
            </div>
        )
    }

    function BenefitElements({ nameKor, nameEng, feeType, numberOne, numberTwo }) {
        return (
            <div className={styles.benefitElements}>
                <img
                    className={styles.benefitImage}
                    alt="brands"
                    src={process.env.PUBLIC_URL + "/images/brands_logo/" + nameEng + ".png"} />

                <label className={styles.benefitName}>
                    {nameKor}
                </label>

                <label className={styles.benefitInfo}>
                    {benefitParser(feeType, numberOne, numberTwo)}
                </label>
            </div>
        )
    }



    return (
        <div>
            {
                loading

                    ?

                    <Loading message="????????? ???????????????" />

                    :

                    (
                        <div className={styles.backgroundZone}>
                            <div className={styles.cardZone}>
                                <img
                                    className={styles.cardImage}
                                    alt="cards"
                                    src={process.env.PUBLIC_URL + "/images/card_images/" + card_code + ".png"} />

                                <div className={styles.cardName}>
                                    {cardInfo.card[0].name}
                                </div>

                                <div>
                                    <label className={styles.cardType}>
                                        {typeParser(cardInfo.card[0].type)}
                                    </label>
                                    
                                    <img
                                        className={styles.cardCompanyImage}
                                        alt="cards"
                                        src={process.env.PUBLIC_URL + "/images/card_logo/left_aligned/" + cardInfo.card[0].company_eng + ".png"} />
                                </div>
                            </div>



                            <div className={styles.mainText1}>
                                ?????????
                            </div>

                            <div className={styles.feeZone}>
                                {
                                    cardInfo.fee.map(current =>
                                        <FeeElements providerName={current.provider} fee={current.pay} />
                                    )
                                }
                            </div>



                            <div className={styles.mainText2}>
                                ????????? ??? ??????
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("transport")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }


                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "transport"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("communication")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "communication"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("mart")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "mart"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("convstore")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ?????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "convstore"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("movies")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "movies"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("entertainment")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????????????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "entertainment"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("deptstore")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ?????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "deptstore"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("onlineshopping")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ????????? ?????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "onlineshopping"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("easypay")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ????????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "easypay"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("cafebakery")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????/????????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "cafebakery"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("beauty")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "beauty"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("dining")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "dining"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("books")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "books"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("themepark")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ????????????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "themepark"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={styles.benefitsZone}>
                                {
                                    cardInfo.category.includes("fuel")

                                    &&

                                    <div className={styles.benefitZoneCategoies}>
                                        ??????
                                    </div>
                                }

                                <div className={styles.benefitZoneBrands}>
                                    {
                                        cardInfo.benefits.map(current => (
                                            current.categoryName === "fuel"

                                            &&

                                            <BenefitElements nameKor={current.brandNameKor} nameEng={current.brandName} feeType={current.feeType} numberOne={current.numberOne} numberTwo={current.numberTwo} />
                                        ))
                                    }
                                </div>
                            </div>

                            {/*{console.log(cardInfo.fee)}*/}

                            <div className={styles.mainText3}>
                                ?????? ??????
                            </div>

                            <div className={styles.caution}>
                                <br />
                                ?????? ??????????????? ???????????? ????????? ?????? ??????????????? ???????????? ????????? ????????? ????????????.<br />
                                ????????? ??????????????? ?????? ?????? ??? ????????? ?????? ????????? ??????????????? ???????????? ?????? ??? ????????????.<br />
                                ???????????? ???????????? ????????? ?????? ????????? ??????????????? ????????? ??? ????????????.<br /><br />

                                ?????? ????????? ???????????? ????????? ?????? ?????? ?????? ?????? ????????? ????????? ??? ????????????.<br /><br />

                                ????????? ????????? ????????? ????????? ?????? ????????? ??? ????????? ??????????????? ??????????????? ??????????????? ??????????????? ????????????.<br />
                                ???????????? ????????? ????????? ????????? ?????? ????????? ??? ????????? ??????????????? ??????????????? ??????????????? ??????????????? ????????????.<br />
                                ?????? ???????????? ????????? ????????? ????????? ?????? ????????? ??? ???????????? ??????????????? ??????????????? ??????????????? ??????????????? ????????????.<br /><br />

                                {cardInfo.card[0].company} ???????????? ??? <span className={styles.cautionHighlight}>{cardLinkParser(cardInfo.card[0].company)}</span><br />
                                {cardInfo.card[0].company} ???????????? ??? <span className={styles.cautionHighlight}>{cardPhoneNumberParser(cardInfo.card[0].company)}</span><br /><br />

                                {
                                    cardInfo.fee.map(current => (
                                        <span>
                                            {feeNameParser(current.provider)} ???????????? ??? <span className={styles.cautionHighlight}>{feeLinkParser(current.provider)}</span><br />
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default CardInfo;