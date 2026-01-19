document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Shared: Mobile Menu
    // ----------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ----------------------------------------------------
    // Shared: Sticky Header Link Active State
    // ----------------------------------------------------
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Simple check: active if href matches filename
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // You might need to style .active in CSS
        }
    });


    // ----------------------------------------------------
    // Page: Home (index.html) -> Typing Effect
    // ----------------------------------------------------
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const fullText = "Honest documentaries, told with a human gaze.";
        let currentIndex = 0;

        function typeWriter() {
            if (currentIndex < fullText.length) {
                typingTextElement.textContent += fullText.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        setTimeout(typeWriter, 500); // Small delay before start
    }


    // ----------------------------------------------------
    // Page: Films (films.html)
    // ----------------------------------------------------

    // 1. Rotating Words
    const rotatingWordEl = document.getElementById('rotating-word');
    if (rotatingWordEl) {
        const words = ['Documentaries', 'Biographical Films', 'Music Portraits', 'Portraits'];
        let wordIndex = 0;

        setInterval(() => {
            rotatingWordEl.classList.remove('opacity-100');
            rotatingWordEl.classList.add('opacity-0');

            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                rotatingWordEl.textContent = words[wordIndex];
                rotatingWordEl.classList.remove('opacity-0');
                rotatingWordEl.classList.add('opacity-100');
            }, 500); // Wait for fade out
        }, 3000);
    }

    // 2. Hero Background Slider
    const heroBgContainer = document.getElementById('hero-bg-container');
    if (heroBgContainer) {
        const thumbnails = [
            'assets/images/films/nicolas-economou.png',
            'assets/images/films/xp-school.jpg',
            'assets/images/films/red-oil.jpg',
            'assets/images/films/worker.jpg'
        ];
        let thumbIndex = 0;

        // Set initial
        heroBgContainer.style.backgroundImage = `url('${thumbnails[0]}')`;
        heroBgContainer.style.backgroundSize = 'cover';
        heroBgContainer.style.backgroundPosition = 'center';

        setInterval(() => {
            thumbIndex = (thumbIndex + 1) % thumbnails.length;
            // Simple fade transition by updating bg image
            // ideally we'd double buffer divs for smooth crossfade, 
            // but for "simple html/js" this swaps the image. 
            // If smooth fade is critical, we can add a class to fade out/in.
            heroBgContainer.style.opacity = '0';
            setTimeout(() => {
                heroBgContainer.style.backgroundImage = `url('${thumbnails[thumbIndex]}')`;
                heroBgContainer.style.opacity = '1';
            }, 500);
        }, 4000);
    }

    // 3. Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn, .films-filter-btn');
    const filmItems = document.querySelectorAll('.film-item');
    const noFilmsMsg = document.getElementById('no-films-msg');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-[#001A28]', 'text-white', 'border-[#001A28]');
                    b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
                });

                // Add active class to clicked
                btn.classList.add('active', 'bg-[#001A28]', 'text-white', 'border-[#001A28]');
                btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');

                const filterValue = btn.getAttribute('data-filter');
                let visibleCount = 0;

                filmItems.forEach(item => {
                    const categories = item.getAttribute('data-category'); // could be "doc, bio" etc.
                    // For simplicity, assuming single category or simple match
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.style.display = 'flex';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                if (noFilmsMsg) {
                    noFilmsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
                }
            });
        });
    }
    // ----------------------------------------------------
    // Page: Brief (brief.html) -> Form Handling
    // ----------------------------------------------------
    const briefForm = document.getElementById('brief-form');
    const formContent = document.getElementById('form-content');
    const successMsg = document.getElementById('success-msg');

    if (briefForm && formContent && successMsg) {
        briefForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // In a real scenario, we'd use fetch() to send the data.
            // For this static version, we simulate success.
            const formData = new FormData(briefForm);
            console.log('Form Submitted:', Object.fromEntries(formData));

            // Hide form, show success
            formContent.classList.add('hidden');
            successMsg.classList.remove('hidden');

            // Scroll to top of message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // ----------------------------------------------------
    // Shared: Video Modal Playback
    // ----------------------------------------------------
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const closeModalBtn = document.getElementById('close-modal');

    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');
    const modalDuration = document.getElementById('modal-duration');
    const modalYear = document.getElementById('modal-year');

    if (videoCards.length > 0 && videoModal && videoIframe && closeModalBtn) {
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const url = card.getAttribute('data-video-url');
                const title = card.getAttribute('data-title');
                const desc = card.getAttribute('data-description');
                const cat = card.getAttribute('data-category');
                const duration = card.getAttribute('data-duration');
                const year = card.getAttribute('data-year');

                console.log('Video card clicked:', title);
                console.log('Video URL:', url);

                if (url) {
                    console.log('Setting iframe src to:', url);
                    videoIframe.src = url;
                    if (modalTitle) modalTitle.textContent = title || '';
                    if (modalDescription) modalDescription.textContent = desc || '';
                    if (modalCategory) modalCategory.textContent = cat || '';
                    if (modalDuration) modalDuration.textContent = duration || '';
                    if (modalYear) modalYear.textContent = year || '';

                    console.log('Showing modal...');
                    videoModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent scroll
                } else {
                    console.warn('No video URL found for this card.');
                }
            });
        });

        const closeModal = () => {
            videoModal.classList.add('hidden');
            videoIframe.src = ''; // Stop video playback
            document.body.style.overflow = 'unset';
        };

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        // Close on overlay click
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // ----------------------------------------------------
    // Scroll Animations
    // ----------------------------------------------------
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale');
    
    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));
    }

    // ----------------------------------------------------
    // Back to Top Button
    // ----------------------------------------------------
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
