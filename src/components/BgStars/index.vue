<template>
  <div class="bg">
    <div id="stars" />
    <div id="stars-one" />
    <div id="stars-two" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_mixins' as m;

.bg {
  @include m.full;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  z-index: 0;
}

#stars {
  width: 1px;
  height: 1px;
  opacity: 0.9;
  background: transparent;
  border-radius: 999px;
  box-shadow: 1248px 44px #fff, 1527px 77px #fff, 1142px 1766px #fff, 441px 1856px #fff, 773px 1076px #fff,
    1404px 728px #fff, 1732px 445px #fff, 83px 107px #fff, 1723px 1994px #fff, 1042px 1874px #fff, 125px 504px #fff,
    1795px 241px #fff, 1572px 1817px #fff, 1721px 835px #fff, 144px 1601px #fff, 3px 259px #fff, 151px 1480px #fff,
    631px 314px #fff, 603px 1675px #fff, 1106px 598px #fff, 400px 644px #fff, 1716px 428px #fff, 1878px 894px #fff,
    1259px 1980px #fff, 1103px 452px #fff, 1221px 622px #fff, 1881px 35px #fff, 299px 1978px #fff, 703px 1653px #fff,
    535px 876px #fff, 611px 762px #fff, 294px 53px #fff, 918px 1917px #fff, 509px 1600px #fff, 1694px 777px #fff,
    1309px 730px #fff, 1473px 1736px #fff, 1963px 767px #fff, 171px 1475px #fff, 974px 1008px #fff, 246px 753px #fff,
    921px 612px #fff, 1599px 1167px #fff, 863px 1276px #fff, 696px 689px #fff, 1083px 1169px #fff, 1085px 1290px #fff,
    1784px 582px #fff, 676px 362px #fff, 1703px 940px #fff, 30px 1179px #fff, 418px 965px #fff, 1631px 100px #fff,
    1069px 256px #fff, 1513px 1312px #fff, 1060px 1257px #fff, 133px 541px #fff, 1721px 332px #fff, 1295px 62px #fff,
    811px 1319px #fff, 154px 933px #fff, 260px 1395px #fff, 1252px 1148px #fff, 679px 286px #fff, 1637px 999px #fff,
    49px 1401px #fff, 764px 147px #fff, 884px 832px #fff, 234px 1616px #fff, 422px 158px #fff, 826px 1237px #fff,
    1003px 63px #fff, 1880px 1643px #fff, 1852px 179px #fff, 682px 851px #fff, 294px 624px #fff, 260px 514px #fff,
    1404px 1185px #fff, 585px 1938px #fff, 1251px 812px #fff, 553px 1656px #fff, 1206px 1658px #fff, 1661px 660px #fff,
    122px 182px #fff, 916px 417px #fff, 350px 358px #fff, 1465px 59px #fff, 1938px 91px #fff, 746px 1239px #fff,
    1282px 992px #fff, 666px 977px #fff, 1749px 1962px #fff, 1928px 1399px #fff, 502px 1999px #fff, 1878px 1741px #fff,
    1982px 947px #fff, 702px 1363px #fff, 346px 1804px #fff, 1012px 1309px #fff, 1959px 630px #fff, 678px 1438px #fff,
    1017px 641px #fff, 49px 945px #fff, 1251px 130px #fff, 574px 186px #fff, 1115px 1361px #fff, 1795px 1570px #fff,
    1994px 1122px #fff, 1134px 884px #fff, 739px 675px #fff, 1020px 1585px #fff, 540px 262px #fff, 898px 624px #fff,
    58px 1615px #fff, 886px 1704px #fff, 401px 572px #fff, 566px 1143px #fff, 1124px 172px #fff, 1717px 1697px #fff,
    1228px 1751px #fff, 304px 30px #fff, 135px 1030px #fff, 467px 150px #fff, 34px 1934px #fff, 1387px 194px #fff,
    60px 1676px #fff, 942px 525px #fff, 898px 426px #fff, 1635px 799px #fff, 259px 1120px #fff, 928px 367px #fff,
    563px 1617px #fff, 830px 1352px #fff, 780px 1515px #fff, 659px 1564px #fff, 1476px 182px #fff, 988px 1556px #fff,
    1504px 1165px #fff, 434px 1617px #fff, 51px 1525px #fff, 245px 117px #fff, 284px 994px #fff, 1919px 1235px #fff,
    1954px 824px #fff, 896px 1258px #fff, 388px 917px #fff, 752px 633px #fff, 1740px 1321px #fff, 1730px 424px #fff,
    416px 1835px #fff, 1476px 727px #fff, 795px 1265px #fff, 311px 35px #fff, 414px 1135px #fff, 270px 1560px #fff,
    1491px 1475px #fff, 544px 167px #fff, 641px 905px #fff, 4px 558px #fff, 938px 1768px #fff, 1392px 450px #fff,
    1540px 1258px #fff, 1637px 493px #fff, 1866px 780px #fff, 1503px 651px #fff, 1779px 172px #fff, 1383px 301px #fff,
    1435px 1511px #fff, 220px 1046px #fff, 1126px 259px #fff, 881px 676px #fff, 103px 1757px #fff, 1318px 1686px #fff,
    253px 440px #fff, 1648px 1000px #fff, 1190px 978px #fff, 1640px 1930px #fff, 1471px 1406px #fff, 1815px 1618px #fff,
    1915px 1504px #fff, 330px 35px #fff, 977px 591px #fff, 1750px 146px #fff, 958px 1120px #fff, 271px 612px #fff,
    722px 1198px #fff, 1988px 1623px #fff, 1415px 1531px #fff, 628px 1565px #fff, 1941px 1980px #fff, 1140px 9px #fff,
    1878px 1926px #fff, 305px 220px #fff, 1839px 406px #fff, 1620px 688px #fff, 1588px 1187px #fff, 745px 683px #fff,
    254px 1700px #fff, 260px 1526px #fff, 946px 1285px #fff, 890px 1926px #fff, 538px 518px #fff, 37px 1654px #fff,
    1791px 632px #fff, 309px 603px #fff, 979px 328px #fff, 999px 227px #fff, 1501px 205px #fff, 1192px 590px #fff,
    1211px 1030px #fff, 18px 30px #fff, 1577px 692px #fff, 1188px 413px #fff, 293px 461px #fff, 179px 368px #fff,
    736px 710px #fff, 1203px 1881px #fff, 1683px 1601px #fff, 1971px 493px #fff, 145px 1540px #fff, 1766px 1085px #fff,
    1123px 1327px #fff, 716px 1973px #fff, 240px 970px #fff, 79px 1387px #fff, 806px 404px #fff, 1662px 1781px #fff,
    716px 1613px #fff, 1320px 1310px #fff, 174px 43px #fff, 15px 1083px #fff, 410px 207px #fff, 102px 93px #fff,
    158px 1454px #fff, 1573px 20px #fff, 909px 1229px #fff, 1978px 259px #fff, 499px 1138px #fff, 1724px 1857px #fff,
    1668px 554px #fff, 422px 1396px #fff, 737px 548px #fff, 594px 1753px #fff, 22px 1009px #fff, 1525px 470px #fff,
    386px 181px #fff, 34px 886px #fff, 1226px 922px #fff, 1430px 1550px #fff, 1957px 1149px #fff, 153px 637px #fff,
    563px 209px #fff, 53px 1324px #fff, 1396px 1974px #fff, 1895px 330px #fff, 367px 1770px #fff, 665px 271px #fff,
    854px 207px #fff, 721px 1949px #fff, 182px 155px #fff, 861px 585px #fff, 1217px 528px #fff, 350px 1082px #fff,
    506px 89px #fff, 532px 1766px #fff, 23px 1070px #fff, 196px 1890px #fff, 1582px 140px #fff, 1525px 537px #fff,
    1384px 99px #fff, 900px 1945px #fff, 483px 1846px #fff, 1217px 283px #fff, 1234px 251px #fff, 1380px 202px #fff,
    1373px 1085px #fff, 1964px 803px #fff, 1682px 1749px #fff, 620px 475px #fff, 748px 941px #fff, 239px 477px #fff,
    978px 742px #fff, 1262px 1665px #fff, 1878px 909px #fff, 715px 433px #fff, 1240px 1525px #fff, 388px 836px #fff,
    1821px 872px #fff, 915px 154px #fff, 643px 682px #fff, 470px 394px #fff, 96px 1008px #fff, 992px 1800px #fff,
    1942px 802px #fff, 1016px 122px #fff, 75px 1561px #fff, 1611px 707px #fff, 1312px 1989px #fff, 408px 950px #fff,
    658px 1534px #fff, 812px 1054px #fff, 1158px 1780px #fff, 663px 1915px #fff, 70px 349px #fff, 783px 786px #fff,
    649px 1504px #fff, 354px 242px #fff, 1413px 1564px #fff, 1472px 979px #fff, 734px 255px #fff, 494px 1545px #fff,
    697px 301px #fff, 1706px 1901px #fff, 712px 101px #fff, 695px 1610px #fff, 1011px 1837px #fff, 1863px 1154px #fff,
    1377px 1097px #fff, 1192px 1408px #fff, 1823px 145px #fff, 1573px 1172px #fff, 1263px 181px #fff, 1147px 712px #fff,
    1632px 1665px #fff, 1675px 888px #fff, 1331px 442px #fff, 1013px 1928px #fff, 676px 1798px #fff, 1415px 315px #fff,
    1044px 1880px #fff, 639px 1343px #fff, 1143px 566px #fff, 1420px 1914px #fff, 978px 26px #fff, 1474px 28px #fff,
    1655px 1495px #fff, 815px 827px #fff, 1442px 659px #fff, 513px 471px #fff, 483px 219px #fff, 287px 1881px #fff,
    1581px 1691px #fff, 234px 116px #fff, 1380px 522px #fff, 1137px 1821px #fff, 280px 978px #fff, 1634px 487px #fff,
    1064px 1706px #fff, 537px 1250px #fff, 1634px 697px #fff, 961px 612px #fff, 1719px 1735px #fff, 1174px 1045px #fff,
    1922px 1193px #fff, 1883px 1908px #fff, 1322px 1787px #fff, 1346px 1122px #fff, 1967px 891px #fff, 530px 826px #fff,
    604px 141px #fff, 136px 1394px #fff, 1947px 677px #fff, 1177px 45px #fff, 1479px 1896px #fff, 1037px 917px #fff,
    1490px 482px #fff, 1846px 1869px #fff, 1249px 1110px #fff, 486px 484px #fff, 507px 611px #fff, 1860px 1743px #fff,
    334px 671px #fff, 727px 850px #fff, 689px 497px #fff, 1887px 1191px #fff, 1344px 878px #fff, 1652px 1140px #fff,
    220px 420px #fff, 993px 1154px #fff, 1289px 1168px #fff, 283px 1305px #fff, 31px 801px #fff, 244px 1375px #fff,
    1522px 240px #fff, 879px 45px #fff, 154px 523px #fff, 1241px 161px #fff, 1500px 1462px #fff, 1659px 757px #fff,
    1224px 1374px #fff, 348px 1360px #fff, 1299px 548px #fff, 802px 167px #fff, 1507px 1484px #fff, 602px 903px #fff,
    221px 140px #fff, 889px 1991px #fff, 1404px 856px #fff, 1966px 1914px #fff, 1722px 205px #fff, 1232px 490px #fff,
    1425px 1700px #fff, 795px 727px #fff, 1510px 1743px #fff, 1123px 58px #fff, 878px 117px #fff, 157px 576px #fff,
    1329px 1168px #fff, 1163px 171px #fff, 576px 1982px #fff, 219px 1711px #fff, 857px 1937px #fff, 265px 591px #fff,
    602px 1911px #fff, 566px 1267px #fff, 766px 722px #fff, 1546px 556px #fff, 1783px 1991px #fff, 80px 97px #fff,
    1322px 341px #fff, 1488px 193px #fff, 709px 1732px #fff, 333px 928px #fff, 1747px 625px #fff, 964px 365px #fff,
    567px 1008px #fff, 1526px 1215px #fff, 14px 1820px #fff, 125px 1554px #fff, 736px 1791px #fff, 721px 650px #fff,
    572px 916px #fff, 1246px 514px #fff, 1039px 1478px #fff, 457px 1483px #fff, 972px 1034px #fff, 1444px 1328px #fff,
    176px 20px #fff, 1505px 1414px #fff, 1953px 721px #fff, 1792px 1127px #fff, 1356px 352px #fff, 492px 307px #fff,
    350px 227px #fff, 806px 249px #fff, 1039px 239px #fff, 358px 163px #fff, 1100px 1427px #fff, 1874px 1817px #fff,
    168px 1813px #fff, 541px 720px #fff, 1558px 734px #fff, 1484px 472px #fff, 347px 1098px #fff, 26px 85px #fff,
    851px 878px #fff, 297px 752px #fff, 1076px 1172px #fff, 1726px 767px #fff, 883px 1004px #fff, 90px 1467px #fff,
    1229px 1660px #fff, 555px 1866px #fff, 1636px 1963px #fff, 1975px 1532px #fff, 832px 232px #fff, 674px 466px #fff,
    1832px 105px #fff, 431px 1643px #fff, 1844px 208px #fff, 1317px 401px #fff, 1639px 756px #fff, 1262px 1236px #fff,
    106px 1948px #fff, 1353px 1735px #fff, 1908px 35px #fff, 1863px 1237px #fff, 1046px 1053px #fff, 1415px 1187px #fff,
    1729px 1178px #fff, 1744px 1881px #fff, 1896px 885px #fff, 498px 287px #fff, 725px 727px #fff, 1077px 618px #fff,
    912px 1792px #fff, 202px 1700px #fff, 936px 1340px #fff, 1279px 1008px #fff, 53px 1818px #fff, 1673px 1378px #fff,
    566px 661px #fff, 9px 1321px #fff, 775px 1908px #fff, 1741px 683px #fff, 1253px 369px #fff, 101px 37px #fff,
    1377px 1206px #fff, 1892px 82px #fff, 375px 1289px #fff, 1212px 1275px #fff, 637px 1501px #fff, 1167px 449px #fff,
    471px 336px #fff, 112px 1659px #fff, 1327px 884px #fff, 1397px 1529px #fff, 1084px 481px #fff, 656px 519px #fff,
    1414px 469px #fff, 1123px 291px #fff, 691px 1509px #fff, 939px 1868px #fff, 498px 1735px #fff, 1233px 1880px #fff,
    124px 1094px #fff, 1905px 1861px #fff, 1355px 1281px #fff, 337px 1228px #fff, 502px 249px #fff, 1215px 1364px #fff,
    312px 726px #fff, 481px 67px #fff, 1251px 1518px #fff, 1495px 759px #fff, 949px 243px #fff, 1896px 319px #fff,
    136px 1439px #fff, 394px 174px #fff, 907px 100px #fff, 145px 718px #fff, 375px 299px #fff, 1950px 1186px #fff,
    1552px 1878px #fff, 616px 1287px #fff, 1130px 861px #fff, 1356px 99px #fff, 352px 224px #fff, 103px 1843px #fff,
    1207px 1334px #fff, 757px 1377px #fff, 388px 216px #fff, 343px 25px #fff, 66px 602px #fff, 30px 911px #fff,
    1979px 1589px #fff, 1398px 478px #fff, 1242px 382px #fff, 818px 245px #fff, 987px 402px #fff, 223px 461px #fff,
    1102px 1971px #fff, 716px 1261px #fff, 1778px 1894px #fff, 1070px 1822px #fff, 294px 931px #fff, 1292px 1381px #fff,
    834px 1851px #fff, 1406px 1076px #fff, 1786px 356px #fff, 386px 181px #fff, 311px 936px #fff, 1862px 453px #fff,
    204px 1225px #fff, 1711px 1891px #fff, 236px 457px #fff, 769px 1313px #fff, 682px 1039px #fff, 65px 1441px #fff,
    1975px 250px #fff, 1052px 1586px #fff, 684px 1088px #fff, 1840px 1914px #fff, 1206px 1683px #fff, 569px 1570px #fff,
    1503px 1911px #fff, 1315px 989px #fff, 817px 1719px #fff, 1444px 430px #fff, 1287px 1088px #fff, 483px 520px #fff,
    1113px 562px #fff, 1031px 418px #fff, 1800px 864px #fff, 496px 1945px #fff, 19px 213px #fff, 1820px 1974px #fff,
    1973px 173px #fff, 1383px 9px #fff, 668px 1624px #fff, 241px 1347px #fff, 1516px 558px #fff, 1305px 6px #fff,
    1926px 1182px #fff, 1280px 1549px #fff, 936px 776px #fff, 110px 1075px #fff, 1166px 1294px #fff, 1129px 884px #fff,
    112px 1142px #fff, 1708px 1921px #fff, 13px 669px #fff, 1200px 1908px #fff, 920px 1088px #fff, 508px 758px #fff,
    1190px 1307px #fff, 819px 184px #fff, 426px 1854px #fff, 1312px 1155px #fff, 398px 1922px #fff, 128px 407px #fff,
    1639px 40px #fff, 494px 1814px #fff, 494px 1369px #fff, 1553px 643px #fff, 1594px 1984px #fff, 820px 1105px #fff,
    1106px 100px #fff, 1907px 510px #fff, 1091px 243px #fff, 1676px 65px #fff, 761px 993px #fff, 245px 830px #fff,
    1245px 1332px #fff, 119px 352px #fff, 832px 748px #fff, 1688px 475px #fff, 815px 1203px #fff, 455px 765px #fff,
    542px 163px #fff, 16px 651px #fff, 843px 1941px #fff, 920px 1613px #fff, 1880px 788px #fff, 375px 1717px #fff,
    770px 632px #fff, 1053px 1694px #fff, 87px 303px #fff, 575px 1936px #fff, 189px 1587px #fff, 1475px 724px #fff,
    1925px 408px #fff, 817px 182px #fff, 626px 70px #fff, 1866px 1174px #fff, 926px 20px #fff, 8px 1242px #fff,
    1279px 1430px #fff, 416px 1249px #fff, 833px 1237px #fff, 1967px 1209px #fff, 853px 836px #fff, 981px 188px #fff,
    747px 1531px #fff, 1882px 156px #fff, 31px 1750px #fff, 1651px 769px #fff, 1549px 20px #fff, 421px 1719px #fff,
    1845px 1244px #fff, 1585px 1761px #fff, 1805px 352px #fff, 391px 1062px #fff, 74px 1748px #fff, 1703px 1989px #fff,
    510px 1175px #fff, 654px 288px #fff, 1981px 446px #fff, 1251px 854px #fff, 659px 1650px #fff, 1910px 1576px #fff,
    1099px 1724px #fff, 1911px 1490px #fff, 1437px 415px #fff, 45px 855px #fff, 591px 503px #fff, 104px 1314px #fff,
    140px 1622px #fff, 1965px 1956px #fff, 1184px 358px #fff, 4px 768px #fff, 1873px 1959px #fff, 1140px 1103px #fff,
    1123px 1437px #fff, 582px 1199px #fff, 1349px 1002px #fff, 200px 1057px #fff, 554px 50px #fff, 649px 347px #fff,
    1897px 598px #fff, 718px 377px #fff, 1342px 1807px #fff, 1891px 1172px #fff, 168px 439px #fff, 602px 1535px #fff,
    569px 1308px #fff, 1201px 1300px #fff, 980px 368px #fff, 1207px 493px #fff, 326px 1784px #fff;
  animation: animStar 300s ease-out infinite;
}

