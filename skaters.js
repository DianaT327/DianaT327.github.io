// Данные для модальных окон
        const skatersData = [
            {
                id: 1,
                name: "Анна Щербакова",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Олимпийская чемпионка 2022", "Чемпионка мира 2021", "Чемпионка России 2022"],
                birthDate: "28 марта 2004",
                coach: "Этери Тутберидзе",
                records: ["Первая женщина, исполнившая 2 четверных флипа в одной программе", "Рекордсменка по баллам", "Стабильность в сложных элементах"],
                description: "Олимпийская чемпионка, техничная и артистичная фигуристка, известная сложными прыжками и стабильностью выступлений. Обладает уникальной способностью концентрироваться в ответственных моментах."
            },
            {
                id: 2,
                name: "Александра Трусова",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Олимпийская серебряная медаль 2022", "Чемпионка мира среди юниоров", "5 четверных прыжков в программе"],
                birthDate: "23 июня 2004",
                coach: "Этери Тутберидзе",
                records: ["Первая женщина с 5 четверными", "Королева четверных прыжков", "Рекорд по сложности программ"],
                description: "Новатор в женском фигурном катании, исполнительница рекордного количества четверных прыжков. Известна своим смелым подходом к сложности программ."
            },
            {
                id: 3,
                name: "Камила Валиева",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Олимпийская чемпионка в команде 2022", "Чемпионка Европы 2022", "Чемпионка России 2022"],
                birthDate: "26 апреля 2006",
                coach: "Этери Тутберидзе",
                records: ["Мировой рекорд по баллам", "Первая женщина с четверным тулупом на Олимпиаде", "Самая юная чемпионка Европы"],
                description: "Самая юная олимпийская чемпионка в команде, обладательница мировых рекордов. Известна своей грацией и техническим совершенством."
            },
            {
                id: 4,
                name: "Марк Кондратюк",
                category: "men",
                type: "Одиночное катание",
                achievements: ["Олимпийский чемпион в команде 2022", "Чемпион Европы 2022", "Чемпион России 2022"],
                birthDate: "3 сентября 2003",
                coach: "Светлана Соколовская",
                records: ["Стабильность в прыжках", "Артистичность исполнения", "Техничная подготовка"],
                description: "Олимпийский чемпион, техничный и артистичный фигурист с яркими программами. Известен своей харизмой на льду."
            },
            {
                id: 5,
                name: "Евгения Медведева",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Двукратная чемпионка мира", "Серебряная медаль Олимпиады 2018", "Чемпионка Европы 2016, 2017", "Чемпионка России 2016, 2017"],
                birthDate: "19 ноября 1999",
                coach: "Этери Тутберидзе",
                records: ["Мировые рекорды по баллам", "Высочайшая артистичность", "Консистентность выступлений"],
                description: "Двукратная чемпионка мира, известная артистизмом и эмоциональностью выступлений. Эталон женского фигурного катания."
            },
            {
                id: 6,
                name: "Алина Загитова",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Олимпийская чемпионка 2018", "Чемпионка мира 2019", "Чемпионка Европы 2018", "Чемпионка России 2018"],
                birthDate: "18 мая 2002",
                coach: "Этери Тутберидзе",
                records: ["Золото на дебютной Олимпиаде", "Рекордная серия побед", "Идеальная техника прыжков"],
                description: "Олимпийская чемпионка, техничная и грациозная фигуристка с идеальной техникой прыжков. Известна своим уникальным стилем."
            },
            {
                id: 7,
                name: "Аделия Петросян",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Чемпионка России 2024, 2025, 2026", "Победитель финала Гран-при России"],
                birthDate: "5 июля 2007",
                coach: "Этери Тутберидзе",
                records: ["Сложнейшие каскады", "Высокие баллы за компоненты", "Уникальная гибкость"],
                description: "Юная звезда российского фигурного катания, известная своей артистичностью и сложными элементами. Быстро прогрессирующая спортсменка."
            },
            {
                id: 8,
                name: "Елизавета Туктамышева",
                category: "women",
                type: "Одиночное катание",
                achievements: ["Чемпионка мира 2015", "Чемпионка Европы 2015", "Бронзовый призер Чемпионата России 2023"],
                birthDate: "17 декабря 1996",
                coach: "Алексей Мишин",
                records: ["Тройной аксель", "Долголетие в спорте", "Консистентность на протяжении карьеры"],
                description: "Чемпионка мира, известная своим тройным акселем и элегантным стилем катания. Пример спортивного долголетия."
            },
            {
                id: 9,
                name: "Петр Гуменник",
                category: "men",
                type: "Одиночное катание",
                achievements: ["Бронзовый призер чемпионата России 2024", "Серебро чемпионата России 2023", "Призер этапов Гран-при"],
                birthDate: "11 апреля 2004",
                coach: "Вероника Дайнеко",
                records: ["Стабильные четверные", "Высокие баллы за технику", "Техничная подготовка"],
                description: "Серебряный призер чемпионата России, техничный фигурист со стабильными четверными прыжками и хорошей артистичностью."
            },
            {
                id: 10,
                name: "Владислав Дикиджи",
                category: "men",
                type: "Одиночное катание",
                achievements: ["Чемпион России 2025", "Победитель этапов Гран-при России"],
                birthDate: "22 августа 2004",
                coach: "Олег Татауров",
                records: ["Сложные вращения", "Артистичные программы", "Техническое разнообразие"],
                description: "Победитель чемпионата России, известный своими артистичными программами и техничным исполнением."
            },
            {
                id: 11,
                name: "Анастасия Мишина / Александр Галлямов",
                category: "pairs",
                type: "Парное катание",
                achievements: ["Олимпийские чемпионы 2022", "Чемпионы мира 2021", "Чемпионы Европы 2022", "Чемпионы России 2022, 2024, 2025"],
                birthDate: "24.04.2001 / 28.08.1999",
                coach: "Тамара Москвина, Артур Минчук",
                records: ["Высокие баллы за поддержки", "Синхронность элементов", "Сложные выбросы"],
                description: "Олимпийские чемпионы, известные сложными поддержками и идеальной синхронностью. Одна из сильнейших пар в мире."
            },
            {
                id: 12,
                name: "Виктория Синицина / Никита Кацалапов",
                category: "dance",
                type: "Танцы на льду",
                achievements: ["Олимпийские чемпионы 2022", "Чемпионы мира 2021", "Чемпионы Европы 2020, 2022", "Чемпионы России"],
                birthDate: "29.04.1995 / 10.07.1991",
                coach: "Александр Жулин",
                records: ["Рекорды в танцах", "Идеальная техника", "Артистизм исполнения"],
                description: "Олимпийские чемпионы в танцах на льду, эталон стиля и техничности. Известны своей элегантностью."
            },
            {
                id: 13,
                name: "Александра Бойкова / Дмитрий Козловский",
                category: "pairs",
                type: "Парное катание",
                achievements: ["Чемпионы Европы 2020", "Серебро чемпионата мира 2021", "Чемпионы России 2020, 2023"],
                birthDate: "20.01.2002 / 23.12.1999",
                coach: "Максим Траньков",
                records: ["Сложные выбросы", "Синхронные вращения", "Высокие поддержки"],
                description: "Чемпионы Европы, техничная пара с эффектными элементами. Известны своей зрелищностью."
            }
        ];

        // Функции фильтрации
        function filterSkaters(category) {
            const cards = document.querySelectorAll('.skater-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Обновляем активную кнопку
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Показываем/скрываем карточки
            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Функция открытия модального окна
        function openModal(id) {
            const skater = skatersData.find(s => s.id === id);
            if (!skater) return;
            
            const modal = document.getElementById('skaterModal');
            const modalBody = document.getElementById('modalBody');
            
            modalBody.innerHTML = `
                <div class="modal-skater">
                    <div class="modal-header">
                        <div class="modal-title">
                            <h2>${skater.name}</h2>
                            <p class="skater-category">${getCategoryLabel(skater.category)} • ${skater.type}</p>
                        </div>
                    </div>
                    
                    <div class="modal-details">
                        <div class="detail-row">
                            <div class="detail-item">
                                <i class="fas fa-birthday-cake"></i>
                                <div>
                                    <strong>Дата рождения</strong>
                                    <p>${skater.birthDate}</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-user-tie"></i>
                                <div>
                                    <strong>Тренер${skater.coach.includes('/') ? 'ы' : ''}</strong>
                                    <p>${skater.coach}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="section">
                            <h3><i class="fas fa-trophy"></i> Достижения</h3>
                            <ul class="achievements-list">
                                ${skater.achievements.map(ach => `<li>${ach}</li>`).join('')}
                            </ul>
                        </div>
                        
                        ${skater.records ? `
                        <div class="section">
                            <h3><i class="fas fa-star"></i> Особенности</h3>
                            <ul class="records-list">
                                ${skater.records.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        <div class="section">
                            <h3><i class="fas fa-info-circle"></i> О фигуристе</h3>
                            <p class="description">${skater.description}</p>
                        </div>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        }

        function closeModal() {
            document.getElementById('skaterModal').style.display = 'none';
        }

        // Вспомогательная функция
        function getCategoryLabel(category) {
            const labels = {
                'women': 'Женщины',
                'men': 'Мужчины',
                'pairs': 'Пары',
                'dance': 'Танцы на льду'
            };
            return labels[category] || category;
        }

        // Закрытие модального окна при клике вне его
        window.onclick = function(event) {
            const modal = document.getElementById('skaterModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Функция для меню
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

        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            // Закрытие меню при клике на ссылку
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        toggleMenu();
                    }
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
