// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    setupFormNavigation();
    setupPasswordStrength();
    setupCharacterCounters();
    setupSkaterSelection();
    setupFormValidation();
});

// Навигация по формам
function setupFormNavigation() {
    const navButtons = document.querySelectorAll('.form-nav-btn');
    const sections = ['#registration', '#vote', '#feedback'];
    
    // Обработка кликов по кнопкам навигации
    navButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех кнопок
            navButtons.forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Прокручиваем к нужной секции
            const target = this.getAttribute('href');
            const targetElement = document.querySelector(target);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Отслеживание активной секции при прокрутке
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Дебаунсинг для производительности
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let currentSection = '';
            
            sections.forEach(section => {
                const element = document.querySelector(section);
                if (!element) return;
                
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
                
                // Если элемент находится в видимой области
                if (elementTop <= 100 && elementBottom >= 100) {
                    currentSection = section;
                }
            });
            
            if (currentSection) {
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('href') === currentSection) {
                        btn.classList.add('active');
                    }
                });
            }
        }, 100);
    });
}

// Проверка силы пароля
function setupPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('password-strength-bar');
    const hint = document.getElementById('password-hint');
    
    if (!passwordInput || !strengthBar || !hint) return;
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        let hintText = '';
        
        // Проверка длины пароля
        if (password.length >= 8) strength += 25;
        
        // Проверка на заглавные буквы
        if (/[A-ZА-Я]/.test(password)) strength += 25;
        
        // Проверка на цифры
        if (/[0-9]/.test(password)) strength += 25;
        
        // Проверка на спецсимволы
        if (/[^A-Za-zА-Яа-я0-9]/.test(password)) strength += 25;
        
        // Ограничиваем максимальную силу 100%
        strength = Math.min(strength, 100);
        
        // Обновляем индикатор
        strengthBar.style.width = strength + '%';
        
        // Устанавливаем цвет и текст в зависимости от силы
        if (strength < 25) {
            strengthBar.style.background = '#ff4444';
            hintText = 'Очень слабый пароль';
        } else if (strength < 50) {
            strengthBar.style.background = '#ff4444';
            hintText = 'Слабый пароль';
        } else if (strength < 75) {
            strengthBar.style.background = '#ffbb33';
            hintText = 'Средний пароль';
        } else if (strength < 90) {
            strengthBar.style.background = '#00C851';
            hintText = 'Хороший пароль';
        } else {
            strengthBar.style.background = '#00C851';
            hintText = 'Отличный пароль!';
        }
        
        hint.textContent = hintText;
        
        // Добавляем рекомендации
        const suggestions = [];
        if (password.length < 8) suggestions.push('добавьте больше символов (минимум 8)');
        if (!/[A-ZА-Я]/.test(password)) suggestions.push('добавьте заглавные буквы');
        if (!/[0-9]/.test(password)) suggestions.push('добавьте цифры');
        if (!/[^A-Za-zА-Яа-я0-9]/.test(password)) suggestions.push('добавьте спецсимволы');
        
        if (suggestions.length > 0) {
            hint.textContent += ' — ' + suggestions.join(', ');
        }
    });
    
    // Инициализируем при загрузке
    if (passwordInput.value) {
        passwordInput.dispatchEvent(new Event('input'));
    }
}

// Счетчики символов
function setupCharacterCounters() {
    const skaterComment = document.getElementById('skater_comment');
    const messageTextarea = document.getElementById('message');
    
    // Счетчик для комментария к голосованию
    if (skaterComment) {
        const charCount = document.getElementById('char-count');
        if (charCount) {
            // Инициализируем текущее значение
            charCount.textContent = skaterComment.value.length;
            
            skaterComment.addEventListener('input', function() {
                const length = this.value.length;
                charCount.textContent = length;
                
                // Меняем цвет при приближении к лимиту
                if (length > 180) {
                    charCount.style.color = '#ff4444';
                } else if (length > 150) {
                    charCount.style.color = '#ffbb33';
                } else {
                    charCount.style.color = 'var(--text-light)';
                }
            });
        }
    }
    
    // Счетчик для сообщения обратной связи
    if (messageTextarea) {
        const messageCharCount = document.getElementById('message-char-count');
        if (messageCharCount) {
            // Инициализируем текущее значение
            messageCharCount.textContent = messageTextarea.value.length;
            
            messageTextarea.addEventListener('input', function() {
                const length = this.value.length;
                messageCharCount.textContent = length;
                
                // Меняем цвет при приближении к лимиту
                if (length > 450) {
                    messageCharCount.style.color = '#ff4444';
                } else if (length > 400) {
                    messageCharCount.style.color = '#ffbb33';
                } else {
                    messageCharCount.style.color = 'var(--text-light)';
                }
            });
        }
    }
}

