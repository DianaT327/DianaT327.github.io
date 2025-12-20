// Функции для меню
        function toggleMenu() {
            const nav = document.querySelector('nav ul');
            const mobileHeader = document.querySelector('.mobile-menu-header');
            nav.classList.toggle('active');
            mobileHeader.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Блокируем прокрутку тела при открытом меню
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        // Закрытие меню при клике на ссылку
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });

        // Закрытие меню при клике вне области
        document.addEventListener('click', function(e) {
            const nav = document.querySelector('nav');
            const burger = document.querySelector('.burger-menu');
            const closeBtn = document.querySelector('.menu-close-btn');
            
            if (!nav.contains(e.target) && !burger.contains(e.target) && 
                !closeBtn.contains(e.target) && document.body.classList.contains('menu-open')) {
                toggleMenu();
            }
        });

        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
                toggleMenu();
            }
        });

        // Адаптация при изменении размера окна
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && document.body.classList.contains('menu-open')) {
                toggleMenu();
            }
        });

        // Функции для уведомлений
        function toggleNotifications() {
            const dropdown = document.querySelector('.notifications-dropdown');
            dropdown.classList.toggle('active');
        }

        function closeNotifications() {
            const dropdown = document.querySelector('.notifications-dropdown');
            dropdown.classList.remove('active');
        }

        function markAsRead(button) {
            const notificationItem = button.closest('.notification-item');
            notificationItem.classList.remove('unread');
            
            // Обновляем счетчик
            const unreadCount = document.querySelectorAll('.notification-item.unread').length;
            const badge = document.querySelector('.notification-badge');
            const countElement = document.querySelector('.notifications-count');
            
            if (unreadCount > 0) {
                badge.textContent = unreadCount;
                countElement.textContent = unreadCount + ' новых';
            } else {
                badge.style.display = 'none';
                countElement.textContent = 'Нет новых';
                countElement.style.background = '#4CAF50';
            }
            
            // Закрываем кнопку
            button.style.display = 'none';
        }

        // Закрытие уведомлений при клике вне области
        document.addEventListener('click', function(e) {
            const notificationsContainer = document.querySelector('.notifications-container');
            const dropdown = document.querySelector('.notifications-dropdown');
            
            if (!notificationsContainer.contains(e.target) && dropdown.classList.contains('active')) {
                closeNotifications();
            }
        });

        // Останавливаем всплытие при клике внутри уведомлений
        document.querySelector('.notifications-dropdown').addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Функция для переворота карточки
        function flipCard(card) {
            card.classList.toggle('flipped');
        }

        // Функция для перехода к подробной информации
        function showDetails(sectionId, event) {
            if (event) {
                event.stopPropagation();
            }
            
            // Закрываем все карточки перед переходом
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('flipped');
            });
            
            // Плавный скролл к нужному разделу
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Добавляем подсветку секции
                    targetSection.style.transition = 'all 0.5s ease';
                    targetSection.style.background = 'rgba(255, 64, 129, 0.1)';
                    targetSection.style.boxShadow = '0 0 30px rgba(255, 64, 129, 0.3)';
                    
                    setTimeout(() => {
                        targetSection.style.background = '';
                        targetSection.style.boxShadow = '';
                    }, 2000);
                }, 300);
            } else {
                console.log('Секция не найдена:', sectionId);
            }
        }

        // Инициализация после загрузки DOM
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            // Анимация появления карточек
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                
                // Добавляем обработчик клика на всю карточку (кроме кнопок)
                card.addEventListener('click', function(e) {
                    // Если клик не по кнопке "Подробнее" - переворачиваем карточку
                    if (!e.target.closest('.details-btn')) {
                        flipCard(this);
                        
                        // Автоматический возврат через 10 секунд
                        clearTimeout(this.returnTimer);
                        this.returnTimer = setTimeout(() => {
                            if (this.classList.contains('flipped')) {
                                this.classList.remove('flipped');
                            }
                        }, 10000);
                    }
                });
            });
            
            // Обработчики для кнопок "Подробнее"
            const detailButtons = document.querySelectorAll('.details-btn');
            detailButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const sectionId = this.getAttribute('data-section');
                    showDetails(sectionId, e);
                });
            });
            
            // Отмена таймера при наведении на карточку
            cards.forEach(card => {
                card.addEventListener('mouseleave', function() {
                    clearTimeout(this.returnTimer);
                });
            });
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
