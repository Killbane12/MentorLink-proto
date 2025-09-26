document.addEventListener('DOMContentLoaded', () => {
    // --- Demo Auth State (localStorage) ---
    const auth = {
        get role() { return localStorage.getItem('ml_role'); },
        set role(v) { if (v) localStorage.setItem('ml_role', v); else localStorage.removeItem('ml_role'); },
        get isLoggedIn() { return !!localStorage.getItem('ml_role'); },
        logout() { localStorage.removeItem('ml_role'); }
    };

    // Show/hide protected/guest UI
    function renderAuthUI() {
        document.querySelectorAll('.requires-auth').forEach(el => {
            el.style.display = auth.isLoggedIn ? '' : 'none';
        });
        document.querySelectorAll('.requires-guest').forEach(el => {
            el.style.display = auth.isLoggedIn ? 'none' : '';
        });

        // Point dashboard link based on role and current location
        const dashLink = document.getElementById('dashboardLink');
        const isInPagesDir = window.location.pathname.includes('/pages/');
        if (dashLink) {
            const dashboardFile = auth.role === 'mentor' ? 'mentor_dashboard.html' : 'student_dashboard.html';
            dashLink.href = isInPagesDir ? dashboardFile : `pages/${dashboardFile}`;
            dashLink.parentElement.style.display = auth.isLoggedIn ? '' : 'none';
        }

        document.querySelectorAll('[data-logout]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                auth.logout();
                window.location.href = isInPagesDir ? '../index.html' : 'index.html';
            });
        });
    }
    // Initial auth UI render and simple guards
    renderAuthUI();

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const protectedPages = ['chat.html','student_dashboard.html','mentor_dashboard.html','skill_assessment.html','career_suggestions.html'];
    const isInPagesDir = window.location.pathname.includes('/pages/');
    
    if (!auth.isLoggedIn && protectedPages.includes(currentPage)) {
        window.location.href = isInPagesDir ? 'login.html' : 'pages/login.html';
    }
    if (auth.isLoggedIn && currentPage === 'login.html') {
        const dashboardPath = auth.role === 'mentor' ? 'mentor_dashboard.html' : 'student_dashboard.html';
        window.location.href = isInPagesDir ? dashboardPath : `pages/${dashboardPath}`;
    }

    // --- Global Click Listener to Close Popups ---
    window.addEventListener('click', function(e) {
        document.querySelectorAll('.popup.show, .dropdown-menu.show').forEach(openPopup => {
            if (!openPopup.parentElement.contains(e.target)) {
                openPopup.classList.remove('show');
            }
        });
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- Active Navbar Link ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // --- Generic Popup/Dropdown Toggle ---
    function setupPopup(triggerClass, popupClass) {
        const triggers = document.querySelectorAll(triggerClass);
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.stopPropagation();
                const popup = trigger.querySelector(popupClass);
                // Close other popups before opening a new one
                document.querySelectorAll('.popup.show, .dropdown-menu.show').forEach(p => {
                    if (p !== popup) p.classList.remove('show');
                });
                if (popup) {
                    popup.classList.toggle('show');
                }
            });
        });
    }

    setupPopup('.profile-menu-container', '.dropdown-menu');
    setupPopup('.notification-container', '.popup');


    // --- Simulated Login Logic ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const studentBtn = document.getElementById('student-toggle');
        const mentorBtn = document.getElementById('mentor-toggle');
        let userRole = 'student'; // default role

        studentBtn.addEventListener('click', () => {
            userRole = 'student';
            studentBtn.classList.add('active');
            mentorBtn.classList.remove('active');
        });

        mentorBtn.addEventListener('click', () => {
            userRole = 'mentor';
            mentorBtn.classList.add('active');
            studentBtn.classList.remove('active');
        });

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            auth.role = userRole; // store auth
            const dashboardFile = userRole === 'student' ? 'student_dashboard.html' : 'mentor_dashboard.html';
            const isInPagesDir = window.location.pathname.includes('/pages/');
            window.location.href = isInPagesDir ? dashboardFile : `pages/${dashboardFile}`;
        });
    }
    
    // --- Dashboard Tabs ---
    const tabContainers = document.querySelectorAll('.tabs');
    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-btn');
        const tabContents = container.parentElement.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-tab');

                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                tabContents.forEach(content => {
                    if (content.id === target) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    });

});