// Визуальный выбор фигуристов
function setupSkaterSelection() {
    const skaterOptions = document.querySelectorAll('.skater-option');
    const skaterSelect = document.getElementById('skater_select');
    
    if (!skaterOptions.length || !skaterSelect) return;
    
    // Обработка кликов по карточкам фигуристов
    skaterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем выделение у всех
            skaterOptions.forEach(opt => {
                opt.classList.remove('selected');
                opt.style.transform = 'translateY(0)';
            });
            
            // Добавляем выделение текущему
            this.classList.add('selected');
            this.style.transform = 'translateY(-5px)';
            
            // Устанавливаем значение в select
            const value = this.getAttribute('data-value');
            skaterSelect.value = value;
            
            // Добавляем анимацию
            this.style.transition = 'all 0.3s ease';
            
            // Фокусируем select для доступности
            skaterSelect.focus();
            
            // Прокручиваем к select
            skaterSelect.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        });
    });
    
    // Синхронизация select с визуальным выбором
    skaterSelect.addEventListener('change', function() {
        const value = this.value;
        
        skaterOptions.forEach(opt => {
            opt.classList.remove('selected');
            opt.style.transform = 'translateY(0)';
            
            if (opt.getAttribute('data-value') === value) {
                opt.classList.add('selected');
                opt.style.transform = 'translateY(-5px)';
                
                // Добавляем анимацию выделения
                opt.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.2)';
                opt.style.borderColor = 'var(--primary-color)';
            } else {
                opt.style.boxShadow = '';
                opt.style.borderColor = 'var(--ice-blue)';
            }
        });
    });
    
    // Восстановление состояния при загрузке
    if (skaterSelect.value) {
        skaterSelect.dispatchEvent(new Event('change'));
    }
}

// Валидация форм
function setupFormValidation() {
    setupRegistrationForm();
    setupVoteForm();
    setupFeedbackForm();
}

