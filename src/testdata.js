import { v4 as uuid } from "uuid"

const now = new Date()
const userUuid = uuid()
const bookmarkUuid1 = uuid()
const bookmarkUuid2 = uuid()

export const userObjTemplate = {
  uid: userUuid,
  displayName: "Jace",
  email: "jacealan1@gmail.com",
}

export const usermarkObjTemplate = {
  uid: userUuid,
  createdAt: now,
  updatedAt: now,
  title: "Jace's List",
  search: "naver",
  // search: "google",
  changed: false,
  bookmarks: [
    bookmarkUuid1,
    bookmarkUuid2,
    // "989bebde-c948-4196-b2fc-6181e1cbc98c",
    // "d266316c-82dd-4aa8-8d64-c72dd786e7d1",
  ],
  videomarks: [],
  financemarks: [],
  notemarks: [],
}

export const bookmarkObjTemplate = {}

bookmarkObjTemplate[bookmarkUuid1] = {
  modifiedId: userUuid,
  authorId: userUuid,
  // authorId: "db3eea08-4077-4025-a83b-11420014d844",
  createdAt: now,
  modifiedAt: now,
  updatedAt: now,
  pages: ["group0", "group1", "group2", "group3"],
  group0: [
    {
      url: "https://naver.com/",
      title: "네이버",
      thumbnail:
        "https://user-images.githubusercontent.com/69343830/102716411-1c227700-431f-11eb-86e6-dd389b690681.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.google.com/",
      title: "구글",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/",
      title: "Youtube",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://remotedesktop.google.com/",
      title: "GRD",
      thumbnail:
        "https://play-lh.googleusercontent.com/I4DRWoABrUQsaAIQFVSKha98q1u2ilEdrwPJBaf9Mb8KdGZnXzs5DObrwcwUZovgOA=w240-h480-rw",
      bgColor: "#aaa",
      color: "#444",
    },
  ],
  group1: [
    {
      url: "https://drive.google.com/",
      title: "GDrive",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/5968/5968523.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://mail.google.com/",
      title: "GMail",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/5968/5968534.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://analytics.google.com/",
      title: "GAnalytics",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/732/732204.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.icloud.com/",
      title: "iCloud",
      thumbnail:
        "https://cdn.iconscout.com/icon/free/png-128/icloud-3628843-3030120.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://firebase.google.com/?hl=ko",
      title: "firebase",
      thumbnail:
        "https://cdn.iconscout.com/icon/free/png-128/firebase-3521427-2944871.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://github.com/",
      title: "GitHub",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/25/25657.png",
      bgColor: "#aaa",
      color: "#444",
    },
  ],
  group2: [
    {
      url: "https://vercel.com/",
      title: "Vercel",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/62/62601.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://replit.com/",
      title: "Repl.it",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/1200px-Repl.it_logo.svg.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://slack.com/intl/ko-kr/",
      title: "slack",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/2111/2111615.png",
      bgColor: "",
      color: "#444",
    },
    {
      url: "https://discord.com/",
      title: "Discord",
      thumbnail: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
      bgColor: "",
      color: "#444",
    },
    {
      url: "https://www.acmicpc.net/",
      title: "백준",
      thumbnail:
        "data:image/png;base64,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",
      bgColor: "",
      color: "#444",
    },
    {
      url: "https://programmers.co.kr/",
      title: "프로그래머스",
      thumbnail:
        "data:image/png;base64,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",
      bgColor: "",
      color: "#444",
    },
  ],
  group3: [
    {
      url: "https://www.notion.so/",
      title: "Notion",
      thumbnail:
        "https://cdn.iconscout.com/icon/free/png-128/notion-2296040-1911999.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://workflowy.com/",
      title: "Workflowy",
      thumbnail:
        "https://play-lh.googleusercontent.com/c7cl-3wGY1RyqbKxaTp07clI5rnO-vjIZcEmVNDYKu_VkCK1-SunawYyYM19b2k9N0ce",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://jadoc.vercel.app/",
      title: "JaDoc",
      thumbnail:
        "https://japp-nu.vercel.app/_next/image?url=%2Fimg%2Fbookmark%2Fjadoc.png&w=256&q=75",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://nomadcoders.co/",
      title: "노마드코더",
      thumbnail:
        "https://d1telmomo28umc.cloudfront.net/media/public/avatars/lynn-3fJUzK-1632467086.jpg",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://fastcampus.co.kr/",
      title: "패스트캠퍼스",
      thumbnail:
        "https://oopy.lazyrockets.com/api/rest/cdn/image/b070e475-6c4b-4eed-a4a6-38bddc844bbd.png",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://academy.dream-coding.com/",
      title: "드림코딩",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcUofm2fIi-7ZMrwBcj8YPuoJcdsZ4sKPbw&usqp=CAU",
      bgColor: "#aaa",
      color: "#444",
    },
  ],
}

