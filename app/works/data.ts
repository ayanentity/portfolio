export type Work = {
  id: string;
  title: string;
  /** 一覧・詳細でPNGを使う場合（上から順に表示） */
  imagePages?: string[];
  /** PNGがない作品のみ */
  pdfPath?: string;
};

export const works: Work[] = [
  {
    id: "profile",
    title: "自己紹介",
    imagePages: [
      "/works/Profile/Profile01-v3.png",
      "/works/Profile/Profile02-v2.png",
      "/works/Profile/Profile03-v2.png",
    ],
  },
  {
    id: "meeture",
    title: "【初めての個人開発制作物】Meeture",
    imagePages: [
      "/works/Meeture/Meeture01.png",
      "/works/Meeture/Meeture02.png",
      "/works/Meeture/Meeture03.png",
      "/works/Meeture/Meeture04.png",
      "/works/Meeture/Meeture05.png",
      "/works/Meeture/Meeture06.png",
      "/works/Meeture/Meeture07.png",
      "/works/Meeture/Meeture08.png",
      "/works/Meeture/Meeture09.png",
      "/works/Meeture/Meeture10.png",
      "/works/Meeture/Meeture11.png",
      "/works/Meeture/Meeture12.png",
      "/works/Meeture/Meeture13.png",
      "/works/Meeture/Meeture14.png",
      "/works/Meeture/Meeture15.png",
      "/works/Meeture/Meeture16.png",
      "/works/Meeture/Meeture17.png",
      "/works/Meeture/Meeture18.png",
    ],
  },
  {
    id: "OctoDeck",
    title: "【P2HACKS2025最優秀賞作品】OctoDeck",
    imagePages: [
      "/works/OctoDeck/01.png",
      "/works/OctoDeck/02.png",
      "/works/OctoDeck/03.png",
      "/works/OctoDeck/04.png",
      "/works/OctoDeck/05.png",
      "/works/OctoDeck/06.png",
      "/works/OctoDeck/07.png",
      "/works/OctoDeck/08.png",
      "/works/OctoDeck/09.png",
      "/works/OctoDeck/10.png",
      "/works/OctoDeck/11.png",
      "/works/OctoDeck/12.png",
      "/works/OctoDeck/13.png",
      "/works/OctoDeck/14.png",
      "/works/OctoDeck/15.png",
      "/works/OctoDeck/16.png",
      "/works/OctoDeck/17.png",
      "/works/OctoDeck/18.png",
    ],
  },
  {
    id: "Nemulert",
    title: "【JPHACKS2025 Innovator認定作品】Nemulert",
    imagePages: [
      "/works/Nemulert/Nemulert01-v2.png",
      "/works/Nemulert/Nemulert02.png",
      "/works/Nemulert/Nemulert03.png",
      "/works/Nemulert/Nemulert04.png",
      "/works/Nemulert/Nemulert05.png",
      "/works/Nemulert/Nemulert06.png",
      "/works/Nemulert/Nemulert07.png",
      "/works/Nemulert/Nemulert08.png",
      "/works/Nemulert/Nemulert09.png",
      "/works/Nemulert/Nemulert10.png",
      "/works/Nemulert/Nemulert11.png",
    ],
  },
  {
    id: "vibe-cooking",
    title: "Vibe Cooking",
    imagePages: [
      "/works/vibe-cooking/Vibe-Cooking01.png",
      "/works/vibe-cooking/2.png",
      "/works/vibe-cooking/Vibe-Cooking03.png",
      "/works/vibe-cooking/Vibe-Cooking04.png",
      "/works/vibe-cooking/Vibe-Cooking05.png",
      "/works/vibe-cooking/Vibe-Cooking06.png",
      "/works/vibe-cooking/Vibe-Cooking07.png",
      "/works/vibe-cooking/Vibe-Cooking08.png",
      "/works/vibe-cooking/Vibe-Cooking09.png",
      "/works/vibe-cooking/Vibe-Cooking10.png",
      "/works/vibe-cooking/Vibe-Cooking11.png",
      "/works/vibe-cooking/Vibe-Cooking12.png",
      "/works/vibe-cooking/Vibe-Cooking13.png",
      "/works/vibe-cooking/Vibe-Cooking14.png",
      "/works/vibe-cooking/Vibe-Cooking15.png",
    ],
  },
  {
    id: "sharelounge",
    title: "TSUTAYA SHARE LOUNGE",
    imagePages: [
      "/works/sharelounge/sharelounge.png",
      "/works/sharelounge/sharelounge2.png",
      "/works/sharelounge/sharelounge3.png",
      "/works/sharelounge/sharelounge4.png",
      "/works/sharelounge/sharelounge5.png",
      "/works/sharelounge/sharelounge6.png",
      "/works/sharelounge/sharelounge7.png",
      "/works/sharelounge/sharelounge8.png",
      "/works/sharelounge/sharelounge9.png",
      "/works/sharelounge/sharelounge10.png",
      "/works/sharelounge/sharelounge11.png",
    ],
  },
  {
    id: "honkore",
    title: "ほんコレ 3年次PBL学習「すうぃふと2024」制作アプリ",
    imagePages: [
      "/works/honkore/ほんコレ.png",
      "/works/honkore/ほんコレ2.png",
      "/works/honkore/ほんコレ3.png",
      "/works/honkore/ほんコレ4.png",
      "/works/honkore/ほんコレ5.png",
      "/works/honkore/ほんコレ6.png",
      "/works/honkore/ほんコレ7.png",
      "/works/honkore/ほんコレ8.png",
      "/works/honkore/ほんコレ9.png",
    ],
  },
  {
    id: "cha-cha",
    pdfPath: "/works/cha-cha.pdf",
    title: "【電子工作】大学生を励ます仮想生物を創造",
  },
  {
    id: "business-card-ver2",
    imagePages: ["/works/business-card.png"],
    title: "名刺デザイン - ver2.0",
  },
  {
    id: "chiekabanana",
    title:
      "ジェスチャーゲーム×Arduinoを組み合わせた新しいアソビの考案「チエカバナナ」",
    imagePages: [
      "/works/chiekabanana/chiekabanana.png",
      "/works/chiekabanana/chiekabanana2.png",
      "/works/chiekabanana/chiekabanana3.png",
    ],
  },
  {
    id: "hinyariseijin",
    title: "ひんやり星人",
    imagePages: [
      "/works/hinyariseijin/hinyariseijin.png",
      "/works/hinyariseijin/hinyariseijin2.png",
    ],
  },
  {
    id: "ad",
    title: "広告デザイン",
    imagePages: ["/works/ad/ad.png", "/works/ad/ad2.png"],
  },

  {
    id: "hoshisen",
    title: "星閃",
    imagePages: [
      "/works/hoshisen/星閃1.png",
      "/works/hoshisen/星閃2.png",
      "/works/hoshisen/星閃3.png",
      "/works/hoshisen/星閃4.png",
      "/works/hoshisen/星閃5.png",
      "/works/hoshisen/星閃6.png",
      "/works/hoshisen/星閃7.png",
      "/works/hoshisen/星閃8.png",
      "/works/hoshisen/星閃9.png",
      "/works/hoshisen/星閃10.png",
    ],
  },
  {
    id: "yutoyu",
    title: "湯と結",
    imagePages: [
      "/works/yutoyu/yutoyu1.png",
      "/works/yutoyu/yutoyu2.png",
      "/works/yutoyu/yutoyu3.png",
      "/works/yutoyu/yutoyu4.png",
      "/works/yutoyu/yutoyu5.png",
      "/works/yutoyu/yutoyu6.png",
      "/works/yutoyu/yutoyu7.png",
    ],
  },
  {
    id: "business-card",
    pdfPath: "/works/business-card.pdf",
    title: "名刺デザイン - ver1.0",
  },
  {
    id: "illustration",
    pdfPath: "/works/illustration.pdf",
    title: "illustration",
  },
];

export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