function setupRegistrationForm() {
    const registrationForm = document.getElementById('registrationForm');
    if (!registrationForm) return;
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Собираем данные формы
        const username = document.getElementById('username')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const password = document.getElementById('password')?.value;
        const phone = document.getElementById('phone')?.value.trim();
        const avatar = document.getElementById('avatar')?.files[0];
        
        let isValid = true;
        const errors = [];
        
        // Валидация имени пользователя
        if (!username || username.length < 3) {
            isValid = false;
            errors.push('Имя пользователя должно содержать не менее 3 символов');
        } else if (!/^[A-Za-zА-Яа-я0-9]+$/.test(username)) {
            isValid = false;
            errors.push('Имя пользователя может содержать только буквы и цифры');
        }
        
        // Валидация email
        if (!email) {
            isValid = false;
            errors.push('Email обязателен для заполнения');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errors.push('Введите корректный email адрес');
        }
        
        // Валидация пароля
        if (!password || password.length < 8) {
            isValid = false;
            errors.push('Пароль должен содержать не менее 8 символов');
        }
        
        // Валидация телефона (необязательное поле)
        if (phone && !/^[\+]?[0-9\s\-\(\)]+$/.test(phone)) {
            isValid = false;
            errors.push('Введите корректный номер телефона');
        }
        
        // Валидация аватарки (размер файла)
        if (avatar) {
            const maxSize = 2 * 1024 * 1024; // 2MB
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            
            if (avatar.size > maxSize) {
                isValid = false;
                errors.push('Размер файла аватарки не должен превышать 2MB');
            }
            
            if (!allowedTypes.includes(avatar.type)) {
                isValid = false;
                errors.push('Разрешены только файлы форматов JPG, PNG, GIF');
            }
        }
        
        if (!isValid) {
            showErrorMessage('Пожалуйста, исправьте следующие ошибки:', errors);
            return false;
        }
        
        // Имитация отправки
        showSuccessMessage('Регистрация успешно завершена! На вашу почту отправлено письмо с подтверждением.');
        
        // Очистка формы после успешной отправки
        setTimeout(() => {
            registrationForm.reset();
            const strengthBar = document.getElementById('password-strength-bar');
            const hint = document.getElementById('password-hint');
            if (strengthBar) strengthBar.style.width = '0%';
            if (hint) hint.textContent = '';
            
            // Сбрасываем визуальный выбор
            document.querySelectorAll('.skater-option').forEach(opt => {
                opt.classList.remove('selected');
                opt.style.transform = 'translateY(0)';
            });
        }, 2000);
        
        return false;
    });
    
    // Реальная валидация на лету
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    
    if (usernameInput) {
        usernameInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && value.length < 3) {
                this.style.borderColor = '#ff4444';
                showFieldError(this, 'Минимум 3 символа');
            } else if (value && !/^[A-Za-zА-Яа-я0-9]+$/.test(value)) {
                this.style.borderColor = '#ff4444';
                showFieldError(this, 'Только буквы и цифры');
            } else {
                this.style.borderColor = '';
                clearFieldError(this);
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                this.style.borderColor = '#ff4444';
                showFieldError(this, 'Некорректный email');
            } else {
                this.style.borderColor = '';
                clearFieldError(this);
            }
        });
    }
}

function setupVoteForm() {
    const voteForm = document.getElementById('voteForm');
    if (!voteForm) return;
    
    voteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const skater = document.getElementById('skater_select')?.value;
        const comment = document.getElementById('skater_comment')?.value.trim();
        
        let isValid = true;
        const errors = [];
        
        // Валидация выбора фигуриста
        if (!skater) {
            isValid = false;
            errors.push('Пожалуйста, выберите фигуриста для голосования');
        }
        
        // Валидация комментария
        if (comment && comment.length > 200) {
            isValid = false;
            errors.push('Комментарий не должен превышать 200 символов');
        }
        
        if (!isValid) {
            showErrorMessage('Ошибка голосования:', errors);
            return false;
        }
        
        // Имитация отправки
        const skaterName = document.getElementById('skater_select').selectedOptions[0]?.text || 'выбранного фигуриста';
        showSuccessMessage(`Спасибо за ваш голос за ${skaterName}! Ваш выбор учтен в рейтинге.`);
        
        // Очистка формы
        setTimeout(() => {
            voteForm.reset();
            document.querySelectorAll('.skater-option').forEach(opt => {
                opt.classList.remove('selected');
                opt.style.transform = 'translateY(0)';
            });
            const charCount = document.getElementById('char-count');
            if (charCount) charCount.textContent = '0';
        }, 2000);
        
        return false;
    });
}

function setupFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (!feedbackForm) return;
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const subject = document.getElementById('subject')?.value;
        const message = document.getElementById('message')?.value.trim();
        const attachment = document.getElementById('attachment')?.files[0];
        
        let isValid = true;
        const errors = [];
        
        // Валидация темы
        if (!subject) {
            isValid = false;
            errors.push('Пожалуйста, выберите тему сообщения');
        }
        
        // Валидация сообщения
        if (!message) {
            isValid = false;
            errors.push('Сообщение обязательно для заполнения');
        } else if (message.length < 10) {
            isValid = false;
            errors.push('Сообщение должно содержать не менее 10 символов');
        } else if (message.length > 500) {
            isValid = false;
            errors.push('Сообщение не должно превышать 500 символов');
        }
        
        // Валидация вложения
        if (attachment) {
            const maxSize = 5 * 1024 * 1024; // 5MB
            const allowedTypes = [
                'image/jpeg', 'image/png', 
                'application/pdf', 
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'text/plain'
            ];
            
            if (attachment.size > maxSize) {
                isValid = false;
                errors.push('Размер файла не должен превышать 5MB');
            }
            
            if (!allowedTypes.includes(attachment.type)) {
                isValid = false;
                errors.push('Разрешены только файлы форматов JPG, PNG, PDF, DOC, TXT');
            }
        }
        
        if (!isValid) {
            showErrorMessage('Ошибка отправки сообщения:', errors);
            return false;
        }
        
        // Имитация отправки
        showSuccessMessage('Спасибо за ваше сообщение! Мы рассмотрим его в ближайшее время и ответим вам.');
        
        // Очистка формы
        setTimeout(() => {
            feedbackForm.reset();
            const messageCharCount = document.getElementById('message-char-count');
            if (messageCharCount) messageCharCount.textContent = '0';
        }, 2000);
        
        return false;
    });
    
    // Валидация сообщения на лету
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && value.length < 10) {
                this.style.borderColor = '#ff4444';
                showFieldError(this, 'Минимум 10 символов');
            } else if (value && value.length > 500) {
                this.style.borderColor = '#ff4444';
                showFieldError(this, 'Максимум 500 символов');
            } else {
                this.style.borderColor = '';
                clearFieldError(this);
            }
        });
    }
}

// Вспомогательные функции
function showHelp() {
    const helpText = `
📚 Помощь по заполнению форм:

1. 📝 Форма регистрации:
   • Все поля со звездочкой (*) обязательны для заполнения
   • Пароль должен быть не менее 8 символов
   • Можно использовать буквы, цифры и специальные символы
   • Рекомендуем использовать пароль разной сложности

2. ⭐ Голосование за фигуриста:
   • Выберите одного фигуриста из списка или кликните по карточке
   • Напишите комментарий (необязательно, максимум 200 символов)
   • Результаты голосования обновляются ежедневно
   • Лучший фигурист месяца получает специальный приз

3. 📨 Обратная связь:
   • Выберите тему сообщения из списка
   • Опишите проблему или вопрос максимально подробно
   • Можно прикрепить файлы для наглядности (до 5MB)
   • Технические вопросы рассматриваются в течение 24 часов

Если у вас остались вопросы, напишите на support@figureskating.ru
или позвоните по телефону +7 (495) 123-45-67
            `;
    
    // Используем красивый alert вместо стандартного
    showCustomAlert('Помощь по заполнению форм', helpText);
}

function showFeedbackTips() {
    const tips = `
💡 Советы по написанию обратной связи:

• Будьте конкретны - опишите проблему или предложение подробно
• Укажите, на какой странице сайта возникла проблема
• Если это техническая ошибка, опишите шаги для её воспроизведения
• Приложите скриншоты или видео для наглядности
• Укажите, каким браузером и устройством вы пользуетесь
• Напишите, какой результат вы ожидаете увидеть

📝 Пример хорошего сообщения:
"Тема: Техническая проблема
На странице соревнований (competitions.html), 
при клике на фильтр 'Текущие' в разделе фильтров, 
ничего не происходит. Использую Google Chrome версии 120.0 
на Windows 11. Ожидаю, что после клика отобразятся 
карточки текущих соревнований."

🎯 Советы по эффективному общению:
• Будьте вежливы и конструктивны
• Один вопрос - одно сообщение
• Проверьте орфографию перед отправкой
• Укажите контактные данные для ответа

Спасибо за вашу помощь в улучшении сайта! 🌟
            `;
    
    showCustomAlert('Советы по обратной связи', tips);
}