#stars-one {
  width: 2px;
  height: 2px;
  opacity: 0.8;
  border-radius: 999px;
  background: transparent;
  box-shadow: 1059px 683px #fff, 1491px 714px #fff, 1436px 1928px #fff, 872px 656px #fff, 725px 807px #fff,
    422px 1611px #fff, 184px 1445px #fff, 760px 1974px #fff, 1920px 363px #fff, 12px 111px #fff, 645px 1640px #fff,
    321px 1181px #fff, 240px 1267px #fff, 1491px 1852px #fff, 1060px 961px #fff, 974px 344px #fff, 1449px 1671px #fff,
    533px 243px #fff, 1369px 1116px #fff, 1197px 381px #fff, 565px 1940px #fff, 752px 328px #fff, 399px 201px #fff,
    1064px 1488px #fff, 664px 261px #fff, 271px 1854px #fff, 847px 1706px #fff, 437px 1251px #fff, 1881px 1919px #fff,
    404px 1784px #fff, 715px 542px #fff, 1341px 1509px #fff, 1409px 1514px #fff, 177px 1832px #fff, 1138px 86px #fff,
    1993px 1791px #fff, 1287px 1047px #fff, 1827px 1171px #fff, 1247px 1057px #fff, 970px 423px #fff, 300px 1848px #fff,
    816px 1677px #fff, 311px 431px #fff, 1322px 35px #fff, 869px 641px #fff, 1419px 1746px #fff, 768px 1553px #fff,
    29px 753px #fff, 204px 41px #fff, 1486px 1212px #fff, 1789px 1365px #fff, 683px 1373px #fff, 827px 569px #fff,
    417px 13px #fff, 577px 1432px #fff, 1632px 519px #fff, 1123px 418px #fff, 780px 792px #fff, 1257px 1870px #fff,
    1574px 1242px #fff, 619px 862px #fff, 141px 1960px #fff, 1183px 1171px #fff, 81px 793px #fff, 483px 1032px #fff,
    1527px 1722px #fff, 1596px 1058px #fff, 633px 1422px #fff, 375px 356px #fff, 1987px 1320px #fff, 1262px 767px #fff,
    839px 1052px #fff, 269px 1108px #fff, 1009px 1207px #fff, 517px 1192px #fff, 984px 1200px #fff, 1460px 369px #fff,
    78px 61px #fff, 585px 1199px #fff, 766px 1105px #fff, 1145px 231px #fff, 990px 1549px #fff, 1622px 255px #fff,
    762px 921px #fff, 1187px 278px #fff, 366px 1228px #fff, 1806px 1006px #fff, 179px 1962px #fff, 1375px 1661px #fff,
    526px 1111px #fff, 525px 898px #fff, 1324px 1170px #fff, 566px 79px #fff, 1074px 1164px #fff, 275px 519px #fff,
    1227px 1967px #fff, 571px 524px #fff, 174px 1370px #fff, 958px 1363px #fff, 364px 273px #fff, 1654px 341px #fff,
    1519px 1357px #fff, 1133px 627px #fff, 546px 44px #fff, 8px 1093px #fff, 1337px 1370px #fff, 1852px 1875px #fff,
    1584px 577px #fff, 1808px 1197px #fff, 1146px 1392px #fff, 1178px 211px #fff, 1734px 1433px #fff, 348px 1984px #fff,
    816px 396px #fff, 1713px 1832px #fff, 467px 693px #fff, 465px 1508px #fff, 188px 283px #fff, 1649px 207px #fff,
    1427px 1749px #fff, 354px 1344px #fff, 847px 440px #fff, 733px 1869px #fff, 1334px 665px #fff, 1612px 1709px #fff,
    1884px 183px #fff, 909px 1418px #fff, 1560px 1938px #fff, 737px 437px #fff, 150px 1116px #fff, 1269px 575px #fff,
    1280px 898px #fff, 1174px 1941px #fff, 1223px 569px #fff, 636px 137px #fff, 395px 140px #fff, 1488px 931px #fff,
    418px 760px #fff, 1717px 1438px #fff, 1466px 1094px #fff, 1256px 254px #fff, 1240px 1944px #fff, 1780px 1076px #fff,
    137px 1585px #fff, 990px 1380px #fff, 511px 1358px #fff, 936px 1327px #fff, 696px 1161px #fff, 1689px 1398px #fff,
    1612px 1860px #fff, 863px 117px #fff, 12px 811px #fff, 893px 1506px #fff, 302px 180px #fff, 59px 1720px #fff,
    1645px 1179px #fff, 831px 1143px #fff, 196px 524px #fff, 88px 230px #fff, 1330px 1049px #fff, 741px 1305px #fff,
    1687px 297px #fff, 1495px 1718px #fff, 95px 423px #fff, 1183px 1591px #fff, 1419px 1078px #fff, 1739px 486px #fff,
    1879px 1963px #fff, 679px 1047px #fff, 414px 269px #fff, 1465px 77px #fff, 1948px 14px #fff, 962px 721px #fff,
    45px 1040px #fff, 1367px 167px #fff, 1040px 1059px #fff, 1846px 1299px #fff, 1024px 1242px #fff, 1243px 1892px #fff,
    1261px 1256px #fff, 865px 1202px #fff, 861px 1312px #fff, 719px 1436px #fff, 739px 1327px #fff, 423px 480px #fff,
    1770px 704px #fff, 284px 655px #fff, 1625px 212px #fff, 962px 1379px #fff, 1163px 1999px #fff, 1040px 762px #fff,
    117px 1280px #fff, 1835px 571px #fff, 1991px 1099px #fff, 668px 40px #fff, 151px 998px #fff, 183px 1380px #fff,
    984px 845px #fff, 851px 755px #fff, 1350px 961px #fff;
  animation: animStar 350s linear infinite;
}

