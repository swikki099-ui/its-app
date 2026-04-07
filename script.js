document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. Dynamic Configuration Middleware ---
    const config = window.APP_CONFIG || {};

    const injectDynamicContent = () => {
        const elements = {
            'app-name-nav': config.APP_NAME,
            'app-version-badge': `${config.APP_VERSION} — Now Available`,
            'app-ratings-val': `${config.RATINGS_VALUE}<span class="material-symbols-outlined star-icon" style="font-variation-settings: 'FILL' 1;">star</span>`,
            'app-reviews-count': config.TOTAL_REVIEWS,
            'app-downloads-count': config.TOTAL_DOWNLOADS
        };

        for (const [id, value] of Object.entries(elements)) {
            const el = document.getElementById(id);
            if (el && value) {
                el.innerHTML = value;
            }
        }

        if (config.APP_NAME && !document.title.includes('|')) {
            document.title = `${config.APP_NAME} | The Unofficial App`;
        }
    };

    injectDynamicContent();

    // --- 1. Theme Configuration ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.material-symbols-outlined') : null;

    const savedTheme = localStorage.getItem('its_app_theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('its_app_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
        }
    }

    // --- 2. Premium Install Flow via Modal ---
    const installBtnHero = document.getElementById('install-btn-hero');
    const disclaimerOverlay = document.getElementById('disclaimer-overlay');
    const acceptDisclaimerBtn = document.getElementById('accept-disclaimer');
    
    const overlay = document.getElementById('install-overlay');
    const statusText = document.getElementById('install-status');
    const progressBar = document.getElementById('install-progress');
    const helperText = document.getElementById('install-helper');

    let isInstalling = false;

    if (installBtnHero) {
        installBtnHero.addEventListener('click', () => {
            if (isInstalling) return;
            // Step 1: Show Disclaimer First
            if (disclaimerOverlay) {
                disclaimerOverlay.classList.add('active');
            } else {
                startInstallProcess(); // Fallback if modal missing
            }
        });
    }

    if (acceptDisclaimerBtn) {
        acceptDisclaimerBtn.addEventListener('click', () => {
            if (disclaimerOverlay) disclaimerOverlay.classList.remove('active');
            startInstallProcess();
        });
    }

    function startInstallProcess() {
        isInstalling = true;
        
        // Show Install Progress Overlay
        overlay.classList.add('active');
        
        progressBar.style.width = '0%';
        statusText.textContent = 'Preparing Download...';
        helperText.textContent = 'Contacting server...';
        
        setTimeout(() => {
            statusText.textContent = 'Downloading APK...';
            helperText.textContent = 'Please do not close this page.';
            
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.floor(Math.random() * 15) + 5;
                if (progress >= 100) progress = 100;
                
                progressBar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    finishInstallProcess();
                }
            }, 300);

        }, 1200);
    }

    function finishInstallProcess() {
        statusText.textContent = 'Download Ready!';
        helperText.textContent = 'Check your downloads folder.';
        
        const a = document.createElement('a');
        a.href = config.DOWNLOAD_URL || 'assets/app/v1.0.0.apk';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => {
            overlay.classList.remove('active');
            isInstalling = false;
            
            if (installBtnHero) {
                installBtnHero.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Download Complete';
                installBtnHero.style.background = 'var(--text-primary)';
                installBtnHero.style.color = 'var(--bg-surface)';
            }
        }, 2000);
    }

    // --- 3. Gallery Interactions ---
    const deviceBtns = document.querySelectorAll('.device-btn');
    const galleryTrack = document.querySelector('.gallery-track');

    deviceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            deviceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (galleryTrack) {
                galleryTrack.style.opacity = '0.5';
                galleryTrack.style.transform = 'scale(0.98) translateX(-10px)';
                
                setTimeout(() => {
                    galleryTrack.style.opacity = '1';
                    galleryTrack.style.transform = 'scale(1) translateX(0)';
                    galleryTrack.scrollLeft = 0;
                }, 300);
            }
        });
    });

});
