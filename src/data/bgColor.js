// 이미지 파일들을 import 해야 빌드 시 올바른 경로로 처리됩니다.
// 파일 경로(../assets/...)는 실제 프로젝트 구조에 맞춰 확인해주세요.
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

// weatherId: OpenWeather 코드 (예: 500, 801, 611, 800 등)
export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=2000&auto=format&fit=crop')"; // 맑음

    const group = Math.floor(weatherId / 100); // 2,3,5,6,7,8...

    switch (group) {
        case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
            return `url(${img1})`;
        case 3: // 이슬비: 옅은 청록 → 연한 하늘
            return `url(${img2})`;
        case 5: // 비: 블루 톤 딥 → 라이트
            return `url(${img3})`;
        case 6: // 눈: 화이트에 살짝 아이스블루
            return `url(${img4})`;
        case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
            return `url(${img5})`;
        case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
            return `url(${img6})`;
        default:
            return `url(${img6})`;
    }
}