// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v5.0.0",
    APP_NAME: "ITS College ",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/9ffxhlfe3jifwvbmi1b2y/v5-release-fix.apk?rlkey=axfssu8rjqa6puw67sg7so2pc&st=u2nhyicz&dl=1",
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
