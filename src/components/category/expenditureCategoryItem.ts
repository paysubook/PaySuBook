const images = require.context(
  '../../constants/img/CategoryIcon', // 이미지 파일이 위치한 폴더 경로
  false, // 하위 폴더 포함 여부
  /\.(png|jpe?g|svg)$/
);

export const expenditureCategoryIcons = [
  { icon: images('./coffee.png'), label: '커피' },
  { icon: images('./dessert.png'), label: '디저트' },
  { icon: images('./alcohol.png'), label: '음주' },
  { icon: images('./meal.png'), label: '식사' },
  { icon: images('./culture.png'), label: '문화생활' },
  { icon: images('./traffic.png'), label: '교통비' },
  { icon: images('./etc.png'), label: '기타' },
  { icon: images('./living_expenses.png'), label: '생활비' },
];
