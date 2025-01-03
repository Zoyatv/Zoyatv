// lovely-effects.js - Adds super cute and lovely effects!
(() => {
    // Create sparkle elements that follow the cursor
    function createSparkleEffect() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'sparkle-container';
        document.body.appendChild(sparkleContainer);

        document.addEventListener('mousemove', (e) => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            sparkleContainer.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1000);
        });
    }

    // Add floating hearts background
    function createFloatingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'floating-hearts-container';
        document.body.appendChild(heartsContainer);

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heartsContainer.appendChild(heart);
        }
    }

    // Add lovely hover effects to profile picture
    function enhanceProfilePicture() {
        const profilePic = document.querySelector('.profile-picture');
        if (profilePic) {
            profilePic.addEventListener('mouseover', () => {
                createHeartBurst(profilePic);
            });
        }
    }

    // Create heart burst effect
    function createHeartBurst(element) {
        const hearts = ['❤️', '💖', '💝', '💕', '💗'];
        const rect = element.getBoundingClientRect();

        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = (rect.left + rect.width/2) + 'px';
            heart.style.top = (rect.top + rect.height/2) + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }
    }

    // Initialize everything with new styles
    function init() {
        // Add new lovely styles
        const lovelyStyles = document.createElement('style');
        lovelyStyles.textContent = `
            /* Sparkle Effect */
            .sparkle {
                position: fixed;
                pointer-events: none;
                width: 10px;
                height: 10px;
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%,
                    rgba(255,192,203,0.8) 50%,
                    transparent 100%);
                border-radius: 50%;
                animation: sparkleAnim 1s ease-out forwards;
                z-index: 9999;
            }

            @keyframes sparkleAnim {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.5) rotate(180deg);
                    opacity: 0;
                }
            }

            /* Floating Hearts */
            .floating-hearts-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                overflow: hidden;
            }

            .floating-heart {
                position: absolute;
                animation: floatHeart 15s linear infinite;
                opacity: 0.6;
                filter: drop-shadow(0 0 5px rgba(255,192,203,0.5));
            }

            @keyframes floatHeart {
                0% {
                    transform: translateY(100vh) scale(0.5);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100px) scale(1.2);
                    opacity: 0;
                }
            }

            /* Burst Hearts */
            .burst-heart {
                position: fixed;
                pointer-events: none;
                animation: burstAnim 2s ease-out forwards;
                z-index: 9999;
            }

            @keyframes burstAnim {
                0% {
                    transform: scale(0) translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.5) translate(
                        ${Math.random() * 200 - 100}px,
                        ${Math.random() * -200 - 100}px
                    );
                    opacity: 0;
                }
            }

            /* Enhanced Profile Picture */
            .profile-picture {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .profile-picture:hover {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 0 30px rgba(255,192,203,0.8);
            }

            /* Lovely Title Animation */
            h1 {
                animation: lovelyPulse 2s infinite;
            }

            @keyframes lovelyPulse {
                0%, 100% {
                    text-shadow: 0 0 10px rgba(255,192,203,0.8),
                                0 0 20px rgba(255,192,203,0.5),
                                0 0 30px rgba(255,192,203,0.3);
                }
                50% {
                    text-shadow: 0 0 15px rgba(255,192,203,0.9),
                                0 0 25px rgba(255,192,203,0.6),
                                0 0 35px rgba(255,192,203,0.4);
                }
            }

            /* Link Hover Enhancement */
            .link {
                transition: all 0.3s ease;
            }

            .link:hover {
                transform: scale(1.05) translateY(-5px);
                box-shadow: 0 10px 20px rgba(255,192,203,0.3);
            }

            /* Dark Mode Adjustments */
            body.dark .sparkle {
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%,
                    rgba(147,197,253,0.8) 50%,
                    transparent 100%);
            }

            body.dark .floating-heart {
                filter: drop-shadow(0 0 5px rgba(147,197,253,0.5));
            }
        `;
        document.head.appendChild(lovelyStyles);

        // Initialize all effects
        createSparkleEffect();
        createFloatingHearts();
        enhanceProfilePicture();
    }

    // Start when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// lovely-effects.js - Adds super cute and lovely effects!
