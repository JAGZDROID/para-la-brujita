// =========================================================
// ================= BASE DE DATOS MÁGICA ==================
// =========================================================

const config = {
    apodo: "Brujita",

    // Mensajes sentimentales profundos
    frases: [
        "A veces el mundo parece ir muy rápido y sentirse pesado, pero tú tienes una forma tan tuya y tan bonita de hacerlo más ligero para los demás.",
        "Hay días en los que tal vez no te ves al espejo con el mismo amor con el que te vemos nosotros. Ojalá pudieras prestarte mis ojos 5 minutos.",
        "Gracias por existir. Sin pedir nada a cambio, tu simple presencia le da paz a quienes tienen la suerte de rodearte.",
        "Está bien si hoy solo pudiste respirar y existir. Sigues siendo igual de valiosa, inteligente y hermosa que en tus días más productivos."
    ],

    // CHISTES ABSURDOS PARA LOS PLANETAS
    universo: [
        { icono: "🧦", nombre: "Agujero Negro de las Ligas Perdidas", mensaje: "Aquí habitan las 345 ligas de cabello y pasadores que has perdido en tu vida. Están a salvo y armaron una civilización." },
        { icono: "📱", nombre: "Nebulosa de TikTok", mensaje: "ADVERTENCIA: Entras diciendo 'veré solo tres videitos' y cuando sales ya es martes del 2028." },
        { icono: "🤷‍♀️", nombre: "Planeta del 'Lo que tú quieras'", mensaje: "El planeta de la indecisión. Su capital se llama 'No sé' y su comida típica es 'Lo que se te antoje'." },
        { icono: "👑", nombre: "Planeta Don Ranita", mensaje: "Ley Marcial: Aquí estás estrictamente obligada a creerte lo increíble que eres. Multas severas por dudar de ti misma." },
        { icono: "😴", nombre: "Gravedad de las 7 AM", mensaje: "En este planeta, la cobija pesa 10 toneladas por las mañanas. La ciencia dice que es imposible levantarse a la primera." },
        { icono: "🍕", nombre: "Constelación del Antojo", mensaje: "Un mundo utópico donde la pizza y el pan dulce curan la tristeza y aportan cero calorías." }
    ],

    // ELOGIOS PARA LA BOLA DE CRISTAL
    elogiosCristal: [
        "🔮 El oráculo dice: Tienes una sonrisa preciosa, y no lo digo yo, lo dice la ciencia.",
        "🔮 Visión revelada: Tu vibra es tan bonita que hasta a las plantas de plástico les dan ganas de hacer fotosíntesis.",
        "🔮 El cosmos susurra: Eres más increíble que encontrar dinero en un pantalón que no usabas hace meses.",
        "🔮 Predicción astrológica: Alguien va a sonreír hoy solo por acordarse de ti. (Pista: 🐸).",
        "🔮 Dato universal: Tu nivel de resiliencia asusta hasta a los huracanes. Eres muy fuerte.",
        "🔮 Secreto místico: No necesitas magia real, tu forma de ser ya es un hechizo que le cae bien a todos."
    ],

    // CUALIDADES 3D
    cualidades: [
        { icono: "✨", texto: "Tu esencia auténtica" },
        { icono: "💖", texto: "Tu corazón inmenso" },
        { icono: "🦋", texto: "Tu resiliencia" },
        { icono: "🎨", texto: "Tu mente brillante" },
        { icono: "🌻", texto: "Tu empatía" },
        { icono: "🎵", texto: "Tu calma" }
    ],

    // POCIONES
    pociones: {
        "abrazo+sueño": "🧪 Poción de Cobijita: Te otorga inmunidad al frío del mundo y un sueño profundo y reparador.",
        "abrazo+paciencia": "🧪 Elixir de Contención: Disuelve la urgencia. Todo estará bien, a tu propio ritmo.",
        "abrazo+risa": "🧪 Tónico Rompe-Hielo: Garantiza un ataque de risa por un chiste malísimo de la ranita.",
        "paciencia+sueño": "🧪 Brebaje 'Apaga Mentes': Detiene el sobrepensamiento para que por fin puedas descansar la cabeza.",
        "paciencia+risa": "🧪 Gotas de Ligereza: Te recuerda no tomarte la vida tan en serio hoy."
    },

    // DIÁLOGOS DE LA RANITA FLOTANTE
    dialogosRanita: [
        "¡Ribbit! No olvides tomar tantita agua hoy 🍵",
        "Si el mundo molesta, escóndete aquí conmigo ✨",
        "Te quiero mucho. Atentamente: La ranita 🐸💚",
        "Hoy es tu día. Tienes permiso de hacer berrinche 🎂"
    ],

    // CARTA FINAL (Profunda y Emocional)
    mensajeFinal: [
        "Sé que ha habido días donde sientes que ya no das más. Días donde el ruido de afuera y de adentro es demasiado alto.",
        "Quería hacerte este pequeño universo digital para que tuvieras un lugar al cual huir. Un recordatorio tangible de que, incluso cuando tú no lo notas, iluminas la vida de los demás.",
        "Admiro profundamente la mujer que eres. Admiro tu fuerza silenciosa, tu forma de levantarte cuando las cosas salen mal, y esa nobleza tan tuya que nunca pierdes.",
        "En este nuevo año de vida, no te deseo solo 'felicidad'. Te deseo paz mental. Te deseo noches donde duermas de corrido, comidas que te sepan a gloria, y días donde genuinamente te sientas orgullosa de ti misma.",
        "Nunca olvides que no tienes que ser fuerte todo el tiempo. Aquí tienes un amigo (y una ranita) para sostenerte cuando quieras soltar el peso.",
        "Feliz cumpleaños, mi querida Brujita. Que la vida te devuelva un poquito de lo mucho que nos das."
    ]
};

