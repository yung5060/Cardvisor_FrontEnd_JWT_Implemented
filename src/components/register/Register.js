import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "../api/axios";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Register.module.css";



const USER_REGEX = /^[A-z][A-z0-9-_]{5,23}$/;
const PWD_REGEX = /^(?=.*[A-z])(?=.*[0-9])(?=.*[!@#$%^&*~]).{8,24}$/;



function Register() {
    const navigate = useNavigate();

    const userRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [notDuplicate, setNotDuplicate] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [gender, setGender] = useState("male");
    const [birth, setBirth] = useState(null);


    const current = new Date()
            .toLocaleDateString("ko-KR")
            .replace(/\./g, "")
            .split(" ")
            .map((v, i) => (i > 0 && v.length < 2 ? "0" + v : v))
            .join("-");


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])



    var date = new Date(birth);
    var year = String(date.getFullYear()).padStart(4, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");



    const handleDuplicate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                "/auth/duplicate",
                {
                    headers: { "nickname": user }
                }
            )

            alert("?????? ????????? ??????????????????.");
            setNotDuplicate(true);
        }

        catch (err) {
            if (!err?.response) {
                alert("No Server Response");
            }

            else if (err.response?.status === 400) {
                alert("?????? ???????????? ??????????????????.");
            }

            else {
                alert("?????? ??????.");
            }

            setNotDuplicate(false);
        }
    }



    const handleClick = async (event) => {
        event.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            // setErrMsg("Invalid Entry");
            return;
        }

        const option = {
            method: "POST",
            url: "/auth/register",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            withCredentials: true,
            data: JSON.stringify({
                nickname: user,
                pw: pwd,
                gender: gender,
                date: [year, month, day].join("/")
            }),
        };

        const response = await axios(option)
            .then(({ data }) => {
                setUser("");
                setPwd("");
                setMatchPwd("");

                alert("??????????????? ?????????????????????.")

                return navigate("/login");
            })
            .catch((error) => {
                if (!error?.response) {
                    alert("?????? ?????? ??????");
                }

                else if (error.response?.status === 400) {
                    alert("?????? ???????????? ??????????????????.");
                }

                else {
                    alert("?????? ??????.");
                }
            })
    };



    return (
        <div className={styles.container}>
            <div className={styles.registerZone}>
                <div className={styles.registerZoneLeft}>
                    <div>
                        ????????? ?????? ?????? ??????<br />
                        ?????? ?????? ?????????<br />
                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_nomargin_white.png"} />
                    </div>

                    <img alt="home" className={styles.graphic} src={process.env.PUBLIC_URL + "/images/graphics/14.png"} />
                </div>




                <div className={styles.registerZoneRight}>
                    <div className={styles.mainTitle}>
                        register
                    </div>

                    <div className={styles.subTitle}>
                        Cardvisor??? ????????? ????????? ????????? ??? ????????????.
                    </div>

                    <section>
                        {/*<p ref={errRef} className={errMsg ? "errmsg" :*/}
                        {/*"offscreen"} aria-live="assertive">{errMsg}</p>*/}
                        <form onSubmit={handleClick}>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => {
                                    setUser(e.target.value);
                                    setNotDuplicate(false);
                                }}
                                value={user}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className={styles.inputIDZone}
                                placeholder="?????????"
                                spellCheck="false"
                            />

                            <input
                                type="button"
                                onClick={handleDuplicate}
                                className={styles.checkIDButton}
                                value="?????? ??????"
                            />

                            {
                                !user

                                    ?

                                    <div><br /></div>

                                    :

                                    <span>
                                        {
                                            user && !notDuplicate

                                                ?

                                                <span className={styles.messageInvalid}>
                                                    <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                                    ????????? ?????? ????????? ????????????.
                                                </span>

                                                :

                                                <span>
                                                    {
                                                        user && !validName

                                                            ?

                                                            <span className={styles.messageInvalid}>
                                                                <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                                                ???????????? ?????? 6???????????? ?????????.
                                                            </span>

                                                            :

                                                            <span className={styles.messageInvalid}>
                                                                <FontAwesomeIcon icon={faCheck} className={styles.iconValid} />
                                                                ?????? ????????? ??????????????????.
                                                            </span>
                                                    }
                                                </span>
                                        }
                                    </span>
                            }



                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                className={styles.inputPWZone}
                                placeholder="????????????"
                            />

                            {
                                !pwd &&

                                <div><br /></div>
                            }

                            {
                                pwd && !validPwd

                                &&

                                <span className={styles.messageInvalid}>
                                    <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                    ?????????, ??????, ??????????????? ??????????????? ?????????.
                                </span>
                            }

                            {
                                validPwd

                                &&

                                <span className={styles.messageInvalid}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.iconValid} />
                                    ?????? ????????? ???????????? ?????????.
                                </span>
                            }



                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                className={styles.inputPWZone}
                                placeholder="???????????? ??????"
                            />

                            {
                                !matchPwd

                                &&

                                <div><br /></div>
                            }

                            {
                                matchPwd && !validMatch

                                &&

                                <span className={styles.messageInvalid}>
                                    <FontAwesomeIcon icon={faTimes} className={styles.iconInvalid} />
                                    ??????????????? ???????????? ????????????.<br />
                                </span>
                            }

                            {
                                validPwd && validMatch && matchPwd

                                &&

                                <span className={styles.messageInvalid}>
                                    <FontAwesomeIcon icon={faCheck} className={styles.iconValid} />
                                    ??????????????? ???????????????.<br />
                                </span>
                            }



                            <span className={styles.infoType}>
                                ??????
                            </span>

                            <button type="button" className={gender === "male" ? styles.genderButtonOn : styles.genderButtonOff} onClick={() => setGender("male")}>
                                ???
                            </button>
                            <button type="button" className={gender === "female" ? styles.genderButtonOn : styles.genderButtonOff} onClick={() => setGender("female")}>
                                ???
                            </button>
                            <br /><br />



                            <span className={styles.infoType}>
                                ????????????
                            </span>

                            <span className={styles.birthInputZone}>
                                <input type="date" value={birth || current} onChange={(event) => setBirth(event.target.value)} required />
                            </span>



                            <button
                                disabled={!validName || !validPwd || !validMatch || !notDuplicate ? true : false}
                                className={styles.registerButton}>
                                ????????????
                            </button>

                            <div
                                className={styles.registerCancelButton}
                                onClick={() => {
                                    navigate("/login");
                                }}>
                                ???????????? ??????
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Register;