        // Данные о соревнованиях (БЕЗ ССЫЛОК НА ИЗОБРАЖЕНИЯ)
        const competitionsData = [
            {
                id: 1,
                title: "IV этап Гран-при России",
                date: "15-16 ноября 2025",
                location: "Москва, Мегаспорт",
                status: "ongoing",
                category: "national",
                description: "Четвертый этап серии Гран-при России. Участвуют сильнейшие фигуристы страны. Призовой фонд - 3 млн рублей.",
                participants: "25+ участников",
                details: [
                    "Короткая программа - 15 ноября",
                    "Произвольная программа - 16 ноября",
                    "Трансляция на Матч ТВ",
                    "Билеты от 1500 рублей"
                ]
            },
            {
                id: 2,
                title: "V этап Гран-при России",
                date: "22-23 ноября 2025",
                location: "Казань, Татнефть Арена",
                status: "upcoming",
                category: "national",
                description: "Пятый этап серии Гран-при. Решающий турнир перед финалом. Определение финалистов сезона.",
                participants: "20+ участников",
                details: [
                    "Предварительная регистрация до 18 ноября",
                    "Вход свободный",
                    "Специальные гости - олимпийские чемпионы",
                    "Автограф-сессия после соревнований"
                ]
            },
            {
                id: 3,
                title: "Финальный этап Гран-при России",
                date: "6-7 декабря 2025",
                location: "Санкт-Петербург, СИБУР Арена",
                status: "upcoming",
                category: "national",
                description: "Финал серии Гран-при России. Определение сильнейших фигуристов сезона. Гала-концерт с участием звезд.",
                participants: "12 финалистов",
                details: [
                    "Только для финалистов серии",
                    "Призовой фонд - 5 млн рублей",
                    "Гала-концерт с участием звезд",
                    "Трансляция в 15 странах"
                ]
            },
            {
                id: 4,
                title: "Чемпионат России 2026",
                date: "25-28 декабря 2025",
                location: "Москва, ВТБ Арена",
                status: "upcoming",
                category: "national",
                description: "Главный национальный турнир сезона. Определение чемпионов России и формирование сборной на международные старты.",
                participants: "40+ участников",
                details: [
                    "4 дисциплины: женщины, мужчины, пары, танцы",
                    "Призовой фонд - 10 млн рублей",
                    "Онлайн-трансляция на всех платформах",
                    "Церемония открытия с шоу-программой"
                ]
            },
            {
                id: 5,
                title: "Чемпионат Европы 2026",
                date: "10-12 января 2026",
                location: "Таллин, Эстония",
                status: "upcoming",
                category: "national",
                description: "Европейское первенство. Российские фигуристы представят новые программы и элементы в нейтральном статусе.",
                participants: "35 стран-участниц",
                details: [
                    "Российские фигуристы в нейтральном статусе",
                    "Новые программы сезона",
                    "Квалификация на международные турниры",
                    "Трансляция на YouTube ISU"
                ]
            },
            {
                id: 6,
                title: "Зимние Олимпийские игры",
                date: "20-25 января 2026",
                location: "Милан-Кортина, Италия",
                status: "upcoming",
                category: "national",
                description: "XXV Зимние Олимпийские игры. Главный спортивный турнир четырехлетия. Российские фигуристы - основные фавориты.",
                participants: "Олимпийская сборная России",
                details: [
                    "Командный турнир - 20-21 января",
                    "Одиночное катание - 22-23 января",
                    "Пары и танцы - 24-25 января",
                    "Церемония награждения - 25 января"
                ]
            },
            {
                id: 7,
                title: "Чемпионат России 2025",
                date: "25-28 декабря 2024",
                location: "Челябинск, Трактор",
                status: "completed",
                category: "national",
                description: "Прошедший чемпионат России. Победа Аделии Петросян и Владислава Дикиджи. Рекордные зрительские оценки.",
                participants: "35 участников",
                details: [
                    "Победители: А. Петросян и В. Дикиджи",
                    "Рекордные оценки судей",
                    "Полные трибуны на всех сессиях",
                    "Медиаосвещение в 50 странах"
                ]
            },
            {
                id: 8,
                title: "Олимпийский квалификационный турнир",
                date: "19-21 сентября 2025",
                location: "Пекин, Китай",
                status: "completed",
                category: "national",
                description: "Отборочный турнир к Олимпиаде-2026. Победа Аделии Петросян и Петра Гуменника. Получение олимпийских квот.",
                participants: "15 участников от России",
                details: [
                    "Победа А. Петросян и П. Гуменника",
                    "Получено 5 олимпийских квот",
                    "Высокие оценки международных судей",
                    "Подготовка к Олимпиаде-2026"
                ]
            }
        ];

        // Инициализация страницы
        document.addEventListener('DOMContentLoaded', function() {
            displayCompetitions(competitionsData);
        });

        // Функция создания карточки соревнования
        function createCompetitionCard(comp) {
            // Определяем класс статуса и иконку
            let statusClass = '';
            let statusText = '';
            let statusIcon = '';
            
            switch(comp.status) {
                case 'upcoming':
                    statusClass = 'status-upcoming';
                    statusText = 'Предстоящее';
                    statusIcon = '📅';
                    break;
                case 'ongoing':
                    statusClass = 'status-ongoing';
                    statusText = 'Идет сейчас';
                    statusIcon = '🔥';
                    break;
                case 'completed':
                    statusClass = 'status-completed';
                    statusText = 'Завершено';
                    statusIcon = '✅';
                    break;
            }

            // Иконка для типа соревнования
            let categoryIcon = comp.category === 'national' ? '🇷🇺' : '🌍';
            
            return `
                <div class="competition-card" data-status="${comp.status}" data-category="${comp.category}">
                    <div class="competition-info">
                        <div class="competition-icon-container">
                            <div class="competition-icon">
                                ${categoryIcon}
                            </div>
                            <span class="competition-status ${statusClass}">
                                ${statusIcon} ${statusText}
                            </span>
                        </div>
                        
                        <div class="competition-header">
                            <h3 class="competition-title">${comp.title}</h3>
                            <p class="competition-subtitle">${comp.description}</p>
                        </div>
                        
                        <div class="competition-meta">
                            <div class="meta-item date">
                                <span>📅</span>
                                ${comp.date}
                            </div>
                            <div class="meta-item location">
                                <span>📍</span>
                                ${comp.location}
                            </div>
                            <div class="meta-item participants">
                                <span>👥</span>
                                ${comp.participants}
                            </div>
                        </div>
                        
                        ${comp.details ? `
                        <div class="competition-details">
                            <div class="details-title">📋 Детали соревнования:</div>
                            <ul class="details-list">
                                ${comp.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        <div class="competition-footer">
                            <div class="prize-pool">
                                🏆 Призовой фонд
                            </div>
                            <button class="competition-button" onclick="showCompetitionDetails(${comp.id})">
                                Подробнее →
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Отображение соревнований
        function displayCompetitions(competitions) {
            const grid = document.getElementById('competitionsGrid');
            grid.innerHTML = '';

            competitions.forEach(comp => {
                const card = document.createElement('div');
                card.innerHTML = createCompetitionCard(comp);
                grid.appendChild(card.firstElementChild);
            });
        }

        // Фильтрация соревнований
        function filterCompetitions(filter) {
            // Убираем активный класс у всех кнопок
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавляем активный класс текущей кнопке
            event.target.classList.add('active');
            
            let filteredCompetitions = competitionsData;
            
            switch(filter) {
                case 'upcoming':
                    filteredCompetitions = competitionsData.filter(c => c.status === 'upcoming');
                    break;
                case 'ongoing':
                    filteredCompetitions = competitionsData.filter(c => c.status === 'ongoing');
                    break;
                case 'completed':
                    filteredCompetitions = competitionsData.filter(c => c.status === 'completed');
                    break;
                case 'national':
                    filteredCompetitions = competitionsData.filter(c => c.category === 'national');
                    break;
            }
            
            displayCompetitions(filteredCompetitions);
        }

        // Показать детали соревнования
        function showCompetitionDetails(id) {
            const competition = competitionsData.find(c => c.id === id);
            
            // Создаем модальное окно
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                padding: 20px;
            `;
            
            // Определяем цвет статуса
            let statusColor = '';
            switch(competition.status) {
                case 'upcoming': statusColor = 'var(--secondary-color)'; break;
                case 'ongoing': statusColor = '#f57c00'; break;
                case 'completed': statusColor = '#388e3c'; break;
            }
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    border-radius: var(--border-radius);
                    max-width: 700px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 1.5rem;
                        cursor: pointer;
                        z-index: 10001;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: var(--transition);
                    ">×</button>
                    
                    <div style="padding: 40px 30px 30px;">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
                            <div style="
                                width: 60px;
                                height: 60px;
                                background: var(--gradient-primary);
                                border-radius: 15px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 1.8rem;
                                color: white;
                                box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);
                            ">
                                ${competition.category === 'national' ? '🇷🇺' : '🌍'}
                            </div>
                            <div style="flex: 1;">
                                <h2 style="color: var(--text-dark); margin: 0 0 5px 0;">${competition.title}</h2>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                    <span style="
                                        background: ${statusColor};
                                        color: white;
                                        padding: 5px 15px;
                                        border-radius: 20px;
                                        font-size: 0.8rem;
                                        font-weight: 600;
                                    ">
                                        ${competition.status === 'upcoming' ? 'Предстоящее' : 
                                          competition.status === 'ongoing' ? 'Идет сейчас' : 'Завершено'}
                                    </span>
                                    <span style="color: var(--text-light); font-size: 0.9rem;">
                                        ${competition.participants}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div style="
                            background: rgba(3, 169, 244, 0.05);
                            padding: 20px;
                            border-radius: 10px;
                            margin-bottom: 25px;
                            border-left: 4px solid var(--secondary-color);
                        ">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                                <div>
                                    <div style="font-weight: 600; color: var(--text-light); font-size: 0.9rem; margin-bottom: 5px;">📅 Дата</div>
                                    <div style="color: var(--text-dark); font-weight: 500;">${competition.date}</div>
                                </div>
                                <div>
                                    <div style="font-weight: 600; color: var(--text-light); font-size: 0.9rem; margin-bottom: 5px;">📍 Место</div>
                                    <div style="color: var(--text-dark); font-weight: 500;">${competition.location}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h3 style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.2rem;">Описание</h3>
                            <p style="color: var(--text-dark); line-height: 1.6; margin: 0;">${competition.description}</p>
                        </div>
                        
                        ${competition.details ? `
                        <div style="margin-bottom: 30px;">
                            <h3 style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.2rem;">📋 Детали мероприятия</h3>
                            <ul style="padding-left: 20px; margin: 0;">
                                ${competition.details.map(detail => `
                                    <li style="color: var(--text-dark); margin-bottom: 10px; padding-left: 10px; position: relative;">
                                        <span style="position: absolute; left: -15px; color: var(--primary-color);">•</span>
                                        ${detail}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 30px; padding-top: 25px; border-top: 1px solid rgba(0,0,0,0.1);">
                            <button class="competition-button" onclick="window.open('https://www.kassir.ru', '_blank')">
                                🎫 Купить билеты
                            </button>
                            <button class="competition-button" style="background: var(--secondary-color);" 
                                    onclick="window.open('https://matchtv.ru', '_blank')">
                                📺 Смотреть онлайн
                            </button>
                            <button class="competition-button" style="background: var(--text-light);" 
                                    onclick="this.parentElement.parentElement.parentElement.remove()">
                                ✕ Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Добавляем анимацию закрытия кнопке
            const closeBtn = modal.querySelector('button');
            closeBtn.onmouseover = () => closeBtn.style.transform = 'rotate(90deg)';
            closeBtn.onmouseout = () => closeBtn.style.transform = 'rotate(0deg)';
        }

        // Показать форму регистрации
        function showRegistrationForm() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                padding: 20px;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    border-radius: var(--border-radius);
                    max-width: 500px;
                    width: 100%;
                    padding: 40px 30px;
                    position: relative;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: var(--primary-color);
                        color: white;
                        border: none;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: 1.5rem;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: var(--transition);
                    ">×</button>
                    
                    <h2 style="color: var(--primary-color); margin-bottom: 25px; text-align: center;">📝 Регистрация на соревнования</h2>
                    
                    <div style="background: rgba(233, 30, 99, 0.05); padding: 20px; border-radius: 10px; margin-bottom: 25px;">
                        <h3 style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.1rem;">Для регистрации необходимо:</h3>
                        <ol style="padding-left: 20px; margin: 0;">
                            <li style="margin-bottom: 10px; color: var(--text-dark);">Связаться с региональной федерацией</li>
                            <li style="margin-bottom: 10px; color: var(--text-dark);">Предоставить необходимые документы</li>
                            <li style="margin-bottom: 10px; color: var(--text-dark);">Пройти медицинское обследование</li>
                            <li style="color: var(--text-dark);">Выполнить квалификационные нормативы</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; color: var(--text-light); margin-top: 30px;">
                        <p>📞 Контакты для связи:</p>
                        <p style="font-size: 1.2rem; font-weight: 600; color: var(--primary-color); margin-top: 10px;">
                            +7 (495) 785-62-32
                        </p>
                        <p style="margin-top: 5px;">
                            <a href="mailto:info@fsrussia.ru" style="color: var(--secondary-color); text-decoration: none;">
                                info@fsrussia.ru
                            </a>
                        </p>
                    </div>
                    
                    <div style="display: flex; justify-content: center; margin-top: 30px;">
                        <button class="competition-button" onclick="this.parentElement.parentElement.remove()">
                            Понятно, спасибо!
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        // Закрытие модального окна по ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modal = document.querySelector('div[style*="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8)"]');
                if (modal) {
                    modal.remove();
                }
            }
        });