#stars-two {
  width: 4px;
  height: 4px;
  opacity: 0.7;
  border-radius: 999px;
  background: transparent;
  box-shadow: 1901px 443px #fff, 1084px 254px #fff, 229px 381px #fff, 341px 1654px #fff, 263px 1720px #fff,
    1173px 333px #fff, 961px 383px #fff, 696px 1294px #fff, 1052px 1332px #fff, 455px 1764px #fff, 99px 626px #fff,
    405px 1967px #fff, 128px 901px #fff, 1660px 1500px #fff, 174px 469px #fff, 1534px 1321px #fff, 423px 1532px #fff,
    708px 1647px #fff, 73px 261px #fff, 1940px 1663px #fff, 1095px 1614px #fff, 1756px 298px #fff, 1304px 1520px #fff,
    1004px 826px #fff, 1608px 1113px #fff, 1233px 1497px #fff, 1479px 1415px #fff, 894px 802px #fff, 1354px 1452px #fff,
    986px 703px #fff, 629px 1959px #fff, 17px 1419px #fff, 1062px 463px #fff, 1430px 196px #fff, 682px 719px #fff,
    1717px 1044px #fff, 282px 1261px #fff, 1579px 1484px #fff, 1461px 947px #fff, 92px 1276px #fff, 70px 947px #fff,
    943px 27px #fff, 1212px 249px #fff, 998px 715px #fff, 1042px 1239px #fff, 659px 742px #fff, 678px 229px #fff,
    566px 1704px #fff, 218px 1077px #fff, 506px 808px #fff, 230px 78px #fff, 1275px 1796px #fff, 1191px 975px #fff,
    1704px 1647px #fff, 567px 1721px #fff, 164px 668px #fff, 1709px 309px #fff, 1763px 503px #fff, 507px 1916px #fff,
    1599px 467px #fff, 703px 1331px #fff, 119px 901px #fff, 1989px 705px #fff, 1565px 172px #fff, 1042px 1145px #fff,
    1144px 1627px #fff, 1974px 56px #fff, 899px 671px #fff, 1471px 1051px #fff, 375px 138px #fff, 1227px 1496px #fff,
    836px 1305px #fff, 1052px 372px #fff, 835px 1452px #fff, 513px 250px #fff, 988px 1297px #fff, 1520px 32px #fff,
    62px 482px #fff, 162px 1993px #fff, 1380px 1331px #fff, 1882px 1082px #fff, 78px 41px #fff, 1345px 1679px #fff,
    33px 937px #fff, 673px 1263px #fff, 392px 188px #fff, 1549px 895px #fff, 978px 896px #fff, 996px 138px #fff,
    981px 68px #fff, 1674px 94px #fff, 1769px 1622px #fff, 1776px 907px #fff, 532px 746px #fff, 1334px 808px #fff,
    368px 363px #fff, 1355px 421px #fff, 824px 536px #fff, 1346px 1510px #fff, 978px 973px #fff;
  animation: animStar 400s linear infinite;
}
</style>
