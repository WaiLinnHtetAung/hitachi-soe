import { createStore } from "vuex";

export default createStore({
  state: {
    news: [
      {
        id: 1,
        title:
          "Asean Outstanding Engineering Achievement Award for the Year 2015 From 23~26 Nov 2015 in Penang, Malaysia.",
        day: "23",
        month: "Nov",
        year: "2015",
        type: "event",
        img: [require("@/assets/images/news/1.png")],
      },
      {
        id: 2,
        title: "Joint Venture Signing Ceremony at Sedona on 7 July 2015.",
        day: "07",
        month: "July",
        year: "2015",
        type: "event",
        img: [require("@/assets/images/news/2.png")],
      },
      {
        id: 3,
        title:
          "Opening Ceremony of Hitachi Soe Electric & Machinery Co., Ltd. at Sule Shangri La Hotel on 28 Nov 2015.",
        day: "28",
        month: "Nov",
        year: "2015",
        type: "event",
        img: [require("@/assets/images/news/3.png")],
      },
      {
        id: 4,
        title:
          "HISEM Golf Tournament on 29 Nov 2015 at Mingalardone Golf Club.",
        day: "29",
        month: "Nov",
        year: "2015",
        type: "event",
        img: [require("@/assets/images/news/4.png")],
      },
      {
        id: 5,
        title:
          "3 March 20217 HISEM participated in Water treatment system with Hitachi Group",
        day: "29",
        month: "Mar",
        year: "2017",
        type: "csr",
        img: [require("@/assets/images/news/5.png")],
      },
      {
        id: 6,
        title:
          "Achievement Celebration Ceremony of Hitachi Soe Electric & Machinery Co., Ltd on 2 Dec 2017",
        day: "02",
        month: "Dec",
        year: "2017",
        type: "event",
        img: [require("@/assets/images/news/6.png")],
      },
      {
        id: 7,
        title:
          "The Signing Ceremony of Ministry of Electricity and Energy Electricity Supply Enterprise Mandalay Electricity Supply Corporation And Hitachi Soe Electric & Machinery Co., Ltd.  National Electrification Project Phase 1 on 27 Nov 20217 ",
        day: "27",
        month: "Nov",
        year: "2017",
        type: "event",
        img: [require("@/assets/images/news/7.png")],
      },
      {
        id: 8,
        title:
          "Receiving Recognition Certificate of Donation Distribution Transformers to Rakhine State for the rual area development on 3 Jan 2018.",
        day: "03",
        month: "Jan",
        year: "2018",
        type: "csr",
        img: [require("@/assets/images/news/8.png")],
      },
      {
        id: 9,
        title:
          "Hitachi Asia's Brand Event 2018 & Inspiration of the Year Global Awards Ceremony in 5 Aug 2018",
        day: "05",
        month: "Aug",
        year: "2018",
        type: "event",
        img: [require("@/assets/images/news/9.png")],
      },
      {
        id: 10,
        title:
          " Inspriation of the Year Global Award 2018 Southeast Asia Region Grand Prix Inspiration in Myanmar Electricity Sector on 19 Dec 2018 in Japan",
        day: "19",
        month: "Dec",
        year: "2018",
        type: "event",
        img: [
          require("@/assets/images/news/10.png"),
          require("@/assets/images/news/11.png"),
          require("@/assets/images/news/12.png"),
          require("@/assets/images/news/13.png"),
        ],
      },
      {
        id: 11,
        title:
          "Providing On Job Training to Undergraduate Students at HISEM Factory.",
        day: "05",
        month: "Aug",
        year: "2019",
        type: "csr",
        img: [require("@/assets/images/news/14.png")],
      },
      {
        id: 12,
        title:
          "Participation of exhibition in the celebration of fifty percent electrification ceremony 12 Dec 2019.",
        day: "12",
        month: "Dec",
        year: "2019",
        type: "event",
        img: [require("@/assets/images/news/15.png")],
      },
      {
        id: 13,
        title:
          "The Signing Ceremony of Ministry of Electricity and Energy Electricity Supply Enterprise Mandalay Electricity Supply Corporation And Hitachi Soe Electric & Machinery Co., Ltd. For National Electrification Project Phase 2 ",
        day: "21",
        month: "Jan",
        year: "2020",
        type: "event",
        img: [require("@/assets/images/news/16.png")],
      },
      {
        id: 14,
        title:
          "Receiving Recognition Certificate of Donation Distribution Transformers to MOEE for the development of rural area on 7 Oct 2020.",
        day: "07",
        month: "Oct",
        year: "2020",
        type: "csr",
        img: [require("@/assets/images/news/17.png")],
      },
      {
        id: 15,
        title:
          "13 Dec 2020 Receiving Honorable Recognition Certificate from Minsitry of Electricity and Energy.",
        day: "13",
        month: "Dec",
        year: "2020",
        type: "event",
        img: [require("@/assets/images/news/18.png")],
      },
      {
        id: 16,
        title:
          "Providing Graduity to HISEM Employees over 60 years old on 17 March 2022",
        day: "17",
        month: "Mar",
        year: "2022",
        type: "csr",
        img: [require("@/assets/images/news/19.png")],
      },
      {
        id: 17,
        title:
          "Sending engineers and skilled worker as Trainees to Nakajo Factory for one year on 30 Jan 2023.",
        day: "30",
        month: "Jan",
        year: "2023",
        type: "csr",
        img: [require("@/assets/images/news/20.png")],
      },
      {
        id: 18,
        title: "Lighting Festival at HISEM on 29 Oct 2023.",
        day: "29",
        month: "Oct",
        year: "2023",
        type: "event",
        img: [
          require("@/assets/images/news/21.png"),
          require("@/assets/images/news/22.png"),
        ],
      },
      {
        id: 19,
        title:
          "Employee Engagement and Staffs' Party at Chaung Thar from 26 Oct to 28 Oct 2023.",
        day: "26",
        month: "Oct",
        year: "2023",
        type: "event",
        img: [require("@/assets/images/news/23.png")],
      },
      {
        id: 20,
        title: "Celebration of Birthday Party for Staffs at HISEM factory.",
        day: "26",
        month: "Oct",
        year: "2023",
        type: "csr",
        img: [require("@/assets/images/news/24.png")],
      },
    ],

    newsDetail: [],
  },
  getters: {
    getNews: (state) => state.news,
    getNewsDetail: (state) => state.newsDetail,
  },
  mutations: {
    setNewsDetail: (state, newsDetail) => {
      state.newsDetail = newsDetail;
    },
  },
  actions: {
    getNewsDetail: (context, id) => {
      let newsDetail = context.state.news.find((item) => item.id == id);
      context.commit("setNewsDetail", newsDetail);
    },
  },
  modules: {},
});
