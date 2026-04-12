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
    id: "cha-cha",
    pdfPath: "/works/cha-cha.pdf",
    title: "【電子工作】大学生を励ます仮想生物を創造",
  },
  {
    id: "business-card",
    pdfPath: "/works/business-card.pdf",
    title: "名刺デザイン - ver1.0",
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
    id: "illustration",
    pdfPath: "/works/illustration.pdf",
    title: "illustration",
  },
  {
    id: "ad",
    title: "広告デザイン",
    imagePages: ["/works/ad/ad.png", "/works/ad/ad2.png"],
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
    id: "hinyariseijin",
    title: "ひんやり星人",
    imagePages: [
      "/works/hinyariseijin/hinyariseijin.png",
      "/works/hinyariseijin/hinyariseijin2.png",
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
];

export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}
