// PDFファイルのリスト（後で動的に取得できるようにする）
export const works = [
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
    pdfPath: "/works/chiekabanana.pdf",
    title:
      "ジェスチャーゲーム×Arduinoを組み合わせた新しいアソビの考案「チエカバナナ」",
  },
  {
    id: "illustration",
    pdfPath: "/works/illustration.pdf",
    title: "illustration",
  },
];

export function getWorkById(id: string) {
  return works.find((work) => work.id === id);
}