bookmarkObjTemplate[bookmarkUuid2] = {
  modifiedId: userUuid,
  // authorId: "wQAy57519WZllX1ymr4yAA522xh2",
  authorId: userUuid,
  createdAt: now,
  modifiedAt: now,
  updatedAt: now,
  pages: ["group0", "group1", "group2", "group3"],
  group0: [
    {
      url: "https://www.youtube.com/channel/UCGRFzcuTejs9OyW_sKt5TGQ/featured",
      title: "STEPS",
      thumbnail:
        "https://play-lh.googleusercontent.com/fagWt3S9kLamevkkIMgi0_3ur8wXubO9Cuo0nXYLMW-f_t4aRZAxHGEj7CIjxpTBWrs",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UCauZxKRDiGcrWplWUOIN9JQ",
      title: "이리온",
      thumbnail:
        "https://yt3.ggpht.com/n5EBnK2Q_4sjM5tYK-eeTAPxEhVCMlaIQOZhZEzqGCTOgRXJ0r38ZFzH3vGDGzXbvzdSRfpqEQ=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UChlv4GSd7OQl3js-jkLOnFA",
      title: "삼프로TV",
      thumbnail:
        "https://yt3.ggpht.com/ytc/AMLnZu8YcVXJtaW8xtWR2C2ADlPRTs8-kg705Du5Q_fchw=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UCsJ6RuBiTVWRX156FVbeaGg/featured",
      title: "슈카월드",
      thumbnail:
        "https://yt3.ggpht.com/ytc/AMLnZu_KptPhlZ024JCVEU_eptEnciU89Hp_MNcGL2Vl=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
  ],
  group1: [
    {
      url: "https://finance.naver.com/",
      title: "네이버 증권",
      thumbnail:
        "https://blog.kakaocdn.net/dn/bhL3fe/btqYE6HCZYB/g4CMC83pJbWsKrOFEn8QK0/img.jpg",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://finance.yahoo.com/",
      title: "Yahoo Finance",
      thumbnail:
        "https://play-lh.googleusercontent.com/jQVXIz4MbsuOJSzoeFsTeL2gHoaZTlBtz2JbyG9JAuhsrTPB2vSvsRqsINWYVUr3Xw",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://markets.hankyung.com/marketmap/kospi",
      title: "한경 코리아마켓",
      thumbnail:
        "https://yt3.ggpht.com/IQvZgcw8waFlXvg72ROqOWtLdkgAFKDkNfsZT1cWVpUcSle2zHbj4o8rnu5z9B8p1fLWxU_T=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.hankyung.com/globalmarket/marketmap",
      title: "한경 글로벌마켓",
      thumbnail:
        "https://yt3.ggpht.com/7pV5sWi_IiN53Rw8dOYyTFlMHNV-YRw0UTnrxIN5u6E9n2Kh9oxqBSrqBVnpJMWZEzc4ecUR7Q=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "http://dart.fss.or.kr/",
      title: "전자공시DART",
      thumbnail:
        "https://play-lh.googleusercontent.com/-gTLHrG69_RE0amUNLWifrf63T830-Jgz5iEJCRnhYc6KPxyLTE1mcjSvxFre6sXDw=w240-h480-rw",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "http://www.krx.co.kr/",
      title: "KRX",
      thumbnail:
        "https://yt3.ggpht.com/ytc/AMLnZu_aJvf8ElgwzPvCtr7BLkyYqxVe7UAfddEzNmey=s900-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://bigfinance.co.kr/",
      title: "BigFinance",
      thumbnail:
        "https://logo-resources.thevc.kr/products/200x200/3dd45f15665b75832c86a6eac0c23bcd6ced813007e26b14e364d4c2dd76c054_1655960286205815.jpg",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://apiportal.koreainvestment.com/intro",
      title: "KIS openAPI",
      thumbnail: "",
      bgColor: "#407BFF",
      color: "#eee",
    },
    {
      url: "https://genport.newsystock.com/",
      title: "젠포트",
      thumbnail:
        "https://file.mk.co.kr/meet/neds/2020/08/image_readtop_2020_884195_15985119004333160.jpg",
      bgColor: "#407BFF",
      color: "#eee",
    },
  ],
  group2: [
    {
      url: "https://www.youtube.com/c/RelaxCafeMusic",
      title: "Relax Cafe",
      thumbnail:
        "https://yt3.ggpht.com/ytc/AMLnZu-qYrNRn5rwt2yF8wRMcgtB7ZpxmZ_tIJnF1Tg2Rg=s176-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UC7bX_RrH3zbdp5V4j5umGgw",
      title: "Relax Music",
      thumbnail:
        "https://yt3.ggpht.com/lCtNZz3ygAJxPHt5vxigBisHY3Oe0rHFMdnFiZIfJveZKEXY4OzapSDw4xhVrNuNVzDGnMZF=s176-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UCBnMxlW70f0SB4ZTJx124lw",
      title: "몽키 BGM",
      thumbnail:
        "https://yt3.ggpht.com/x8_XLvrLdd-Cs6z7Cmob2eZmqvbzmYdOdf6b7jLMry1z1YhdExnuqEhwRrYveu4X2airLfbv=s176-c-k-c0x00ffffff-no-rj",
      bgColor: "#aaa",
      color: "#444",
    },
    {
      url: "https://www.youtube.com/channel/UCeI_Ji5Wc1YQvG2dCHZJINw",
      title: "MAX OAZO",
      thumbnail:
        "https://images.genius.com/8945e9f3b768af3b2ae2830f2c0cbe00.640x640x1.jpg",
      bgColor: "#222",
      color: "#eee",
    },
  ],
  group3: [],
}

export const videomarkObjTemplate = {}

export const financemarkObjTemplate = {}

export const notemarkObjTemplate = {}
