// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v2.0.5",
    APP_NAME: "ITS College ",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/bd8mh9w5gy3j2otdpk507/new_v2.0.5.apk?rlkey=11o6oi87oxwag73mp3hrdw5zy&st=0dvtsux8&dl=1",
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
