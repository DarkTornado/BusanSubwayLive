var pos = [
[ //1호선
{x: 330, y: 2100, dir: 0, sta: '다대포해수욕장'},
{x: 270, y: 2100, dir: 1, sta: '다대포해수욕장'},
{x: 330, y: 2250, dir: 0, sta: '다대포항'},
{x: 270, y: 2250, dir: 1, sta: '다대포항'},
{x: 330, y: 2400, dir: 0, sta: '낫개'},
{x: 270, y: 2400, dir: 1, sta: '낫개'},
{x: 420, y: 2480, dir: 4, sta: '신장림'},
{x: 380, y: 2520, dir: 5, sta: '신장림'},
{x: 520, y: 2580, dir: 4, sta: '장림'},
{x: 480, y: 2620, dir: 5, sta: '장림'},
{x: 620, y: 2680, dir: 4, sta: '동매'},
{x: 580, y: 2720, dir: 5, sta: '동매'},
{x: 720, y: 2780, dir: 4, sta: '신평'},
{x: 680, y: 2820, dir: 5, sta: '신평'},
{x: 820, y: 2880, dir: 4, sta: '하단'},
{x: 780, y: 2920, dir: 5, sta: '하단'},
{x: 920, y: 2980, dir: 4, sta: '당리'},
{x: 880, y: 3020, dir: 5, sta: '당리'},
{x: 1020, y: 3080, dir: 4, sta: '사하'},
{x: 980, y: 3120, dir: 5, sta: '사하'},
{x: 1120, y: 3180, dir: 4, sta: '괴정'},
{x: 1080, y: 3220, dir: 5, sta: '괴정'},
{x: 1200, y: 3270, dir: 2, sta: '대티'},
{x: 1200, y: 3330, dir: 3, sta: '대티'},
{x: 1350, y: 3270, dir: 2, sta: '서대신'},
{x: 1350, y: 3330, dir: 3, sta: '서대신'},
{x: 1500, y: 3270, dir: 2, sta: '동대신'},
{x: 1500, y: 3330, dir: 3, sta: '동대신'},
{x: 1650, y: 3270, dir: 2, sta: '토성'},
{x: 1650, y: 3330, dir: 3, sta: '토성'},
{x: 1800, y: 3270, dir: 2, sta: '자갈치'},
{x: 1800, y: 3330, dir: 3, sta: '자갈치'},
{x: 1950, y: 3270, dir: 2, sta: '남포'},
{x: 1950, y: 3330, dir: 3, sta: '남포'},
{x: 2100, y: 3270, dir: 2, sta: '중앙'},
{x: 2100, y: 3330, dir: 3, sta: '중앙'},
{x: 2180, y: 3180, dir: 6, sta: '부산역'},
{x: 2220, y: 3220, dir: 7, sta: '부산역'},
{x: 2280, y: 3080, dir: 6, sta: '초량'},
{x: 2320, y: 3120, dir: 7, sta: '초량'},
{x: 2380, y: 2980, dir: 6, sta: '부산진'},
{x: 2420, y: 3020, dir: 7, sta: '부산진'},
{x: 2480, y: 2880, dir: 6, sta: '좌천'},
{x: 2520, y: 2920, dir: 7, sta: '좌천'},
{x: 2580, y: 2780, dir: 6, sta: '범일'},
{x: 2620, y: 2820, dir: 7, sta: '범일'},
{x: 2680, y: 2680, dir: 6, sta: '범내골'},
{x: 2720, y: 2720, dir: 7, sta: '범내골'},
{x: 2770, y: 2600, dir: 1, sta: '서면'},
{x: 2830, y: 2600, dir: 0, sta: '서면'},
{x: 2770, y: 2400, dir: 1, sta: '부전'},
{x: 2830, y: 2400, dir: 0, sta: '부전'},
{x: 2770, y: 2200, dir: 1, sta: '양정'},
{x: 2830, y: 2200, dir: 0, sta: '양정'},
{x: 2770, y: 2000, dir: 1, sta: '시청'},
{x: 2830, y: 2000, dir: 0, sta: '시청'},
{x: 2770, y: 1800, dir: 1, sta: '연산'},
{x: 2830, y: 1800, dir: 0, sta: '연산'},
{x: 2770, y: 1600, dir: 1, sta: '교대'},
{x: 2830, y: 1600, dir: 0, sta: '교대'},
{x: 2770, y: 1400, dir: 1, sta: '동래'},
{x: 2830, y: 1400, dir: 0, sta: '동래'},
{x: 2770, y: 1200, dir: 1, sta: '명륜'},
{x: 2830, y: 1200, dir: 0, sta: '명륜'},
{x: 2770, y: 1080, dir: 1, sta: '온천장'},
{x: 2830, y: 1080, dir: 0, sta: '온천장'},
{x: 2770, y: 960, dir: 1, sta: '부산대'},
{x: 2830, y: 960, dir: 0, sta: '부산대'},
{x: 2770, y: 840, dir: 1, sta: '장전'},
{x: 2830, y: 840, dir: 0, sta: '장전'},
{x: 2770, y: 720, dir: 1, sta: '구서'},
{x: 2830, y: 720, dir: 0, sta: '구서'},
{x: 2770, y: 600, dir: 1, sta: '두실'},
{x: 2830, y: 600, dir: 0, sta: '두실'},
{x: 2770, y: 480, dir: 1, sta: '남산'},
{x: 2830, y: 480, dir: 0, sta: '남산'},
{x: 2770, y: 360, dir: 1, sta: '범어사'},
{x: 2830, y: 360, dir: 0, sta: '범어사'},
{x: 2770, y: 240, dir: 1, sta: '노포'},
{x: 2830, y: 240, dir: 0, sta: '노포'}
],[ //2호선
{x: 4800, y: 1630, dir: 3, sta: '장산'},
{x: 4800, y: 1570, dir: 2, sta: '장산'},
{x: 4600, y: 1630, dir: 3, sta: '중동'},
{x: 4600, y: 1570, dir: 2, sta: '중동'},
{x: 4400, y: 1630, dir: 3, sta: '해운대'},
{x: 4400, y: 1570, dir: 2, sta: '해운대'},
{x: 4200, y: 1630, dir: 3, sta: '동백'},
{x: 4200, y: 1570, dir: 2, sta: '동백'},
{x: 3980, y: 1580, dir: 6, sta: '벡스코'},
{x: 4020, y: 1620, dir: 7, sta: '벡스코'},
{x: 3880, y: 1680, dir: 6, sta: '센텀시티'},
{x: 3920, y: 1720, dir: 7, sta: '센텀시티'},
{x: 3800, y: 1830, dir: 3, sta: '민락'},
{x: 3800, y: 1770, dir: 2, sta: '민락'},
{x: 3630, y: 1800, dir: 0, sta: '수영'},
{x: 3570, y: 1800, dir: 1, sta: '수영'},
{x: 3630, y: 1950, dir: 0, sta: '광안'},
{x: 3570, y: 1950, dir: 1, sta: '광안'},
{x: 3630, y: 2100, dir: 0, sta: '금련산'},
{x: 3570, y: 2100, dir: 1, sta: '금련산'},
{x: 3550, y: 2190, dir: 7, sta: '남천'},
{x: 3510, y: 2150, dir: 6, sta: '남천'},
{x: 3480, y: 2260, dir: 7, sta: '경성대·부경대'},
{x: 3440, y: 2220, dir: 6, sta: '경성대·부경대'},
{x: 3410, y: 2330, dir: 7, sta: '대연'},
{x: 3370, y: 2290, dir: 6, sta: '대연'},
{x: 3330, y: 2410, dir: 7, sta: '못골'},
{x: 3290, y: 2370, dir: 6, sta: '못골'},
{x: 3260, y: 2480, dir: 7, sta: '지게골'},
{x: 3220, y: 2440, dir: 6, sta: '지게골'},
{x: 3190, y: 2550, dir: 7, sta: '문현'},
{x: 3150, y: 2510, dir: 6, sta: '문현'},
{x: 3100, y: 2630, dir: 3, sta: '국제금융센터·부산은행'},
{x: 3100, y: 2570, dir: 2, sta: '국제금융센터·부산은행'},
{x: 2950, y: 2630, dir: 3, sta: '전포'},
{x: 2950, y: 2570, dir: 2, sta: '전포'},
{x: 2800, y: 2630, dir: 3, sta: '서면'},
{x: 2800, y: 2570, dir: 2, sta: '서면'},
{x: 2662, y: 2630, dir: 3, sta: '부암'},
{x: 2662, y: 2570, dir: 2, sta: '부암'},
{x: 2525, y: 2630, dir: 3, sta: '가야'},
{x: 2525, y: 2570, dir: 2, sta: '가야'},
{x: 2387, y: 2630, dir: 3, sta: '동의대'},
{x: 2387, y: 2570, dir: 2, sta: '동의대'},
{x: 2250, y: 2630, dir: 3, sta: '개금'},
{x: 2250, y: 2570, dir: 2, sta: '개금'},
{x: 2112, y: 2630, dir: 3, sta: '냉정'},
{x: 2112, y: 2570, dir: 2, sta: '냉정'},
{x: 1975, y: 2630, dir: 3, sta: '주례'},
{x: 1975, y: 2570, dir: 2, sta: '주례'},
{x: 1837, y: 2630, dir: 3, sta: '감전'},
{x: 1837, y: 2570, dir: 2, sta: '감전'},
{x: 1680, y: 2620, dir: 5, sta: '사상'},
{x: 1720, y: 2580, dir: 4, sta: '사상'},
{x: 1555, y: 2495, dir: 5, sta: '덕포'},
{x: 1595, y: 2455, dir: 4, sta: '덕포'},
{x: 1430, y: 2370, dir: 5, sta: '모덕'},
{x: 1470, y: 2330, dir: 4, sta: '모덕'},
{x: 1305, y: 2245, dir: 5, sta: '모라'},
{x: 1345, y: 2205, dir: 4, sta: '모라'},
{x: 1170, y: 2100, dir: 1, sta: '구남'},
{x: 1230, y: 2100, dir: 0, sta: '구남'},
{x: 1170, y: 1950, dir: 1, sta: '구명'},
{x: 1230, y: 1950, dir: 0, sta: '구명'},
{x: 1170, y: 1800, dir: 1, sta: '덕천'},
{x: 1230, y: 1800, dir: 0, sta: '덕천'},
{x: 1170, y: 1650, dir: 1, sta: '수정'},
{x: 1230, y: 1650, dir: 0, sta: '수정'},
{x: 1170, y: 1500, dir: 1, sta: '화명'},
{x: 1230, y: 1500, dir: 0, sta: '화명'},
{x: 1170, y: 1350, dir: 1, sta: '율리'},
{x: 1230, y: 1350, dir: 0, sta: '율리'},
{x: 1170, y: 1200, dir: 1, sta: '동원'},
{x: 1230, y: 1200, dir: 0, sta: '동원'},
{x: 1170, y: 1050, dir: 1, sta: '금곡'},
{x: 1230, y: 1050, dir: 0, sta: '금곡'},
{x: 1170, y: 900, dir: 1, sta: '호포'},
{x: 1230, y: 900, dir: 0, sta: '호포'},
{x: 1170, y: 750, dir: 1, sta: '증산'},
{x: 1230, y: 750, dir: 0, sta: '증산'},
{x: 1170, y: 600, dir: 1, sta: '부산대양산캠퍼스'},
{x: 1230, y: 600, dir: 0, sta: '부산대양산캠퍼스'},
{x: 1170, y: 450, dir: 1, sta: '남양산'},
{x: 1230, y: 450, dir: 0, sta: '남양산'},
{x: 1170, y: 300, dir: 1, sta: '양산'},
{x: 1230, y: 300, dir: 0, sta: '양산'}
],[ //3호선
{x: 3600, y: 1830, dir: 3, sta: '수영'},
{x: 3600, y: 1770, dir: 2, sta: '수영'},
{x: 3400, y: 1830, dir: 3, sta: '망미'},
{x: 3400, y: 1770, dir: 2, sta: '망미'},
{x: 3200, y: 1830, dir: 3, sta: '배산'},
{x: 3200, y: 1770, dir: 2, sta: '배산'},
{x: 3000, y: 1830, dir: 3, sta: '물만골'},
{x: 3000, y: 1770, dir: 2, sta: '물만골'},
{x: 2800, y: 1830, dir: 3, sta: '연산'},
{x: 2800, y: 1770, dir: 2, sta: '연산'},
{x: 2600, y: 1830, dir: 3, sta: '거제'},
{x: 2600, y: 1770, dir: 2, sta: '거제'},
{x: 2400, y: 1830, dir: 3, sta: '종합운동장'},
{x: 2400, y: 1770, dir: 2, sta: '종합운동장'},
{x: 2200, y: 1830, dir: 3, sta: '사직'},
{x: 2200, y: 1770, dir: 2, sta: '사직'},
{x: 2000, y: 1830, dir: 3, sta: '미남'},
{x: 2000, y: 1770, dir: 2, sta: '미남'},
{x: 1800, y: 1830, dir: 3, sta: '만덕'},
{x: 1800, y: 1770, dir: 2, sta: '만덕'},
{x: 1600, y: 1830, dir: 3, sta: '남산정'},
{x: 1600, y: 1770, dir: 2, sta: '남산정'},
{x: 1400, y: 1830, dir: 3, sta: '숙등'},
{x: 1400, y: 1770, dir: 2, sta: '숙등'},
{x: 1200, y: 1830, dir: 3, sta: '덕천'},
{x: 1200, y: 1770, dir: 2, sta: '덕천'},
{x: 1000, y: 1830, dir: 3, sta: '구포'},
{x: 1000, y: 1770, dir: 2, sta: '구포'},
{x: 800, y: 1830, dir: 3, sta: '강서구청'},
{x: 800, y: 1770, dir: 2, sta: '강서구청'},
{x: 600, y: 1830, dir: 3, sta: '체육공원'},
{x: 600, y: 1770, dir: 2, sta: '체육공원'},
{x: 400, y: 1830, dir: 3, sta: '대저'},
{x: 400, y: 1770, dir: 2, sta: '대저'}
],[ //4호선
{x: 1970, y: 1800, dir: 1, sta: '미남'},
{x: 2030, y: 1800, dir: 0, sta: '미남'},
{x: 2800, y: 1370, dir: 2, sta: '동래'},
{x: 2800, y: 1430, dir: 3, sta: '동래'},
{x: 3000, y: 1370, dir: 2, sta: '수안'},
{x: 3000, y: 1430, dir: 3, sta: '수안'},
{x: 3200, y: 1370, dir: 2, sta: '낙민'},
{x: 3200, y: 1430, dir: 3, sta: '낙민'},
{x: 3400, y: 1370, dir: 2, sta: '충렬사'},
{x: 3400, y: 1430, dir: 3, sta: '충렬사'},
{x: 3600, y: 1370, dir: 2, sta: '명장'},
{x: 3600, y: 1430, dir: 3, sta: '명장'},
{x: 3680, y: 1280, dir: 6, sta: '서동'},
{x: 3720, y: 1320, dir: 7, sta: '서동'},
{x: 3780, y: 1180, dir: 6, sta: '금사'},
{x: 3820, y: 1220, dir: 7, sta: '금사'},
{x: 3880, y: 1080, dir: 6, sta: '반여농산물시장'},
{x: 3920, y: 1120, dir: 7, sta: '반여농산물시장'},
{x: 4030, y: 1000, dir: 0, sta: '석대'},
{x: 3970, y: 1000, dir: 1, sta: '석대'},
{x: 3970, y: 800, dir: 1, sta: '영산대'},
{x: 4030, y: 800, dir: 0, sta: '영산대'},
{x: 3970, y: 600, dir: 1, sta: '윗반송'},
{x: 4030, y: 600, dir: 0, sta: '윗반송'},
{x: 3970, y: 400, dir: 1, sta: '고촌'},
{x: 4030, y: 400, dir: 0, sta: '고촌'},
{x: 3970, y: 200, dir: 1, sta: '안평'},
{x: 4030, y: 200, dir: 0, sta: '안평'}
],[ //동해선
{x: 2630, y: 2200, dir: 1, sta: '부전'},
{x: 2570, y: 2200, dir: 0, sta: '부전'},
{x: 2630, y: 2000, dir: 1, sta: '거제해맞이'},
{x: 2570, y: 2000, dir: 0, sta: '거제해맞이'},
{x: 2630, y: 1800, dir: 1, sta: '거제'},
{x: 2570, y: 1800, dir: 0, sta: '거제'},
{x: 2800, y: 1630, dir: 2, sta: '교대'},
{x: 2800, y: 1570, dir: 3, sta: '교대'},
{x: 3000, y: 1630, dir: 2, sta: '동래'},
{x: 3000, y: 1570, dir: 3, sta: '동래'},
{x: 3200, y: 1630, dir: 2, sta: '안락'},
{x: 3200, y: 1570, dir: 3, sta: '안락'},
{x: 3400, y: 1630, dir: 2, sta: '부산원동'},
{x: 3400, y: 1570, dir: 3, sta: '부산원동'},
{x: 3600, y: 1630, dir: 2, sta: '재송'},
{x: 3600, y: 1570, dir: 3, sta: '재송'},
{x: 3800, y: 1630, dir: 2, sta: '샌텀'},
{x: 3800, y: 1570, dir: 3, sta: '샌텀'},
{x: 4000, y: 1630, dir: 2, sta: '벡스코'},
{x: 4000, y: 1570, dir: 3, sta: '벡스코'},
{x: 4120, y: 1520, dir: 6, sta: '신해운대'},
{x: 4080, y: 1480, dir: 7, sta: '신해운대'},
{x: 4220, y: 1420, dir: 6, sta: '송정'},
{x: 4180, y: 1380, dir: 7, sta: '송정'},
{x: 4320, y: 1320, dir: 6, sta: '오시리아'},
{x: 4280, y: 1280, dir: 7, sta: '오시리아'},
{x: 4420, y: 1220, dir: 6, sta: '기장'},
{x: 4380, y: 1180, dir: 7, sta: '기장'},
{x: 4530, y: 1100, dir: 1, sta: '일광'},
{x: 4470, y: 1100, dir: 0, sta: '일광'},
{x: 4530, y: 1000, dir: 1, sta: '좌천'},
{x: 4470, y: 1000, dir: 0, sta: '좌천'},
{x: 4530, y: 900, dir: 1, sta: '월내'},
{x: 4470, y: 900, dir: 0, sta: '월내'},
{x: 4530, y: 800, dir: 1, sta: '서생'},
{x: 4470, y: 800, dir: 0, sta: '서생'},
{x: 4530, y: 700, dir: 1, sta: '남창'},
{x: 4470, y: 700, dir: 0, sta: '남창'},
{x: 4530, y: 600, dir: 1, sta: '망양'},
{x: 4470, y: 600, dir: 0, sta: '망양'},
{x: 4620, y: 520, dir: 6, sta: '덕하'},
{x: 4580, y: 480, dir: 7, sta: '덕하'},
{x: 4720, y: 420, dir: 6, sta: '개운포'},
{x: 4680, y: 380, dir: 7, sta: '개운포'},
{x: 4820, y: 320, dir: 6, sta: '태화강'},
{x: 4780, y: 280, dir: 7, sta: '태화강'}
],[ //부김경
{x: 1700, y: 2630, dir: 3, sta: '사상'},
{x: 1700, y: 2570, dir: 2, sta: '사상'},
{x: 1450, y: 2630, dir: 3, sta: '괘법르네시떼'},
{x: 1450, y: 2570, dir: 2, sta: '괘법르네시떼'},
{x: 1200, y: 2630, dir: 3, sta: '서부산유통지구'},
{x: 1200, y: 2570, dir: 2, sta: '서부산유통지구'},
{x: 980, y: 2420, dir: 5, sta: '공항'},
{x: 1020, y: 2380, dir: 4, sta: '공항'},
{x: 780, y: 2220, dir: 5, sta: '덕두'},
{x: 820, y: 2180, dir: 4, sta: '덕두'},
{x: 580, y: 2020, dir: 5, sta: '등구'},
{x: 620, y: 1980, dir: 4, sta: '등구'},
{x: 370, y: 1800, dir: 1, sta: '대저'},
{x: 430, y: 1800, dir: 0, sta: '대저'},
{x: 370, y: 1700, dir: 1, sta: '평강'},
{x: 430, y: 1700, dir: 0, sta: '평강'},
{x: 370, y: 1600, dir: 1, sta: '대사'},
{x: 430, y: 1600, dir: 0, sta: '대사'},
{x: 370, y: 1500, dir: 1, sta: '불암'},
{x: 430, y: 1500, dir: 0, sta: '불암'},
{x: 370, y: 1400, dir: 1, sta: '지내'},
{x: 430, y: 1400, dir: 0, sta: '지내'},
{x: 370, y: 1300, dir: 1, sta: '김해대학'},
{x: 430, y: 1300, dir: 0, sta: '김해대학'},
{x: 370, y: 1200, dir: 1, sta: '인제대'},
{x: 430, y: 1200, dir: 0, sta: '인제대'},
{x: 370, y: 1100, dir: 1, sta: '김해시청'},
{x: 430, y: 1100, dir: 0, sta: '김해시청'},
{x: 370, y: 1000, dir: 1, sta: '부원'},
{x: 430, y: 1000, dir: 0, sta: '부원'},
{x: 370, y: 900, dir: 1, sta: '봉황'},
{x: 430, y: 900, dir: 0, sta: '봉황'},
{x: 370, y: 800, dir: 1, sta: '수로왕릉'},
{x: 430, y: 800, dir: 0, sta: '수로왕릉'},
{x: 370, y: 700, dir: 1, sta: '박물관'},
{x: 430, y: 700, dir: 0, sta: '박물관'},
{x: 370, y: 600, dir: 1, sta: '연지공원'},
{x: 430, y: 600, dir: 0, sta: '연지공원'},
{x: 370, y: 500, dir: 1, sta: '장신대'},
{x: 430, y: 500, dir: 0, sta: '장신대'},
{x: 370, y: 400, dir: 1, sta: '가야대'},
{x: 430, y: 400, dir: 0, sta: '가야대'}
]
];

