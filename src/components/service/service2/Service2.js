import styles from './Service2.module.css';

import Brands from './Brands';
import Categories from '../Categories';
import Intro from '../../Intro';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



let jsonArr = [];

function Service2() {
    const navigate = useNavigate();

    const [sel101, setSel101] = useState(0);
    const [sel102, setSel102] = useState(0);
    const [sel103, setSel103] = useState(0);
    const [sel104, setSel104] = useState(0);
    const [sel105, setSel105] = useState(0);
    const [sel106, setSel106] = useState(0);

    const [sel201, setSel201] = useState(0);
    const [sel202, setSel202] = useState(0);
    const [sel203, setSel203] = useState(0);
    const [sel204, setSel204] = useState(0);
    const [sel205, setSel205] = useState(0);
    const [sel206, setSel206] = useState(0);
    const [sel207, setSel207] = useState(0);
    const [sel208, setSel208] = useState(0);
    const [sel209, setSel209] = useState(0);
    const [sel210, setSel210] = useState(0);
    const [sel211, setSel211] = useState(0);
    const [sel212, setSel212] = useState(0);

    const [sel301, setSel301] = useState(0);
    const [sel302, setSel302] = useState(0);
    const [sel303, setSel303] = useState(0);
    const [sel304, setSel304] = useState(0);
    const [sel305, setSel305] = useState(0);
    const [sel306, setSel306] = useState(0);
    const [sel307, setSel307] = useState(0);
    const [sel308, setSel308] = useState(0);
    const [sel309, setSel309] = useState(0);
    const [sel310, setSel310] = useState(0);
    const [sel311, setSel311] = useState(0);
    const [sel312, setSel312] = useState(0);
    const [sel313, setSel313] = useState(0);

    const [sel401, setSel401] = useState(0);
    const [sel402, setSel402] = useState(0);
    const [sel403, setSel403] = useState(0);
    const [sel404, setSel404] = useState(0);
    const [sel405, setSel405] = useState(0);

    const [sel501, setSel501] = useState(0);
    const [sel502, setSel502] = useState(0);
    const [sel503, setSel503] = useState(0);
    const [sel504, setSel504] = useState(0);
    const [sel505, setSel505] = useState(0);
    const [sel506, setSel506] = useState(0);
    const [sel507, setSel507] = useState(0);
    const [sel508, setSel508] = useState(0);
    const [sel509, setSel509] = useState(0);
    const [sel510, setSel510] = useState(0);
    const [sel511, setSel511] = useState(0);

    const [sel601, setSel601] = useState(0);
    const [sel602, setSel602] = useState(0);
    const [sel603, setSel603] = useState(0);
    const [sel604, setSel604] = useState(0);
    const [sel605, setSel605] = useState(0);
    const [sel606, setSel606] = useState(0);

    const [sel701, setSel701] = useState(0);
    const [sel702, setSel702] = useState(0);
    const [sel703, setSel703] = useState(0);
    const [sel704, setSel704] = useState(0);
    const [sel705, setSel705] = useState(0);
    const [sel706, setSel706] = useState(0);
    const [sel707, setSel707] = useState(0);
    const [sel708, setSel708] = useState(0);
    const [sel709, setSel709] = useState(0);

    const [sel801, setSel801] = useState(0);
    const [sel802, setSel802] = useState(0);
    const [sel803, setSel803] = useState(0);
    const [sel804, setSel804] = useState(0);
    const [sel805, setSel805] = useState(0);
    const [sel806, setSel806] = useState(0);
    const [sel807, setSel807] = useState(0);
    const [sel808, setSel808] = useState(0);
    const [sel809, setSel809] = useState(0);
    const [sel810, setSel810] = useState(0);
    const [sel811, setSel811] = useState(0);
    const [sel812, setSel812] = useState(0);
    const [sel813, setSel813] = useState(0);
    const [sel814, setSel814] = useState(0);
    const [sel815, setSel815] = useState(0);
    const [sel816, setSel816] = useState(0);

    const [sel901, setSel901] = useState(0);
    const [sel902, setSel902] = useState(0);
    const [sel903, setSel903] = useState(0);

    const [sel1001, setSel1001] = useState(0);
    const [sel1002, setSel1002] = useState(0);
    const [sel1003, setSel1003] = useState(0);
    const [sel1004, setSel1004] = useState(0);
    const [sel1005, setSel1005] = useState(0);
    const [sel1006, setSel1006] = useState(0);
    const [sel1007, setSel1007] = useState(0);
    const [sel1008, setSel1008] = useState(0);
    const [sel1009, setSel1009] = useState(0);
    const [sel1010, setSel1010] = useState(0);
    const [sel1011, setSel1011] = useState(0);
    const [sel1012, setSel1012] = useState(0);
    const [sel1013, setSel1013] = useState(0);
    const [sel1014, setSel1014] = useState(0);
    const [sel1015, setSel1015] = useState(0);
    const [sel1016, setSel1016] = useState(0);
    const [sel1017, setSel1017] = useState(0);
    const [sel1018, setSel1018] = useState(0);
    const [sel1019, setSel1019] = useState(0);
    const [sel1020, setSel1020] = useState(0);
    const [sel1021, setSel1021] = useState(0);

    const [sel1101, setSel1101] = useState(0);
    const [sel1102, setSel1102] = useState(0);
    const [sel1103, setSel1103] = useState(0);

    const [sel1201, setSel1201] = useState(0);
    const [sel1202, setSel1202] = useState(0);
    const [sel1203, setSel1203] = useState(0);
    const [sel1204, setSel1204] = useState(0);
    const [sel1205, setSel1205] = useState(0);
    const [sel1206, setSel1206] = useState(0);
    const [sel1207, setSel1207] = useState(0);
    const [sel1208, setSel1208] = useState(0);
    const [sel1209, setSel1209] = useState(0);
    const [sel1210, setSel1210] = useState(0);
    const [sel1211, setSel1211] = useState(0);
    const [sel1212, setSel1212] = useState(0);
    const [sel1213, setSel1213] = useState(0);
    const [sel1214, setSel1214] = useState(0);
    const [sel1215, setSel1215] = useState(0);
    const [sel1216, setSel1216] = useState(0);
    const [sel1217, setSel1217] = useState(0);
    const [sel1218, setSel1218] = useState(0);
    const [sel1219, setSel1219] = useState(0);

    const [sel1301, setSel1301] = useState(0);
    const [sel1302, setSel1302] = useState(0);
    const [sel1303, setSel1303] = useState(0);
    const [sel1304, setSel1304] = useState(0);
    const [sel1305, setSel1305] = useState(0);
    const [sel1306, setSel1306] = useState(0);
    const [sel1307, setSel1307] = useState(0);
    const [sel1308, setSel1308] = useState(0);
    const [sel1309, setSel1309] = useState(0);

    const [sel1401, setSel1401] = useState(0);
    const [sel1402, setSel1402] = useState(0);
    const [sel1403, setSel1403] = useState(0);
    const [sel1404, setSel1404] = useState(0);
    const [sel1405, setSel1405] = useState(0);

    const [sel1501, setSel1501] = useState(0);
    const [sel1502, setSel1502] = useState(0);
    const [sel1503, setSel1503] = useState(0);
    const [sel1504, setSel1504] = useState(0);
    const [sel1505, setSel1505] = useState(0);
    const [sel1506, setSel1506] = useState(0);
    const [sel1507, setSel1507] = useState(0);
    const [sel1508, setSel1508] = useState(0);
    const [sel1509, setSel1509] = useState(0);
    const [sel1510, setSel1510] = useState(0);
    const [sel1511, setSel1511] = useState(0);
    const [sel1512, setSel1512] = useState(0);
    const [sel1513, setSel1513] = useState(0);
    const [sel1514, setSel1514] = useState(0);
    const [sel1515, setSel1515] = useState(0);
    const [sel1516, setSel1516] = useState(0);
    const [sel1517, setSel1517] = useState(0);
    const [sel1518, setSel1518] = useState(0);
    const [sel1519, setSel1519] = useState(0);
    const [sel1520, setSel1520] = useState(0);




    return (
        <div>
            <Intro mainText="?????? ?????? ??????" subText="???????????? ????????? ??????????????????!" />
            <br /><br /><br />

            <div></div>

            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Transportation"
                    iconName="category_transportation"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="??????" brandNameEng="transport_bus" setSel={setSel101} />
                    <Brands brandNameKor="?????????" brandNameEng="transport_subway" setSel={setSel102} />
                    <Brands brandNameKor="??????" brandNameEng="transport_taxi" setSel={setSel103} />
                    <Brands brandNameKor="?????????" brandNameEng="transport_korail" setSel={setSel104} />
                    <Brands brandNameKor="SRT" brandNameEng="transport_srt" setSel={setSel105} />
                    <Brands brandNameKor="????????????????????????" brandNameEng="transport_arex" setSel={setSel106} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Communication"
                    iconName="category_communication"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="SK?????????" brandNameEng="communication_skt" setSel={setSel201} />
                    <Brands brandNameKor="KT" brandNameEng="communication_kt" setSel={setSel202} />
                    <Brands brandNameKor="LG????????????" brandNameEng="communication_lgu" setSel={setSel203} />
                    <Brands brandNameKor="SKT ?????????" brandNameEng="communication_sktinternet" setSel={setSel204} />
                    <Brands brandNameKor="KT olleh ?????????" brandNameEng="communication_ktinternet" setSel={setSel205} />
                    <Brands brandNameKor="LG U+ ?????????" brandNameEng="communication_lguinternet" setSel={setSel206} />
                    <Brands brandNameKor="SKT IPTV" brandNameEng="communication_sktiptv" setSel={setSel207} />
                    <Brands brandNameKor="KT IP-TV" brandNameEng="communication_ktiptv" setSel={setSel208} />
                    <Brands brandNameKor="LG U+ IPTV" brandNameEng="communication_lguiptv" setSel={setSel209} />
                    <Brands brandNameKor="SKT ???????????????" brandNameEng="communication_sktintphone" setSel={setSel210} />
                    <Brands brandNameKor="KT ???????????????" brandNameEng="communication_ktintphone" setSel={setSel211} />
                    <Brands brandNameKor="LG U+ ???????????????" brandNameEng="communication_lguintphone" setSel={setSel212} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Mart"
                    iconName="category_mart"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="?????????" brandNameEng="mart_emart" setSel={setSel301} />
                    <Brands brandNameKor="????????????" brandNameEng="mart_homeplus" setSel={setSel302} />
                    <Brands brandNameKor="????????????" brandNameEng="mart_lottemart" setSel={setSel303} />
                    <Brands brandNameKor="?????????????????????" brandNameEng="mart_nhhanaro" setSel={setSel304} />
                    <Brands brandNameKor="????????? ???????????????" brandNameEng="mart_emarttraders" setSel={setSel305} />
                    <Brands brandNameKor="VIC ??????" brandNameEng="mart_vicmarket" setSel={setSel306} />
                    <Brands brandNameKor="???????????????" brandNameEng="mart_hanaroclub" setSel={setSel307} />
                    <Brands brandNameKor="????????????" brandNameEng="mart_costco" setSel={setSel308} />
                    <Brands brandNameKor="???????????????????????????" brandNameEng="mart_homeplusexpress" setSel={setSel309} />
                    <Brands brandNameKor="????????? ???????????????" brandNameEng="mart_emarteveryday" setSel={setSel310} />
                    <Brands brandNameKor="GS??????" brandNameEng="mart_gsmart" setSel={setSel311} />
                    <Brands brandNameKor="????????????" brandNameEng="mart_lottesuper" setSel={setSel312} />
                    <Brands brandNameKor="GS THE FRESH" brandNameEng="mart_gsthefresh" setSel={setSel313} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="?????????"
                    categoryNameEng="Convenience Store"
                    iconName="category_convstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS25" brandNameEng="convstore_gs25" setSel={setSel401} />
                    <Brands brandNameKor="CU" brandNameEng="convstore_cu" setSel={setSel402} />
                    <Brands brandNameKor="???????????????" brandNameEng="convstore_seveneleven" setSel={setSel403} />
                    <Brands brandNameKor="????????????" brandNameEng="convstore_ministop" setSel={setSel404} />
                    <Brands brandNameKor="?????????24" brandNameEng="convstore_emart24" setSel={setSel405} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Movies"
                    iconName="category_movies"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="CGV" brandNameEng="movies_cgv" setSel={setSel501} />
                    <Brands brandNameKor="???????????????" brandNameEng="movies_lottecinema" setSel={setSel502} />
                    <Brands brandNameKor="????????????" brandNameEng="movies_megabox" setSel={setSel503} />
                    <Brands brandNameKor="CGV ?????????" brandNameEng="movies_cgvonline" setSel={setSel504} />
                    <Brands brandNameKor="??????????????? ?????????" brandNameEng="movies_lottecinemaonline" setSel={setSel505} />
                    <Brands brandNameKor="???????????? ?????????" brandNameEng="movies_megaboxonline" setSel={setSel506} />
                    <Brands brandNameKor="???????????? ??????" brandNameEng="movies_ticketlinkmovie" setSel={setSel507} />
                    <Brands brandNameKor="???????????? ??????" brandNameEng="movies_interparkmovie" setSel={setSel508} />
                    <Brands brandNameKor="YES24 ??????" brandNameEng="movies_yes24movie" setSel={setSel509} />
                    <Brands brandNameKor="???????????????" brandNameEng="movies_navermovie" setSel={setSel510} />
                    <Brands brandNameKor="????????????" brandNameEng="movies_maxmovie" setSel={setSel511} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????????????????"
                    categoryNameEng="Entertainment"
                    iconName="category_entertainment"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="????????????" brandNameEng="entertainment_netflix" setSel={setSel601} />
                    <Brands brandNameKor="????????? ????????????" brandNameEng="entertainment_youtubepremium" setSel={setSel602} />
                    <Brands brandNameKor="??????" brandNameEng="entertainment_watcha" setSel={setSel603} />
                    <Brands brandNameKor="?????????" brandNameEng="entertainment_wavve" setSel={setSel604} />
                    <Brands brandNameKor="??????" brandNameEng="entertainment_melon" setSel={setSel605} />
                    <Brands brandNameKor="genie" brandNameEng="entertainment_genie" setSel={setSel606} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="?????????"
                    categoryNameEng="Department Store"
                    iconName="category_deptstore"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="??????????????????" brandNameEng="deptstore_shinsegaedept" setSel={setSel701} />
                    <Brands brandNameKor="???????????????" brandNameEng="deptstore_lottedept" setSel={setSel702} />
                    <Brands brandNameKor="???????????????" brandNameEng="deptstore_hyundaidept" setSel={setSel703} />
                    <Brands brandNameKor="???????????? ?????????" brandNameEng="deptstore_galleriadept" setSel={setSel704} />
                    <Brands brandNameKor="AK????????? ?????????" brandNameEng="deptstore_akplazadept" setSel={setSel705} />
                    <Brands brandNameKor="??????????????????" brandNameEng="deptstore_lotteyoungplaza" setSel={setSel706} />
                    <Brands brandNameKor="??????????????? U-PLEX" brandNameEng="deptstore_hyundaiuplex" setSel={setSel707} />
                    <Brands brandNameKor="??????????????????" brandNameEng="deptstore_dcubedept" setSel={setSel708} />
                    <Brands brandNameKor="??????????????????" brandNameEng="deptstore_newcoredept" setSel={setSel709} />

                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????????????????"
                    categoryNameEng="Online Shopping"
                    iconName="category_onlineshopping"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="11??????" brandNameEng="onlineshopping_11st" setSel={setSel801} />
                    <Brands brandNameKor="G??????" brandNameEng="onlineshopping_gmarket" setSel={setSel802} />
                    <Brands brandNameKor="??????" brandNameEng="onlineshopping_auction" setSel={setSel803} />
                    <Brands brandNameKor="???????????????" brandNameEng="onlineshopping_navershopping" setSel={setSel804} />
                    <Brands brandNameKor="????????????" brandNameEng="onlineshopping_interpark" setSel={setSel805} />
                    <Brands brandNameKor="GS SHOP" brandNameEng="onlineshopping_gsshop" setSel={setSel806} />
                    <Brands brandNameKor="????????????" brandNameEng="onlineshopping_lottecom" setSel={setSel807} />
                    <Brands brandNameKor="???????????????" brandNameEng="onlineshopping_lotteimall" setSel={setSel808} />
                    <Brands brandNameKor="SSG??????" brandNameEng="onlineshopping_ssgcom" setSel={setSel809} />
                    <Brands brandNameKor="????????????" brandNameEng="onlineshopping_shinsegaemall" setSel={setSel810} />
                    <Brands brandNameKor="AK???" brandNameEng="onlineshopping_akmall" setSel={setSel811} />
                    <Brands brandNameKor="????????????" brandNameEng="onlineshopping_emartmall" setSel={setSel812} />
                    <Brands brandNameKor="??????Hmall" brandNameEng="onlineshopping_hyundaihmall" setSel={setSel813} />
                    <Brands brandNameKor="??????" brandNameEng="onlineshopping_coupang" setSel={setSel814} />
                    <Brands brandNameKor="?????????" brandNameEng="onlineshopping_wemakeprice" setSel={setSel815} />
                    <Brands brandNameKor="??????" brandNameEng="onlineshopping_tmon" setSel={setSel816} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="????????????"
                    categoryNameEng="Easy Pay"
                    iconName="category_easypay"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="???????????????" brandNameEng="easypay_naverpay" setSel={setSel901} />
                    <Brands brandNameKor="???????????????" brandNameEng="easypay_kakaopay" setSel={setSel902} />
                    <Brands brandNameKor="????????????" brandNameEng="easypay_samsungpay" setSel={setSel903} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????/????????????"
                    categoryNameEng="Cafe/Bakery"
                    iconName="category_cafebakery"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_starbucks" setSel={setSel1001} />
                    <Brands brandNameKor="???????????? APP ???????????????" brandNameEng="cafebakery_starbuckssirenorder" setSel={setSel1002} />
                    <Brands brandNameKor="??????????????????" brandNameEng="cafebakery_twosomeplace" setSel={setSel1003} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_ediyacoffee" setSel={setSel1004} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_hollyscoffee" setSel={setSel1005} />
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_cafebene" setSel={setSel1006} />
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_tomntoms" setSel={setSel1007} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_angelinus" setSel={setSel1008} />
                    <Brands brandNameKor="??????" brandNameEng="cafebakery_gongcha" setSel={setSel1009} />
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_passcucci" setSel={setSel1010} />
                    <Brands brandNameKor="?????????" brandNameEng="cafebakery_coffeebean" setSel={setSel1011} />
                    <Brands brandNameKor="??? ??????" brandNameEng="cafebakery_paulbassett" setSel={setSel1012} />
                    <Brands brandNameKor="?????????????????? 31" brandNameEng="cafebakery_baskinrobbins" setSel={setSel1013} />
                    <Brands brandNameKor="?????????" brandNameEng="cafebakery_natuur" setSel={setSel1014} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_dunkindonuts" setSel={setSel1015} />
                    <Brands brandNameKor="??????????????????" brandNameEng="cafebakery_krispykreme" setSel={setSel1016} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_misterdonut" setSel={setSel1017} />
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_smoothieking" setSel={setSel1018} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_parisbaguette" setSel={setSel1019} />
                    <Brands brandNameKor="????????????" brandNameEng="cafebakery_touslesjours" setSel={setSel1020} />
                    <Brands brandNameKor="???????????????" brandNameEng="cafebakery_pariscroissant" setSel={setSel1021} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Beauty"
                    iconName="category_beauty"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="????????????" brandNameEng="beauty_oliveyoung" setSel={setSel1101} />
                    <Brands brandNameKor="????????????" brandNameEng="beauty_lalavla" setSel={setSel1102} />
                    <Brands brandNameKor="??????" brandNameEng="beauty_lohbs" setSel={setSel1103} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Dining"
                    iconName="category_dining"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="??????????????????????????????" brandNameEng="dining_outback" setSel={setSel1201} />
                    <Brands brandNameKor="T.G.I.F" brandNameEng="dining_tgif" setSel={setSel1202} />
                    <Brands brandNameKor="??????????????????" brandNameEng="dining_sevensprings" setSel={setSel1203} />
                    <Brands brandNameKor="VIPS" brandNameEng="dining_vips" setSel={setSel1204} />
                    <Brands brandNameKor="?????????" brandNameEng="dining_ashely" setSel={setSel1205} />
                    <Brands brandNameKor="???????????????" brandNameEng="dining_madforgarlic" setSel={setSel1206} />
                    <Brands brandNameKor="????????????" brandNameEng="dining_mcdonalds" setSel={setSel1207} />
                    <Brands brandNameKor="?????????" brandNameEng="dining_burgerking" setSel={setSel1208} />
                    <Brands brandNameKor="????????????" brandNameEng="dining_lotteria" setSel={setSel1209} />
                    <Brands brandNameKor="KFC" brandNameEng="dining_kfc" setSel={setSel1210} />
                    <Brands brandNameKor="????????????" brandNameEng="dining_subway" setSel={setSel1211} />
                    <Brands brandNameKor="??????????????????" brandNameEng="dining_innoutburger" setSel={setSel1212} />
                    <Brands brandNameKor="??????????????????" brandNameEng="dining_nobrandburger" setSel={setSel1213} />
                    <Brands brandNameKor="????????????" brandNameEng="dining_momstouch" setSel={setSel1214} />
                    <Brands brandNameKor="????????????" brandNameEng="dining_goobne" setSel={setSel1215} />
                    <Brands brandNameKor="????????? ??????" brandNameEng="dining_dominos" setSel={setSel1216} />
                    <Brands brandNameKor="???????????????" brandNameEng="dining_misterpizza" setSel={setSel1217} />
                    <Brands brandNameKor="?????????" brandNameEng="dining_pizzahut" setSel={setSel1218} />
                    <Brands brandNameKor="??????????????????" brandNameEng="dining_papajohns" setSel={setSel1219} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Books"
                    iconName="category_books"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="????????????" brandNameEng="books_kyobobooks" setSel={setSel1301} />
                    <Brands brandNameKor="??????????????????" brandNameEng="books_bandinlunis" setSel={setSel1302} />
                    <Brands brandNameKor="????????????" brandNameEng="books_ypbooks" setSel={setSel1303} />
                    <Brands brandNameKor="????????? ????????????" brandNameEng="books_kyobobooksint" setSel={setSel1304} />
                    <Brands brandNameKor="?????????????????? ?????????" brandNameEng="books_bandinlunisonline" setSel={setSel1305} />
                    <Brands brandNameKor="????????? ????????????" brandNameEng="books_ypbooksint" setSel={setSel1306} />
                    <Brands brandNameKor="YES24 ??????" brandNameEng="books_yes24books" setSel={setSel1307} />
                    <Brands brandNameKor="???????????? ??????" brandNameEng="books_interparkbooks" setSel={setSel1308} />
                    <Brands brandNameKor="?????????" brandNameEng="books_aladin" setSel={setSel1309} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="????????????"
                    categoryNameEng="Theme Park"
                    iconName="category_themepark"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="????????????" brandNameEng="themepark_lotteworld" setSel={setSel1401} />
                    <Brands brandNameKor="????????????" brandNameEng="themepark_everland" setSel={setSel1402} />
                    <Brands brandNameKor="????????????" brandNameEng="themepark_seoulland" setSel={setSel1403} />
                    <Brands brandNameKor="????????????" brandNameEng="themepark_kjworld" setSel={setSel1404} />
                    <Brands brandNameKor="???????????? ??????" brandNameEng="themepark_carribeanbay" setSel={setSel1405} />
                </div>
            </details>



            <details className={styles.detailsZone}>
                <Categories
                    categoryNameKor="??????"
                    categoryNameEng="Fuel"
                    iconName="category_fuel"
                />

                <div className={styles.serviceRow}>
                    <Brands brandNameKor="GS????????? ?????????" brandNameEng="fuel_gsgas" setSel={setSel1501} />
                    <Brands brandNameKor="SK????????? ?????????" brandNameEng="fuel_skgas" setSel={setSel1502} />
                    <Brands brandNameKor="?????????????????? ?????????" brandNameEng="fuel_hobgas" setSel={setSel1503} />
                    <Brands brandNameKor="S-Oil ?????????" brandNameEng="fuel_soilgas" setSel={setSel1504} />
                    <Brands brandNameKor="GS????????? ??????" brandNameEng="fuel_gsdis" setSel={setSel1505} />
                    <Brands brandNameKor="SK????????? ??????" brandNameEng="fuel_skdis" setSel={setSel1506} />
                    <Brands brandNameKor="?????????????????? ??????" brandNameEng="fuel_hobdis" setSel={setSel1507} />
                    <Brands brandNameKor="S-Oil ??????" brandNameEng="fuel_soildis" setSel={setSel1508} />
                    <Brands brandNameKor="GS????????? LPG" brandNameEng="fuel_gslpg" setSel={setSel1509} />
                    <Brands brandNameKor="SK????????? LPG" brandNameEng="fuel_sklpg" setSel={setSel1510} />
                    <Brands brandNameKor="?????????????????? LPG" brandNameEng="fuel_hoblpg" setSel={setSel1511} />
                    <Brands brandNameKor="S-Oil LPG" brandNameEng="fuel_soillpg" setSel={setSel1512} />
                    <Brands brandNameKor="GS????????? ??????" brandNameEng="fuel_gspet" setSel={setSel1513} />
                    <Brands brandNameKor="SK????????? ??????" brandNameEng="fuel_skpet" setSel={setSel1514} />
                    <Brands brandNameKor="?????????????????? ??????" brandNameEng="fuel_hobpet" setSel={setSel1515} />
                    <Brands brandNameKor="S-Oil ??????" brandNameEng="fuel_soilpet" setSel={setSel1516} />
                    <Brands brandNameKor="?????? ?????????" brandNameEng="fuel_fuelgas" setSel={setSel1517} />
                    <Brands brandNameKor="?????? ??????" brandNameEng="fuel_fueldis" setSel={setSel1518} />
                    <Brands brandNameKor="?????? LPG" brandNameEng="fuel_fuellpg" setSel={setSel1519} />
                    <Brands brandNameKor="?????? ??????" brandNameEng="fuel_fuelpet" setSel={setSel1520} />
                </div>
            </details>
            <br /><br /><br />



            <div>
                <button className={styles.sendButton} onClick={() => {
                    navigate("analysis")
                }}>
                    ?????? ?????? ??????
                </button>
            </div>
            <br />

            <div>
                <button className={styles.toMainButton} onClick={() => {
                    navigate("/main");
                }}>
                    ??? ????????????
                </button>
            </div>
        </div >
    );
}

export default Service2;