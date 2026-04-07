// Frontend Configuration (acts as a bridge for .env values in static HTML)
const CONFIG = {
    APP_VERSION: "v1.5.5",
    APP_NAME: "ITS College ",
    DOWNLOAD_URL: "https://www.dropbox.com/scl/fi/4b3r6us92kyra7m4vevy2/Its_college_v1.5.5.apk?rlkey=xsm193cfgkciq1kn9mct5blc5&st=y8n14vdp&dl=1",
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
