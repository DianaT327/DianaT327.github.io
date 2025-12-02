        function toggleMenu() {
            const nav = document.querySelector('nav ul');
            const mobileHeader = document.querySelector('.mobile-menu-header');
            nav.classList.toggle('active');
            mobileHeader.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
        
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                // Плавная прокрутка к секции
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Добавляем временный эффект подсветки
                section.style.transition = 'all 0.5s ease';
                section.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.5)';
                
                setTimeout(() => {
                    section.style.boxShadow = 'none';
                }, 1500);
            }
        }
        
        // Функция для переключения между типами прыжков
        function showJumpType(type) {
            // Скрыть все типы прыжков
            document.querySelectorAll('.jump-type').forEach(section => {
                section.classList.remove('active');
            });
            
            // Убрать активный класс со всех кнопок
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Показать выбранный тип и активировать кнопку
            document.getElementById(type + '-jumps').classList.add('active');
            event.target.classList.add('active');
        }

        // Функция для переключения между типами вращений
        function showSpinType(type) {
            // Скрыть все типы вращений
            document.querySelectorAll('.spin-type').forEach(section => {
                section.classList.remove('active');
            });
            
            // Убрать активный класс со всех кнопок
            document.querySelectorAll('.spins-nav .nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Показать выбранный тип и активировать кнопку
            document.getElementById(type + '-spins').classList.add('active');
            event.target.classList.add('active');
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Активируем первую кнопку по умолчанию
            document.querySelector('.nav-btn').classList.add('active');
            document.querySelector('.jump-type').classList.add('active');
            
            // Активируем первую кнопку вращений по умолчанию
            const firstSpinBtn = document.querySelector('.spins-nav .nav-btn');
            if (firstSpinBtn) {
                firstSpinBtn.classList.add('active');
            }
        });
    // Функция для переключения между типами дорожек шагов
    function showStepType(type) {
        // Скрыть все типы дорожек
        document.querySelectorAll('.step-type').forEach(section => {
            section.classList.remove('active');
        });
        
        // Убрать активный класс со всех кнопок
        document.querySelectorAll('.steps-nav .nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Показать выбранный тип и активировать кнопку
        document.getElementById(type + '-steps').classList.add('active');
        event.target.classList.add('active');
    }

    // Обновите инициализацию при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
        // Активируем первую кнопку по умолчанию
        document.querySelector('.nav-btn').classList.add('active');
        document.querySelector('.jump-type').classList.add('active');
        
        // Активируем первую кнопку вращений по умолчанию
        const firstSpinBtn = document.querySelector('.spins-nav .nav-btn');
        if (firstSpinBtn) {
            firstSpinBtn.classList.add('active');
        }
        
        // Активируем первую кнопку дорожек по умолчанию
        const firstStepBtn = document.querySelector('.steps-nav .nav-btn');
        if (firstStepBtn) {
            firstStepBtn.classList.add('active');
            document.querySelector('.step-type').classList.add('active');
        }
    });
    // JavaScript для динамического создания снежинок
    document.addEventListener('DOMContentLoaded', function() {
        const snowflakesContainer = document.querySelector('.snowflakes-container');
        const snowflakeSymbols = ['❄', '❅', '❆', '•', '·'];
        
        // Создаем больше снежинок для лучшего эффекта
        for (let i = 0; i < 30; i++) {
            createSnowflake();
        }
        
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
            
            // Случайные параметры для снежинки
            const size = Math.random() * 15 + 10; // Размер от 10px до 25px
            const left = Math.random() * 100; // Позиция по горизонтали
            const animationDuration = Math.random() * 10 + 10; // Длительность анимации
            const animationDelay = Math.random() * 5; // Задержка начала
            const opacity = Math.random() * 0.7 + 0.3; // Прозрачность
            
            // Применяем стили
            snowflake.style.cssText = `
                position: fixed;
                top: -30px;
                left: ${left}%;
                font-size: ${size}px;
                color: rgba(255, 255, 255, ${opacity});
                pointer-events: none;
                z-index: -1;
                animation: snow ${animationDuration}s linear ${animationDelay}s infinite;
                user-select: none;
            `;
            
            snowflakesContainer.appendChild(snowflake);
            
            // Удаляем снежинку после завершения анимации и создаем новую
            setTimeout(() => {
                if (snowflake.parentNode) {
                    snowflake.parentNode.removeChild(snowflake);
                    createSnowflake();
                }
            }, (animationDuration + animationDelay) * 1000);
        }
        
        // Периодически добавляем новые снежинки
        setInterval(createSnowflake, 1000);
    });   