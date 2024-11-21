#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <cmath>
using namespace std;

string cityList [84]= {
    "Andong",
    "Ansan",
    "Anseong",
    "Anyang",
    "Asan",
    "Boryeong",
    "Bucheon",
    "Busan",
    "Changwon",
    "Cheonan",
    "Cheongju",
    "Chuncheon",
    "Chungju",
    "Daegu",
    "Daejeon",
    "Dangjin",
    "Dongducheon",
    "Donghae",
    "Gangneung",
    "Geoje",
    "Gimcheon",
    "Gimhae",
    "Gimje",
    "Gimpo",
    "Gongju",
    "Goyang",
    "Gumi",
    "Gunpo",
    "Gunsan",
    "Guri",
    "Gwacheon",
    "Gwangju",
    "Gwangmyeong",
    "Gwangyang",
    "Gyeongju",
    "Gyeongsan",
    "Gyeryong",
    "Hanam",
    "Hwaseong",
    "Icheon",
    "Iksan",
    "Incheon",
    "Jecheon",
    "Jeju",
    "Jeongeup",
    "Jeonju",
    "Jinju",
    "Miryang",
    "Mokpo",
    "Mungyeong",
    "Naju",
    "Namwon",
    "Namyangju",
    "Nonsan",
    "Osan",
    "Paju",
    "Pocheon",
    "Pohang",
    "Pyeongtaek",
    "Sacheon",
    "Samcheok",
    "Sangju",
    "Sejong",
    "Seogwipo",
    "Seongnam",
    "Seosan",
    "Seoul",
    "Siheung",
    "Sokcho",
    "Suncheon",
    "Suwon",
    "Taebaek",
    "Tongyeong",
    "Uijeongbu",
    "Uiwang",
    "Ulsan",
    "Wonju",
    "Yangju",
    "Yangsan",
    "Yecheon",
    "Yeongcheon",
    "Yeongju",
    "Yeosu",
    "Yongin"
};

pair<long long,long long> cityPos [84] = {
    {365635, 1287207},
    {373173, 1268209},
    {370075, 1272695},
    {373835, 1269342},
    {367822, 1270006},
    {363508, 1266009},
    {375039, 1267875},
    {351731, 1290714},
    {352470, 1286542},
    {368136, 1271417},
    {366283, 1274913},
    {378805, 1277278},
    {369872, 1279283},
    {358501, 1285206},
    {363578, 1273867},
    {369005, 1266326},
    {379024, 1270532},
    {374925, 1291106},
    {377563, 1288991},
    {348932, 1286091},
    {361244, 1281042},
    {352339, 1288845},
    {358025, 1268924},
    {376594, 1265931},
    {364566, 1271251},
    {376591, 1267873},
    {361172, 1283509},
    {373553, 1269467},
    {359796, 1267156},
    {375972, 1271309},
    {374279, 1269912},
    {351501, 1268559},
    {374419, 1268469},
    {349749, 1275891},
    {358447, 1292070},
    {358241, 1287373},
    {362884, 1272417},
    {375518, 1272037},
    {371689, 1268941},
    {372891, 1274530},
    {359444, 1269595},
    {374752, 1266313},
    {371336, 1282039},
    {335043, 1265198},
    {355616, 1268637},
    {358397, 1271293},
    {351757, 1281178},
    {354832, 1287526},
    {347990, 1263895},
    {366936, 1281250},
    {350359, 1267187},
    {354151, 1273863},
    {376127, 1271717},
    {362026, 1270866},
    {371557, 1270727},
    {377596, 1267778},
    {378983, 1272041},
    {360178, 1293609},
    {369940, 1268525},
    {350802, 1280830},
    {374441, 1291679},
    {364156, 1281593},
    {366012, 1272982},
    {332532, 1265610},
    {373918, 1271131},
    {367834, 1264522},
    {375503, 1269971},
    {373501, 1267393},
    {382042, 1285884},
    {349571, 1274844},
    {372668, 1270015},
    {371651, 1289856},
    {348530, 1284291},
    {377470, 1270499},
    {373496, 1269732},
    {355377, 1293280},
    {373438, 1279333},
    {377840, 1270466},
    {353538, 1290432},
    {366575, 1284612},
    {359669, 1289313},
    {368223, 1286244},
    {347610, 1276629},
    {375314, 1269799}
};

int main(int argc, char* argv[]) {
    int region = atoi(argv[1]);
    long long lat = cityPos[region].first;
    long long lon = cityPos[region].second;
    int mindist = 100000;
    int minindx = -1;
    int scndindx;
    
    //cout << lat << " " << lon << "\n";

    for (int i = 0; i < 84; i++) {
        if (i==region) {
            continue;
        }
        
        long long curlat = cityPos[i].first;
        long long curlon = cityPos[i].second;

        int dist = sqrt((abs(lat-curlat)*abs(lat-curlat))+(abs(lon-curlon)*abs(lon-curlon)));
        //cout << i << ": " << abs(lat-curlat) << ' ' << abs(lon-curlon) << ' ' << dist << "\n";
        
        if (mindist > dist) {
            mindist = dist;
            scndindx = minindx;
            minindx = i;
        }
    }
    
    //cout << cityList[region] << "\n";
    cout << minindx << "/" << scndindx << "\n";
    //cout << lat << " " << lon << '\n';
    //cout << cityPos[minindx].first << " " << cityPos[minindx].second << "\n";
    //cout << cityPos[scndindx].first << " " << cityPos[scndindx].second << "\n";
    
}
