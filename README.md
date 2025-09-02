project log

https://www.templatemonster.com/website-templates/caffeine-corner-captivating-coffee-shop-html-template-343279.html 에서 가져옴
페이지소스 우선 들고와서 긁어올것들 긁어오고 필요한 부분 제외 첨삭 작업

demo.js 하단에 
// 페이지 로드 완료 시 프리로더 숨기기
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.classList.add("loaded"); // app.css에서 transition 적용됨
        setTimeout(() => {
            preloader.style.display = "none"; // 완전히 제거
        }, 1000); // transition 시간과 맞춤
    }
});
추가함 - 로딩창에서 넘어가지 않아서 추가하게 됨
html파일 추가하며 js파일, png파일, mp4파일 추가로 긁어옴
어느정도 긁어오기 완료 이제 오류확인하며 수정하기만 남음(기본틀 작성 끝)
이후 안되는것들 css/js파일들 찾아서 수정