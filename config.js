// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v5.0.0",
    APP_NAME: "ITS College ",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/tpt2dwd98wazokn8wchx4/v5-fixed.apk?rlkey=lus2wr9ebha79543m3bgj7st9&st=y3phl15k&dl=1",
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
