import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import styles from "./Login.module.css";

const LOGIN_URL = "/auth/signin";

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/main";

    const userRef = useRef();
    // const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    // const [errMsg, setErrMsg]  = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    // useEffect(() => {
    //     setErrMsg("");
    // }, [user, pwd]);

    const [info, setInfo] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({
                    username: user,
                    password: pwd,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
            );
            // console.log(response?.data);
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser("");
            setPwd("");
            navigate(from, { replace: true } );
            // navigate('/main');
        } catch (err) {
            if (!err?.response) {
                alert("No Server Response");
            } else if (err.response?.status === 401) {
                alert("Wrong Username or Password");
            } else {
                alert("Login Failed");
            }
            // errRef.current.focus();
        }
    };

    // function handleChange(event) {
    //     event.preventDefault();
    //     setInfo((prev) => {
    //         return { ...prev, [event.target.name]: event.target.value }
    //     });
    // }



    // const handleClick = (event) => {
    //     event.preventDefault();
    //
    //     const option = {
    //         method: "POST",
    //         url: "http://localhost:8080/login",
    //         headers: {
    //             "Content-Type": "application/json; charset=UTF-8",
    //         },
    //         data: JSON.stringify(info),
    //     };
    //
    //     axios(option).then(({ data }) => {
    //         localStorage.setItem("accessToken", data.access_token);
    //         localStorage.setItem("refreshToken", data.refresh_token);
    //         setIsLogined(true);
    //
    //         return navigate("/main");
    //     })
    //         .catch((error) => {
    //             alert("???????????? ??????????????? ??????????????????");
    //             console.log(error);
    //
    //             return navigate("/login");
    //         })
    // };



    return (
        <div className={styles.container}>
            <div className={styles.loginZone}>
                <div className={styles.loginZoneLeft}>
                    <div>
                        ????????? ?????? ?????? ??????<br />
                        ?????? ?????? ?????????<br />
                        <img alt="home" className={styles.titleLogo} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_nomargin_white.png"} />
                    </div>

                    <img alt="home" className={styles.graphic} src={process.env.PUBLIC_URL + "/images/graphics/14.png"} />
                </div>



                <div className={styles.loginZoneRight}>
                    <div className={styles.mainTitle}>
                        login
                    </div>

                    <div className={styles.subTitle}>
                        Cardvisor??? ???????????? ???????????????!
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            placeholder="?????????"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            autoComplete="off"
                            spellCheck="false"
                            required
                            className={styles.inputIDZone}
                        />

                        <input
                            type="password"
                            id="password"
                            placeholder="????????????"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            autoComplete="off"
                            required
                            className={styles.inputPWZone}
                        />

                        <button
                            type="submit"
                            className={styles.loginButton}
                        >
                            ?????????
                        </button>
                    </form>

                    <div className={styles.registerZone}>
                        ?????? ????????? ???????????????? &nbsp;&nbsp;
                        <span
                            className={styles.registerButton}
                            onClick={() => {
                                navigate("/register");
                            }}
                        >
                            ???????????? ??????
                        </span>
                    </div>

                    <div className={styles.findPasswordZone}>
                        ??????????????? ???????????????? &nbsp;&nbsp;&nbsp;
                        <span
                            className={styles.findPasswordButton}
                            onClick={() => {
                                alert("?????????");
                            }}
                        >
                            ???????????? ??????
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
