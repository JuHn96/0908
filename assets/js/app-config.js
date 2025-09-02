// app-config.js
window.__app__ = window.__app__ || {};

window.__app__ = {
    language: "en",
    apiLocale: "en",
    analytics: { pageType: "Demo" },
    js: {
        // 로컬 환경에서 불필요한 외부 TM 서버 호출 제거
        cookieDomain: null,
        liveDemoDomain: null,
        fontPreviewDomain: null,
        domain: null,
        api: {},

        // 외부 결제/광고/recaptcha 등 제거
        revive: null,
        recaptchaSiteKey: null,
        centrifuge: null,
        stripe: null,
        consulUrl: null,
        currency: { code: "USD", rate: 1 },
        abExperimentId: null,
        abExperimentInit: false,
    },
};

// 예시: 로컬 페이지 분석/추적용 데이터레이어 초기화
window.addEventListener("load", function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        pageType: "Demo",
        portalName: "All",
        portalContent: "All",
        categoryName: "Other",
        authorGAId: "G-384919758",
    });
});