// =========================================================
// ================= LÓGICA PRINCIPAL ======================
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.config-apodo').forEach(el => el.textContent = config.apodo);

    // 1. GENERADOR DE ESTRELLAS
    const particlesContainer = document.getElementById('particles-container');
    for(let i = 0; i < 70; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesContainer.appendChild(star);
    }

    // 2. LA RANITA FLOTANTE
    const frogCompanion = document.getElementById('frog-companion');
    const frogBubble = document.getElementById('frog-speech-bubble');
    frogCompanion.addEventListener('click', () => {
        const dialog = config.dialogosRanita[Math.floor(Math.random() * config.dialogosRanita.length)];
        frogBubble.textContent = dialog;
        frogBubble.classList.remove('hidden');
        setTimeout(() => frogBubble.classList.add('hidden'), 4000);
    });

    // 3. NUEVO: MEDIDOR DE BATERÍA SOCIAL
    const slider = document.getElementById('battery-slider');
    const batLevel = document.getElementById('battery-level');
    const batStatus = document.getElementById('battery-status');
    const batMsg = document.getElementById('battery-msg');

    function updateBattery() {
        const val = slider.value;
        batLevel.style.width = val + '%';
        
        if (val < 20) {
            batLevel.style.background = '#f43f5e';
            batStatus.textContent = `Batería al ${val}%: "Modo Ermitaña Definitiva 🪫"`;
            batMsg.textContent = "Mensaje de la ranita: Entendido. Escudos activados, no hay interacción humana hoy. A las cobijas de inmediato.";
        } else if (val < 60) {
            batLevel.style.background = '#fbbf24';
            batStatus.textContent = `Batería al ${val}%: "Sobreviviendo a base de café ☕"`;
            batMsg.textContent = "Mensaje de la ranita: Hacemos lo que se puede. Tómalo con calma, un pasito a la vez.";
        } else {
            batLevel.style.background = '#4ade80';
            batStatus.textContent = `Batería al ${val}%: "Lista para el chisme y la acción ✨"`;
            batMsg.textContent = "Mensaje de la ranita: ¡Uy! Hoy andamos imparables. A comerse el mundo (o al menos un buen postre).";
        }
    }
    slider.addEventListener('input', updateBattery);
    updateBattery();

    // 4. NUEVO: BOLA DE CRISTAL (ELOGIOS)
    const crystalBall = document.getElementById('crystal-ball');
    const crystalText = document.getElementById('crystal-text');
    let isCrystalCooldown = false;

    crystalBall.addEventListener('click', () => {
        if (isCrystalCooldown) return;
        isCrystalCooldown = true;
        
        crystalText.style.opacity = '0';
        setTimeout(() => {
            const randomElogio = config.elogiosCristal[Math.floor(Math.random() * config.elogiosCristal.length)];
            crystalText.textContent = randomElogio;
            crystalText.style.opacity = '1';
        }, 300);

        setTimeout(() => { isCrystalCooldown = false; }, 1500);
    });

    // 5. FRASES SENTIMENTALES Y SISTEMA SOLAR
    const cardsContainer = document.getElementById('cards-container');
    config.frases.forEach(frase => {
        let card = document.createElement('div');
        card.classList.add('phrase-card');
        card.textContent = frase;
        cardsContainer.appendChild(card);
    });

    const solarSystem = document.getElementById('solar-system');
    const universeMessage = document.getElementById('universe-message');
    const universeText = document.getElementById('universe-text');
    config.universo.forEach(planeta => {
        let planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.textContent = planeta.icono;
        planetDiv.title = planeta.nombre;
        planetDiv.addEventListener('click', () => {
            universeText.innerHTML = `<strong>${planeta.icono} ${planeta.nombre}</strong><br><br>${planeta.mensaje}`;
            universeMessage.classList.remove('hidden');
        });
        solarSystem.appendChild(planetDiv);
    });

    // 6. CARRUSEL 3D
    const carousel3d = document.getElementById('carousel-3d');
    const angleInc = 360 / config.cualidades.length;
    const radius = 190; 
    let currentAngle = 0;

    config.cualidades.forEach((cualidad, index) => {
        let item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `<div class="carousel-icon">${cualidad.icono}</div><div class="carousel-text">${cualidad.texto}</div>`;
        item.style.transform = `rotateY(${index * angleInc}deg) translateZ(${radius}px)`;
        carousel3d.appendChild(item);
    });

    function rotateCarousel(dir) {
        currentAngle += (dir === 'next') ? -angleInc : angleInc;
        carousel3d.style.transform = `translateZ(-${radius}px) rotateY(${currentAngle}deg)`;
    }
    carousel3d.style.transform = `translateZ(-${radius}px) rotateY(${currentAngle}deg)`;
    document.getElementById('btn-next').addEventListener('click', () => rotateCarousel('next'));
    document.getElementById('btn-prev').addEventListener('click', () => rotateCarousel('prev'));

    // 7. APLASTA LA ANSIEDAD (Juego reimaginado)
    let gameScore = 0; let gameActive = false; let activeHole = null; let gameTimer = null;
    const gameGrid = document.getElementById('game-grid'); const scoreDisplay = document.getElementById('game-score');
    const btnStartGame = document.getElementById('btn-start-game'); const holes = document.querySelectorAll('.hole');
    
    // Objetivos malos (Puntos) vs Buenos (Cuidado)
    const targets = [
        { type: 'bad', emoji: '🌪️' }, { type: 'bad', emoji: '📉' }, { type: 'bad', emoji: '🧠' }, // Pensamiento, estrés, mente al mil
        { type: 'good', emoji: '🐸' }, { type: 'good', emoji: '🌮' } // No tocar
    ];

    function popTarget() {
        if (!gameActive) return;
        if (activeHole) { activeHole.textContent = ''; activeHole.dataset.type = ''; activeHole.classList.remove('active-target'); }
        
        activeHole = holes[Math.floor(Math.random() * holes.length)];
        let target = targets[Math.floor(Math.random() * targets.length)];
        
        activeHole.textContent = target.emoji;
        activeHole.dataset.type = target.type;
        activeHole.classList.add('active-target');
        
        gameTimer = setTimeout(() => { if (gameActive) popTarget(); }, Math.random() * 400 + 700);
    }

    holes.forEach(hole => {
        hole.addEventListener('click', () => {
            if (!gameActive || hole !== activeHole || hole.textContent === '') return;
            
            if (hole.dataset.type === 'bad') {
                gameScore++; 
                scoreDisplay.textContent = gameScore; 
                hole.textContent = '✨'; // Purificado
                if (gameScore >= 15) {
                    gameActive = false; clearTimeout(gameTimer); gameGrid.style.display = 'none'; 
                    document.getElementById('game-reward').classList.remove('hidden');
                } else {
                    clearTimeout(gameTimer); setTimeout(popTarget, 200);
                }
            } else if (hole.dataset.type === 'good') {
                // Penalización chistosa
                hole.textContent = '💔';
                gameScore = Math.max(0, gameScore - 1);
                scoreDisplay.textContent = gameScore;
                clearTimeout(gameTimer); setTimeout(popTarget, 400);
            }
        });
    });

    btnStartGame.addEventListener('click', () => {
        gameScore = 0; scoreDisplay.textContent = gameScore; gameActive = true;
        gameGrid.classList.remove('blocked'); btnStartGame.disabled = true; btnStartGame.textContent = "Atacando estrés...";
        popTarget();
    });

    // 8. POCIONES
    let selectedIngs = [];
    const ingBtns = document.querySelectorAll('.ing-btn');
    const btnBrew = document.getElementById('btn-brew');
    const potionResult = document.getElementById('potion-result');

    ingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const ing = btn.getAttribute('data-ing');
            if(btn.classList.contains('selected')) {
                btn.classList.remove('selected');
                selectedIngs = selectedIngs.filter(i => i !== ing);
            } else {
                if(selectedIngs.length < 2) { btn.classList.add('selected'); selectedIngs.push(ing); }
            }
            if(selectedIngs.length === 2) { btnBrew.classList.remove('hidden'); } else { btnBrew.classList.add('hidden'); }
        });
    });

    btnBrew.addEventListener('click', () => {
        const key = selectedIngs.sort().join('+');
        potionResult.textContent = config.pociones[key] || "🧪 Poción Misteriosa: Un abrazo muy fuerte y paz al corazón.";
        potionResult.classList.remove('hidden');
    });

    // 9. BOTIQUÍN Y MODALES
    const modalOverlay = document.getElementById('modal-overlay');
    const modalText = document.getElementById('modal-text');
    document.querySelectorAll('.support-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modalText.innerHTML = btn.getAttribute('data-msg');
            modalOverlay.classList.remove('hidden');
            setTimeout(() => modalOverlay.classList.add('fade-in'), 20);
        });
    });
    document.getElementById('modal-close').addEventListener('click', () => {
        modalOverlay.classList.remove('fade-in'); setTimeout(() => modalOverlay.classList.add('hidden'), 400);
    });

    // 10. MÚSICA Y ENTRADA PRINCIPAL
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    let isPlaying = false;
    function toggleMusic() {
        if(isPlaying) { audio.pause(); musicBtn.textContent = "🎵 Música: OFF"; } 
        else { audio.play().catch(e => console.log("Audio interact", e)); musicBtn.textContent = "🎵 Música: ON"; }
        isPlaying = !isPlaying;
    }
    musicBtn.addEventListener('click', toggleMusic);

    document.getElementById('btn-entrar').addEventListener('click', () => {
        if(!isPlaying) toggleMusic();
        const intro = document.getElementById('intro-screen');
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            
            setTimeout(() => document.querySelector('.line-1').classList.add('visible'), 400);
            setTimeout(() => document.querySelector('.line-2').classList.add('visible'), 1800);
            setTimeout(() => document.querySelector('.line-3').classList.add('visible'), 3400);
            setTimeout(() => document.querySelector('.line-4').classList.add('visible'), 4800);
        }, 1000);
    });

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.phrase-card').forEach(card => scrollObserver.observe(card));

    // 11. CARTA FINAL Y CONFETI
    const letterOverlay = document.getElementById('letter-overlay');
    const letterParagraphs = document.getElementById('letter-paragraphs');
    
    config.mensajeFinal.forEach(pText => {
        let p = document.createElement('p');
        p.classList.add('letter-text');
        p.textContent = pText;
        letterParagraphs.appendChild(p);
    });

    document.getElementById('btn-sorpresa').addEventListener('click', () => {
        letterOverlay.classList.remove('hidden');
        setTimeout(() => letterOverlay.classList.add('fade-in'), 30);
        setTimeout(() => document.getElementById('letter-intro').classList.add('visible'), 800);
        
        setTimeout(() => {
            document.getElementById('letter-body').classList.remove('hidden');
            let parrafos = document.querySelectorAll('#letter-paragraphs .letter-text');
            parrafos.forEach((p, index) => { setTimeout(() => p.classList.add('visible'), index * 2200); });
            setTimeout(() => {
                document.querySelector('.firma').classList.add('visible');
                lanzarConfeti();
                document.getElementById('btn-cerrar').classList.remove('hidden');
            }, parrafos.length * 2200 + 1000);
        }, 2800);
    });

    document.getElementById('btn-cerrar').addEventListener('click', () => {
        letterOverlay.classList.remove('fade-in');
        setTimeout(() => letterOverlay.classList.add('hidden'), 800);
    });

    function lanzarConfeti() {
        const colores = ['#f9d77e', '#c084fc', '#4ade80', '#ffffff', '#f472b6'];
        const container = document.getElementById('confetti-container');
        for (let i = 0; i < 120; i++) {
            let confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(confetti);
        }
        setTimeout(() => container.innerHTML = '', 6500);
    }
});