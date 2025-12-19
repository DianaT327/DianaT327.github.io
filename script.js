// ===== ФУНКЦИИ ДЛЯ МЕНЮ =====

// Переключение мобильного меню
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const mobileHeader = document.querySelector('.mobile-menu-header');
    nav.classList.toggle('active');
    mobileHeader.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Блокировка скролла при открытом меню
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
}

// Закрытие меню при клике на ссылку (мобильные)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) toggleMenu();
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

// Закрытие меню по Escape
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


// ===== ФУНКЦИИ ДЛЯ УВЕДОМЛЕНИЙ =====

// Переключение выпадающего списка уведомлений
function toggleNotifications() {
    document.querySelector('.notifications-dropdown').classList.toggle('active');
}

// Закрытие уведомлений
function closeNotifications() {
    document.querySelector('.notifications-dropdown').classList.remove('active');
}

// Отметить уведомление как прочитанное
function markAsRead(button) {
    const notificationItem = button.closest('.notification-item');
    notificationItem.classList.remove('unread');
    
    // Обновление счетчика
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
    
    button.style.display = 'none'; // Скрываем кнопку
}

// Закрытие уведомлений при клике вне области
document.addEventListener('click', function(e) {
    const notificationsContainer = document.querySelector('.notifications-container');
    const dropdown = document.querySelector('.notifications-dropdown');
    
    if (!notificationsContainer.contains(e.target) && dropdown.classList.contains('active')) {
        closeNotifications();
    }
});

// Останавливаем всплытие в уведомлениях
document.querySelector('.notifications-dropdown').addEventListener('click', function(e) {
    e.stopPropagation();
});


// ===== ФУНКЦИИ ДЛЯ КАРТОЧЕК =====

// Переворот карточки
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Переход к детальной информации
function showDetails(sectionId, event) {
    if (event) event.stopPropagation();
    
    // Закрываем все карточки
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
    });
    
    // Плавный скролл к секции
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        setTimeout(() => {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Подсветка секции
            targetSection.style.transition = 'all 0.5s ease';
            targetSection.style.background = 'rgba(255, 64, 129, 0.1)';
            targetSection.style.boxShadow = '0 0 30px rgba(255, 64, 129, 0.3)';
            
            setTimeout(() => {
                targetSection.style.background = '';
                targetSection.style.boxShadow = '';
            }, 2000);
        }, 300);
    }
}


// ===== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ =====

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация карточек
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Клик по карточке (переворот)
        card.addEventListener('click', function(e) {
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
        
        // Отмена таймера при наведении
        card.addEventListener('mouseleave', function() {
            clearTimeout(this.returnTimer);
        });
    });
    
    // Обработчики кнопок "Подробнее"
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('data-section');
            showDetails(sectionId, e);
        });
    });
});


// ===== АНИМАЦИЯ СНЕЖИНОК =====

document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes-container');
    const snowflakeSymbols = ['❄', '❅', '❆', '•', '·'];
    
    // Создание снежинок
    for (let i = 0; i < 30; i++) {
        createSnowflake();
    }
    
    // Функция создания одной снежинки
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        
        // Случайные параметры
        const size = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Стили снежинки
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
        
        // Удаление и создание новой снежинки
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
                createSnowflake();
            }
        }, (animationDuration + animationDelay) * 1000);
    }
    
    // Периодическое добавление новых снежинок
    setInterval(createSnowflake, 1000);
});
        // Периодически добавляем новые снежинки
        setInterval(createSnowflake, 1000);

    });  
