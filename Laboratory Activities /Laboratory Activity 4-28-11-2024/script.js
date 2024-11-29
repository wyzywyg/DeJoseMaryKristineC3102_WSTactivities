 document.addEventListener('DOMContentLoaded', () => {
            const slideshowImages = document.querySelectorAll('.story-image');
            let currentImageIndex = 0;

            function rotateSlideshow() {
                slideshowImages[currentImageIndex].classList.remove('active');
                currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
                slideshowImages[currentImageIndex].classList.add('active');
            }

            setInterval(rotateSlideshow, 3000);

            const audio = document.getElementById('backgroundMusic');
            const playPauseBtn = document.getElementById('playPauseBtn');

            playPauseBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playPauseBtn.textContent = 'Pause Audio';
                } else {
                    audio.pause();
                    playPauseBtn.textContent = 'Play Audio';
                }
            });
        });
