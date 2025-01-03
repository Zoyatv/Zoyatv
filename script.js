// Function to create animated background cards
function createBackgroundCards() {
    const container = document.querySelector('.background-animation');
    const cardCount = 15; // Number of floating cards
 
    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'floating-card';
        
        // Randomize card properties
        card.style.left = `${Math.random() * 100}%`;
        card.style.top = `${Math.random() * 100}%`;
        card.style.animationDelay = `${Math.random() * 5}s`;
        card.style.animationDuration = `${10 + Math.random() * 20}s`;
        
        container.appendChild(card);
    }
}

// Function to apply the theme based on system preference
function applySystemTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Function to toggle the theme with smooth transition
function toggleTheme() {
    // Add transition class before changing theme
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    document.querySelector('.theme-toggle').style.transition = 'background-color 0.5s ease, border-color 0.5s ease';
    
    // Toggle dark class
    document.body.classList.toggle('dark');
    
    // Save theme preference
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.body.style.transition = '';
        document.querySelector('.theme-toggle').style.transition = '';
    }, 500);
}

// Function to create background effects
function createBackgroundEffects() {
    const container = document.querySelector('.background-animation');
    const cardCount = 10;
    const glowCount = 5;

    // Create floating orbs
    for (let i = 0; i < cardCount; i++) {
        const card = document.createElement('div');
        card.className = 'floating-card';
        
        card.style.left = `${Math.random() * 100}%`;
        card.style.top = `${Math.random() * 100}%`;
        card.style.animationDelay = `${Math.random() * 5}s`;
        card.style.animationDuration = `${8 + Math.random() * 10}s`;
        
        container.appendChild(card);
    }

    // Create glow effects
    for (let i = 0; i < glowCount; i++) {
        const glow = document.createElement('div');
        glow.className = 'glow-effect';
        
        glow.style.left = `${Math.random() * 100}%`;
        glow.style.top = `${Math.random() * 100}%`;
        glow.style.animationDelay = `${Math.random() * 4}s`;
        
        container.appendChild(glow);
    }
}

// Function to create particles
function createParticles() {
    const container = document.querySelector('.background-animation');
    const particleCount = 100; // Number of particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomize particle properties
        particle.style.width = `${Math.random() * 10 + 5}px`; // Random size
        particle.style.height = particle.style.width; // Keep it circular
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
    }
}

// Initialize everything when DOM loads
window.addEventListener('DOMContentLoaded', () => {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        applySystemTheme(); // Apply system theme if no saved preference
    }
    
    // Create background cards
    createBackgroundCards();
    
    // Create background effects
    createBackgroundEffects();
    
    // Create particles
    createParticles();
    
    // Add theme toggle listener
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
});

// Listen for changes in system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Update saved theme
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light'); // Update saved theme
    }
});

// Dynamic Greeting Based on Time with Animation
window.onload = () => {
    const hours = new Date().getHours();
    let greeting;
    if (hours >= 0 && hours < 5) {
        greeting = "Good Night, Cuties!";
    } else if (hours >= 5 && hours < 12) {
        greeting = "Good Morning, Cuties!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon, Cuties!";
    } else if (hours >= 17 && hours < 21) {
        greeting = "Good Evening, Cuties!";
    } else {
        greeting = "Good Night, Cuties!";
    }

    const greetingElement = document.createElement("p");
    greetingElement.textContent = greeting;
    greetingElement.style.fontSize = "32px  ";
    greetingElement.style.color = "#ff69b4";
    greetingElement.style.marginTop = "20px";
    greetingElement.style.opacity = "0";
    greetingElement.style.transition = "opacity 1s ease-in-out";
    greetingElement.style.textAlign = "center"; // Center text alignment

    // Append the greeting to the greeting-container div
    const greetingContainer = document.querySelector('.greeting-container');
    greetingContainer.appendChild(greetingElement);

    // Fade-in animation for greeting
    setTimeout(() => {
        greetingElement.style.opacity = "1";
    }, 500);
};

