const images = require.context(
  '../../constants/img/CategoryIcon', // 이미지 파일이 위치한 폴더 경로
  false, // 하위 폴더 포함 여부
  /\.(png|jpe?g|svg)$/
);

export const profitCategoryIcons = [
  //카테고리 아이콘
  { icon: images('./invest.png'), label: '투자' },
  { icon: images('./sideline.png'), label: '부업' },
  { icon: images('./salary.png'), label: '월급' },
  { icon: images('./etc.png'), label: '기타' },
];