function showCustomAlert(title, message) {
    // Удаляем существующее модальное окно, если есть
    const existingModal = document.querySelector('.custom-alert-modal');
    if (existingModal) existingModal.remove();
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'custom-alert-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        ">
            <div style="
                position: sticky;
                top: 0;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 20px 25px;
                border-radius: 15px 15px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 1;
            ">
                <h3 style="margin: 0; font-size: 1.3rem;">${title}</h3>
                <button onclick="this.closest('.custom-alert-modal').remove()" style="
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
            </div>
            
            <div style="padding: 25px;">
                <div style="
                    white-space: pre-line;
                    line-height: 1.6;
                    color: var(--text-dark);
                    font-size: 0.95rem;
                ">${message}</div>
                
                <div style="
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(0,0,0,0.1);
                    display: flex;
                    justify-content: flex-end;
                ">
                    <button onclick="this.closest('.custom-alert-modal').remove()" style="
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        padding: 10px 25px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    ">Понятно</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем стили для анимаций
    if (!document.querySelector('#custom-alert-styles')) {
        const style = document.createElement('style');
        style.id = 'custom-alert-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { 
                    transform: translateY(-20px);
                    opacity: 0;
                }
                to { 
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            .custom-alert-modal button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Закрытие по клику вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Закрытие по Escape
    const closeHandler = function(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeHandler);
        }
    };
    document.addEventListener('keydown', closeHandler);
}

function showErrorMessage(title, errors) {
    const errorList = Array.isArray(errors) ? errors.map(err => `• ${err}`).join('\n') : errors;
    
    const errorText = `
${title}

${errorList}

Пожалуйста, исправьте указанные ошибки и попробуйте снова.
    `;
    
    showCustomAlert('Ошибка заполнения формы', errorText);
}

function showSuccessMessage(message) {
    // Создаем всплывающее сообщение
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00C851, #007E33);
        color: white;
        padding: 20px 25px;
        border-radius: var(--border-radius);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.5s ease-out;
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    successMsg.innerHTML = `
        <div style="font-size: 2rem;">✅</div>
        <div>
            <div style="font-weight: 600; margin-bottom: 5px; font-size: 1.1rem;">Успешно!</div>
            <div style="font-size: 0.95rem;">${message}</div>
        </div>
        <button onclick="this.parentElement.remove()" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            margin-left: 10px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        ">×</button>
    `;
    
    document.body.appendChild(successMsg);
    
    // Добавляем стили для анимаций
    if (!document.querySelector('#success-message-styles')) {
        const style = document.createElement('style');
        style.id = 'success-message-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .success-message button:hover {
                background: rgba(255,255,255,0.3);
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Автоматическое скрытие через 5 секунд
    const hideTimeout = setTimeout(() => {
        successMsg.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.remove();
            }
        }, 500);
    }, 5000);
    
    // Останавливаем таймер при наведении
    successMsg.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
    successMsg.addEventListener('mouseleave', () => {
        setTimeout(() => {
            successMsg.style.animation = 'slideOutRight 0.5s ease-out forwards';
            setTimeout(() => {
                if (successMsg.parentNode) {
                    successMsg.remove();
                }
            }, 500);
        }, 2000);
    });
}

// Вспомогательные функции для валидации полей
function showFieldError(inputElement, message) {
    // Удаляем предыдущую ошибку, если есть
    clearFieldError(inputElement);
    
    // Создаем элемент с ошибкой
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.style.cssText = `
        color: #ff4444;
        font-size: 0.85rem;
        margin-top: 5px;
        animation: fadeIn 0.3s ease;
    `;
    errorElement.textContent = message;
    
    // Вставляем после input
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    
    // Добавляем класс ошибки к родительскому контейнеру
    const container = inputElement.closest('[style*="position: relative"]');
    if (container) {
        container.classList.add('has-error');
    }
}

function clearFieldError(inputElement) {
    // Удаляем элемент с ошибкой
    const existingError = inputElement.nextElementSibling;
    if (existingError && existingError.classList.contains('field-error')) {
        existingError.remove();
    }
    
    // Убираем класс ошибки
    const container = inputElement.closest('[style*="position: relative"]');
    if (container) {
        container.classList.remove('has-error');
    }
}

// Добавляем глобальные функции для вызова из HTML
window.showHelp = showHelp;
window.showFeedbackTips = showFeedbackTips;