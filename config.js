// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v2.4.1",
    APP_NAME: "ITS College Dashboard",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/jyr801q6evw8x6zhqb712/v1.0.5.apk?rlkey=3k63xjma2srb7jbusgje78mm4&st=ynbtfyb1&dl=1",
    DEV_NAME: "Neuro Dev Studio",
    SUPPORT_EMAIL: "shadowknight.gov@gmail.com",
    RATINGS_VALUE: "4.8",
    TOTAL_REVIEWS: "120+",
    TOTAL_DOWNLOADS: "5K+"
};

// This helps centralize values so you only update here or via a build script
if (typeof window !== 'undefined') {
    window.APP_CONFIG = CONFIG;
}