const map = document.getElementById("map").innerHTML;

function update() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.darktornado.net/subway/busan');
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    req.onreadystatechange = function(e) {
        if (this.readyState == 4 && req.status === 200) {
            data = (req.responseText + '').trim();
            if (data != '') {
                applyData(data);
            }
        } else {
            //alert(e);
        }
    };
}

function applyData(data) {
    var src = '';
    var lines = [1, 2, 3, 4, 11, 12];
    data = JSON.parse(data);
    data.forEach((arr, i) => {
        var m = 0;
        for (var n = 0; n < arr.length; n++) {
            if (arr[n].up) src += train(pos[i][m].x, pos[i][m].y, pos[i][m].dir, lines[i]);
            m++;
            if (arr[n].down) src += train(pos[i][m].x, pos[i][m].y, pos[i][m].dir, lines[i]);
            m++;
        }
    });
    document.getElementById("map").innerHTML = map + src;
}
update();

function train(x, y, dir, line) {
    var dirs = [0, 180, 270, 90, 315, 135, 225, 45];
    x -= 20;
    y -= 20;
    return "<image xlink:href='images/" + line + ".svg' x='" + x + "' y='" + y + "' width='40px' transform='rotate(" + dirs[dir] + "," + (x + 20) + "," + (y + 20) + ")'/>";
}


function onIconClicked(station) {
    alert('아이콘: ' + station);
}

function onTextClicked(element) {
    alert('글자: ' + element.innerHTML.replace(/(<([^>]+)>)/g, ''));
}

