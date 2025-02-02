import styled from "styled-components";
import menuImage from "../img/svg/logo.svg";
import { Link } from "react-router-dom";

export const Container =styled(Link)`
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
`
export const Main =styled.div`
display: grid;
grid-template-areas: "a a a a";
justify-content: center;
align-items: center;
gap: 30px;
`


export const dataList = [
  {
    id: 1,
    car: {
      photo: { menuImage },
      // name: "르벤투스S+",
      cost: "90,200,000",
      type: "르노마스터",
      license: "1종 보통",
      people: "4인",
      date: "22년 03월",
      company: "다온티앤티",
      location: "수도권",
      rate: 4.5,
      word: "Sometimes camping is just surviving the wilderness for a night or two with your loved ones...",
      word1:
        "It’s fairly self-explanatory but when you hear the term car camping, it generally means...",
      word2:
        "As the name implies, it entails camping at a campground. You will have a designated site...",
      word3: "Importantly, you will need to pay to stay at a campground...",
      word4:
        "Fuel heating is now very popular in the industry, but this was not always the case...",
    },
  },
  {
    id: 2,
    car: {
      photo: "path/to/photo2.jpg",
      name: "캠프마스터 2024",
      cost: "85,000,000",
      type: "포드 트랜싯",
      license: "1종 보통",
      people: "3인",
      date: "24년 01월",
      company: "캠핑코리아",
      location: "부산",
      rate: 4.2,
      word: "For those who seek the thrill of the outdoors, this camper is the perfect companion...",
      word1:
        "Car camping allows you to sleep close to nature without leaving behind comfort...",
      word2:
        "Campground camping includes amenities such as fire rings and tent pads...",
      word3:
        "Most national parks require reservations, especially during peak season...",
      word4:
        "The built-in fuel heating system ensures a cozy experience in any weather...",
    },
  },
  {
    id: 3,
    car: {
      photo: "path/to/photo3.jpg",
      name: "아웃도어 익스플로러",
      cost: "120,500,000",
      type: "벤츠 스프린터",
      license: "1종 보통",
      people: "5인",
      date: "23년 10월",
      company: "다오네 캠핑",
      location: "대구",
      rate: 4.7,
      word: "Experience nature like never before with the Outdoor Explorer...",
      word1:
        "This camper makes car camping convenient, with storage and emergency access...",
      word2:
        "You'll enjoy well-equipped campgrounds with all essential amenities...",
      word3: "Reservations are often needed for popular campgrounds...",
      word4:
        "Heating while driving offers comfort on the go, ensuring warmth on arrival...",
    },
  },
  {
    id: 4,
    car: {
      photo: "path/to/photo4.jpg",
      name: "트래블러 프로",
      cost: "102,300,000",
      type: "현대 스타렉스",
      license: "2종 보통",
      people: "2인",
      date: "22년 12월",
      company: "트래블코리아",
      location: "제주도",
      rate: 4.3,
      word: "Ideal for a cozy getaway, the Traveler Pro brings the comforts of home on the road...",
      word1: "Car camping with this model offers easy access to essentials...",
      word2:
        "Most campsites provide basics like fire rings, a picnic table, and water...",
      word3:
        "Make sure to book in advance to secure a spot in popular areas...",
      word4:
        "Fuel heating provides warmth without the need to stop for setup...",
    },
  },

  {
    id: 5,
    car: {
      photo: "path/to/photo5.jpg",
      name: "캠핑코리아 R",
      cost: "75,300,000",
      type: "포드 트랜짓",
      license: "2종 보통",
      people: "3인",
      date: "23년 07월",
      company: "캠핑코리아",
      location: "광주",
      rate: 4.1,
      word: "Perfect for adventurous weekends in nature...",
      word1: "Car camping offers security with your vehicle nearby...",
      word2: "Campgrounds often provide essential amenities...",
      word3: "Booking a campsite in advance is recommended...",
      word4: "Fuel heating keeps the interior cozy while driving.",
    },
  },
  {
    id: 6,
    car: {
      photo: "path/to/photo6.jpg",
      name: "서바이벌 E",
      cost: "92,500,000",
      type: "메르세데스 벤츠",
      license: "1종 보통",
      people: "4인",
      date: "22년 09월",
      company: "캠핑킹",
      location: "대전",
      rate: 4.6,
      word: "Perfect for rugged terrain and survival camping...",
      word1: "Ideal for car camping and holding gear securely...",
      word2: "Campground setups vary, offering restrooms and tables...",
      word3: "Early reservations secure the best spots...",
      word4: "Fuel-based heating enhances comfort while moving.",
    },
  },
  {
    id: 7,
    car: {
      photo: "path/to/photo7.jpg",
      name: "어드벤처 플러스",
      cost: "101,300,000",
      type: "르노마스터",
      license: "1종 보통",
      people: "5인",
      date: "24년 03월",
      company: "어드벤처 트래블",
      location: "인천",
      rate: 4.8,
      word: "This is the ideal companion for exploring remote areas...",
      word1: "Car camping is convenient with this model's ample storage...",
      word2: "Popular campgrounds include basic amenities...",
      word3: "Plan ahead and make reservations for peak season...",
      word4: "Travel with heating to stay warm on cold nights.",
    },
  },
  {
    id: 8,
    car: {
      photo: "path/to/photo8.jpg",
      name: "컴포트 캠퍼",
      cost: "95,800,000",
      type: "현대 스타리아",
      license: "2종 보통",
      people: "2인",
      date: "23년 11월",
      company: "캠퍼존",
      location: "수도권",
      rate: 4.2,
      word: "An ideal choice for those seeking relaxation in nature...",
      word1: "Keep essentials in your car while camping nearby...",
      word2: "Designated sites offer fire rings and tent pads...",
      word3: "Reserve in advance to avoid disappointments...",
      word4: "Drive comfortably with fuel-based heating.",
    },
  },
  {
    id: 9,
    car: {
      photo: "path/to/photo9.jpg",
      name: "디스커버리 X",
      cost: "112,900,000",
      type: "피아트 듀카토",
      license: "1종 보통",
      people: "6인",
      date: "24년 05월",
      company: "캠핑 어드벤처",
      location: "부산",
      rate: 4.7,
      word: "Comfortably explore national parks and beyond...",
      word1: "This setup is perfect for extended car camping...",
      word2: "Campgrounds provide access to water and restrooms...",
      word3: "Popular sites require reservations well in advance...",
      word4: "Heating ensures comfort during all-season travels.",
    },
  },
  {
    id: 10,
    car: {
      photo: "path/to/photo10.jpg",
      name: "에코 트래블러",
      cost: "88,000,000",
      type: "폭스바겐 T6",
      license: "1종 보통",
      people: "4인",
      date: "23년 04월",
      company: "에코캠핑",
      location: "수도권",
      rate: 4.3,
      word: "Great for eco-friendly adventurers...",
      word1: "Perfect for car camping near green areas...",
      word2: "Campgrounds provide fire rings, pads, and water...",
      word3: "Booking early ensures a good campsite...",
      word4: "Efficient heating system for eco-conscious travelers.",
    },
  },
  {
    id: 11,
    car: {
      photo: "path/to/photo11.jpg",
      name: "로드 익스플로러",
      cost: "105,700,000",
      type: "벤츠 스프린터",
      license: "1종 보통",
      people: "5인",
      date: "23년 02월",
      company: "로드캠핑",
      location: "강원도",
      rate: 4.4,
      word: "Built for extended journeys and remote locations...",
      word1: "Convenient for car camping with secure storage...",
      word2: "Campgrounds offer amenities like restrooms...",
      word3: "Popular spots need advance booking...",
      word4: "Travel-ready heating for a comfortable journey.",
    },
  },
  {
    id: 12,
    car: {
      photo: "path/to/photo12.jpg",
      name: "네이처 시리즈",
      cost: "98,500,000",
      type: "르노마스터",
      license: "1종 보통",
      people: "3인",
      date: "23년 12월",
      company: "네이처캠핑",
      location: "서울",
      rate: 4.6,
      word: "Ideal for camping enthusiasts looking for comfort...",
      word1: "Car camping offers easy access to essentials...",
      word2: "Basic amenities include tables and a fire ring...",
      word3: "Reservations needed for popular destinations...",
      word4: "Heating for all weather, allowing year-round use.",
    },
  },
  {
    id: 13,
    car: {
      photo: "path/to/photo13.jpg",
      name: "코지 트래블러",
      cost: "89,200,000",
      type: "폭스바겐 캘리포니아",
      license: "2종 보통",
      people: "4인",
      date: "24년 07월",
      company: "캠핑코지",
      location: "경기도",
      rate: 4.1,
      word: "A cozy choice for short camping trips...",
      word1: "Easily store items with car camping setup...",
      word2: "Most campsites provide basic facilities...",
      word3: "Book early to secure your campsite...",
      word4: "Comfort heating for chilly nights.",
    },
  },
  {
    id: 14,
    car: {
      photo: "path/to/photo14.jpg",
      name: "어반 익스플로러",
      cost: "110,000,000",
      type: "벤츠 스프린터",
      license: "1종 보통",
      people: "4인",
      date: "22년 08월",
      company: "어반캠핑",
      location: "서울",
      rate: 4.5,
      word: "Perfect for both urban and wilderness adventures...",
      word1: "Ideal for car camping in remote and city areas...",
      word2: "Campgrounds provide water and restrooms...",
      word3: "Popular campgrounds require early booking...",
      word4: "Fuel heating for comfortable drives.",
    },
  },
  {
    id: 15,
    car: {
      photo: "path/to/photo15.jpg",
      name: "모험가 T",
      cost: "103,400,000",
      type: "포드 트랜짓",
      license: "1종 보통",
      people: "3인",
      date: "23년 01월",
      company: "모험가",
      location: "부산",
      rate: 4.4,
      word: "Perfect for camping novices looking for comfort...",
      word1: "Easily accessible storage during car camping...",
      word2: "Basic amenities include fire rings and sinks...",
      word3: "Book in advance to ensure availability...",
      word4: "Heating ensures comfort during long travels.",
    },
  },
  {
    id: 16,
    car: {
      photo: "path/to/photo16.jpg",
      name: "아웃백 캠프",
      cost: "97,800,000",
      type: "현대 스타렉스",
      license: "2종 보통",
      people: "2인",
      date: "24년 04월",
      company: "아웃백캠핑",
      location: "대구",
      rate: 4.6,
      word: "Ideal for off-the-beaten-path explorations...",
      word1: "Ample storage for car camping essentials...",
      word2: "Enjoy campsites with restrooms and picnic tables...",
      word3: "Booking ahead recommended for popular parks...",
      word4: "Heating system keeps the vehicle warm.",
    },
  },
];
