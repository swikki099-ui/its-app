// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v2.0.0",
    APP_NAME: "ITS College ",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/50qpeyto754mo2wob8tgf/ITS_COLLEGE_v1.5.5-1.apk?rlkey=yrv7urwy7anprxc23e4o7kvhf&st=fm93mvyj&dl=1",
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