(() => {
    // Create sparkle elements that follow the cursor
    function createSparkleEffect() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.className = 'sparkle-container';
        document.body.appendChild(sparkleContainer);

        document.addEventListener('mousemove', (e) => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            sparkleContainer.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1000);
        });
    }

    // Add floating hearts background
    function createFloatingHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'floating-hearts-container';
        document.body.appendChild(heartsContainer);

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heartsContainer.appendChild(heart);
        }
    }

    // Add lovely hover effects to profile picture
    function enhanceProfilePicture() {
        const profilePic = document.querySelector('.profile-picture');
        if (profilePic) {
            profilePic.addEventListener('mouseover', () => {
                createHeartBurst(profilePic);
            });
        }
    }

    // Create heart burst effect
    function createHeartBurst(element) {
        const hearts = ['❤️', '💖', '💝', '💕', '💗'];
        const rect = element.getBoundingClientRect();

        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = (rect.left + rect.width/2) + 'px';
            heart.style.top = (rect.top + rect.height/2) + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }
    }

    // Initialize everything with new styles
    function init() {
        // Add new lovely styles
        const lovelyStyles = document.createElement('style');
        lovelyStyles.textContent = `
            /* Sparkle Effect */
            .sparkle {
                position: fixed;
                pointer-events: none;
                width: 10px;
                height: 10px;
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%,
                    rgba(255,192,203,0.8) 50%,
                    transparent 100%);
                border-radius: 50%;
                animation: sparkleAnim 1s ease-out forwards;
                z-index: 9999;
            }

            @keyframes sparkleAnim {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.5) rotate(180deg);
                    opacity: 0;
                }
            }

            /* Floating Hearts */
            .floating-hearts-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                overflow: hidden;
            }

            .floating-heart {
                position: absolute;
                animation: floatHeart 15s linear infinite;
                opacity: 0.6;
                filter: drop-shadow(0 0 5px rgba(255,192,203,0.5));
            }

            @keyframes floatHeart {
                0% {
                    transform: translateY(100vh) scale(0.5);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100px) scale(1.2);
                    opacity: 0;
                }
            }

            /* Burst Hearts */
            .burst-heart {
                position: fixed;
                pointer-events: none;
                animation: burstAnim 2s ease-out forwards;
                z-index: 9999;
            }

            @keyframes burstAnim {
                0% {
                    transform: scale(0) translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.5) translate(
                        ${Math.random() * 200 - 100}px,
                        ${Math.random() * -200 - 100}px
                    );
                    opacity: 0;
                }
            }

            /* Enhanced Profile Picture */
            .profile-picture {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .profile-picture:hover {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 0 30px rgba(255,192,203,0.8);
            }

            /* Lovely Title Animation */
            h1 {
                animation: lovelyPulse 2s infinite;
            }

            @keyframes lovelyPulse {
                0%, 100% {
                    text-shadow: 0 0 10px rgba(255,192,203,0.8),
                                0 0 20px rgba(255,192,203,0.5),
                                0 0 30px rgba(255,192,203,0.3);
                }
                50% {
                    text-shadow: 0 0 15px rgba(255,192,203,0.9),
                                0 0 25px rgba(255,192,203,0.6),
                                0 0 35px rgba(255,192,203,0.4);
                }
            }

            /* Link Hover Enhancement */
            .link {
                transition: all 0.3s ease;
            }

            .link:hover {
                transform: scale(1.05) translateY(-5px);
                box-shadow: 0 10px 20px rgba(255,192,203,0.3);
            }

            /* Dark Mode Adjustments */
            body.dark .sparkle {
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%,
                    rgba(147,197,253,0.8) 50%,
                    transparent 100%);
            }

            body.dark .floating-heart {
                filter: drop-shadow(0 0 5px rgba(147,197,253,0.5));
            }
        `;
        document.head.appendChild(lovelyStyles);

        // Initialize all effects
        createSparkleEffect();
        createFloatingHearts();
        enhanceProfilePicture();
    }

    // Start when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();