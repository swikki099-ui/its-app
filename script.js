document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('install-btn');
    
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            const originalText = installBtn.innerText;
            installBtn.disabled = true;
            installBtn.style.backgroundColor = '#dadce0';
            installBtn.style.color = '#5f6368';
            installBtn.innerText = 'Installing...';

            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                installBtn.innerText = `Installing... ${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                    installBtn.innerText = 'Open';
                    installBtn.style.backgroundColor = '#01875f';
                    installBtn.style.color = 'white';
                    installBtn.disabled = false;
                    
                    // Trigger APK download
                    const downloadLink = document.createElement('a');
                    downloadLink.href = 'assets/app/v1.0.0.apk';
                    downloadLink.download = 'ITS_College_v1.0.0.apk';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    
                    setTimeout(() => {
                        alert('Download started! You can now open the installer.');
                    }, 500);
                }
            }, 100);
        });
    }

    // Carousel Snap Logging (Optional - for performance tracing)
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.addEventListener('scroll', () => {
            // Can add snap-point indicators here if needed
        });
    }
});
