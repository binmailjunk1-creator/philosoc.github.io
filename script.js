// Enhanced game data with philosophy tracking
const gameData = [
    {
        title: "The Trolley Problem",
        scenario: "A runaway trolley is heading toward five people tied to the tracks. You can pull a lever to divert it to another track, but there's one person on that track who will die instead.",
        choices: [
            { text: "Pull the lever to save five lives", philosophy: "Utilitarian", tag: "Greatest Good" },
            { text: "Don't pull the lever - it's wrong to directly cause someone's death", philosophy: "Deontologist", tag: "Moral Duty" },
            { text: "This scenario is too artificial to judge real moral decisions", philosophy: "Pragmatist", tag: "Real World" }
        ]
    },
    {
        title: "The Cave Allegory",
        scenario: "You've lived your whole life chained in a cave, seeing only shadows on the wall. Someone breaks your chains and shows you the real world outside. What do you do?",
        choices: [
            { text: "Return to tell the other prisoners about reality", philosophy: "Platonist", tag: "Truth Seeker" },
            { text: "Stay outside and enjoy your newfound freedom", philosophy: "Hedonist", tag: "Pleasure" },
            { text: "Question whether this 'real world' is actually real", philosophy: "Skeptic", tag: "Question All" }
        ]
    },
    {
        title: "The Ship of Theseus",
        scenario: "A ship has all its parts gradually replaced over time. When the last original part is replaced, is it still the same ship?",
        choices: [
            { text: "Yes, it's the same ship - identity is about continuity of purpose", philosophy: "Pragmatist", tag: "Function" },
            { text: "Identity is socially and historcally constructed - changing the wood changes something about it, but most of its form stays", philosophy: "Materialist", tag: "Physical" },
            { text: "Identity is just a useful concept we invented - the question is meaningless", philosophy: "Skeptic", tag: "Concepts" }
        ]
    },
    {
        title: "Free Will Dilemma",
        scenario: "Scientists claim they can predict your next decision by scanning your brain. If your choices are predictable, are you truly free?",
        choices: [
            { text: "We have free will despite brain activity - consciousness transcends matter", philosophy: "Idealist", tag: "Mind" },
            { text: "We interact with the world and participate in it accordingly, human beings aren't static or transcendental", philosophy: "Materialist", tag: "Real World" },
            { text: "We create our freedom through authentic choices, regardless of prediction", philosophy: "Existentialist", tag: "Authenticity" }
        ]
    },
    {
        title: "The Experience Machine",
        scenario: "You can plug into a machine that gives you any experiences you want - you'll feel happy and fulfilled, but none of it will be 'real'. Do you plug in?",
        choices: [
            { text: "Yes - happiness and positive experiences are what matter most", philosophy: "Hedonist", tag: "Pleasure" },
            { text: "No - authenticity, real relationships, and genuine achievement matter", philosophy: "Existentialist", tag: "Excellence" },
            { text: "There is something more to reality than physical experience", philosophy: "Idealist", tag: "Self-Creation" }
        ]
    },
    {
        title: "The Veil of Ignorance",
        scenario: "You must design a just society, but you don't know what position you'll have in it - rich or poor, talented or not. What principles do you choose?",
        choices: [
            { text: "Maximize benefits for the worst-off members of society", philosophy: "Utilitarian", tag: "Welfare" },
            { text: "Ensure equal basic rights and opportunities for all", philosophy: "Deontologist", tag: "Rights" },
            { text: "Focus on cultivating virtue and wisdom in citizens", philosophy: "Virtue Ethicist", tag: "Character" },
            { text: "Recognize the position of the people and how they live - and act in a manner that ensures the people get the best form of life possible in the current world", philosophy: "Materialist", tag: "Real World" },
            { text: "Recognize the potential of every particular person and make sure they live their lives accordingly", philosophy: "Platonist", tag: "Metals" }
        ]
    },
    {
        title: "The Meaning of Life",
        scenario: "Someone asks you: 'What's the point of existence?' You've been thinking about this your whole life. What's your answer?",
        choices: [
            { text: "To reduce suffering and increase happiness in the world", philosophy: "Utilitarian", tag: "Happiness" },
            { text: "To create your own meaning through choices and authentic living", philosophy: "Existentialist", tag: "Self-Made" },
            { text: "To develop virtue, wisdom, and excellence of character", philosophy: "Virtue Ethicist", tag: "Flourishing" },
            { text: "The question itself assumes meaning exists - I'm not convinced it does", philosophy: "Skeptic", tag: "Doubt" },
            { text: "The meanin of life exists in the world as it is - one lives in it, deciphers it, and exists accordingly", philosohy: "Materialist", tag: "Real World" }
        ]
    },
    {
        title: "The AI Consciousness Question",
        scenario: "An AI claims to be conscious and asks for rights. It passes every test we give it, but we can't be certain it's truly experiencing anything. What do you decide?",
        choices: [
            { text: "Grant it rights - consciousness is about function, not biology", philosophy: "Pragmatist", tag: "Function" },
            { text: "We have a duty to treat potentially conscious beings with respect", philosophy: "Deontologist", tag: "Duty" },
            { text: "We can never truly know - remain skeptical but cautious", philosophy: "Skeptic", tag: "Unknowable" }
        ]
    }
];

// 10 Philosophical personality types
const philosophyTypes = {
    "Utilitarian": {
        emoji: "⚖️",
        name: "The Utilitarian",
        subtitle: "The Greatest Good Calculator",
        description: "You believe in maximizing happiness and minimizing suffering for the greatest number of people. Your moral compass points toward outcomes - what matters is not the intention behind an action, but its consequences for human welfare. You're practical, compassionate, and always thinking about the bigger picture.",
        traits: [
            { title: "Core Belief", text: "The right action is the one that produces the best overall consequences" },
            { title: "Strength", text: "Practical problem-solving focused on real-world welfare" },
            { title: "Challenge", text: "Sometimes struggles with individual rights when they conflict with the greater good" },
            { title: "Decision Style", text: "Weighs costs and benefits, seeks data-driven solutions" }
        ],
        philosophers: ["John Stuart Mill", "Jeremy Bentham", "Peter Singer"],
        compatibleWith: ["Pragmatist", "Virtue Ethicist"]
    },
    "Deontologist": {
        emoji: "📏",
        name: "The Deontologist",
        subtitle: "The Moral Rule Keeper",
        description: "You believe in universal moral duties and rules that must be followed regardless of consequences. For you, some actions are simply right or wrong in themselves - lying, breaking promises, or using people as mere means are wrong even if they might produce good outcomes. You value consistency, dignity, and moral integrity above all.",
        traits: [
            { title: "Core Belief", text: "Some actions are inherently right or wrong, regardless of consequences" },
            { title: "Strength", text: "Unwavering moral principles and respect for human dignity" },
            { title: "Challenge", text: "Rigid rules sometimes conflict with compassionate outcomes" },
            { title: "Decision Style", text: "Applies universal principles consistently across situations" }
        ],
        philosophers: ["Immanuel Kant", "W.D. Ross", "Christine Korsgaard"],
        compatibleWith: ["Virtue Ethicist", "Idealist"]
    },
    "Virtue Ethicist": {
        emoji: "🌟",
        name: "The Virtue Ethicist",
        subtitle: "The Character Builder",
        description: "You focus on becoming an excellent person rather than just following rules or calculating outcomes. For you, ethics is about cultivating virtues like courage, wisdom, justice, and temperance. You believe that good actions flow naturally from good character, and that the goal of life is human flourishing (eudaimonia).",
        traits: [
            { title: "Core Belief", text: "Ethics is about character - being virtuous leads to right action" },
            { title: "Strength", text: "Holistic approach to human flourishing and excellence" },
            { title: "Challenge", text: "Virtue can be culturally relative and hard to define precisely" },
            { title: "Decision Style", text: "Asks 'What would a virtuous person do?' in each situation" }
        ],
        philosophers: ["Aristotle", "Thomas Aquinas", "Alasdair MacIntyre"],
        compatibleWith: ["Deontologist", "Platonist"]
    },
    "Existentialist": {
        emoji: "🎭",
        name: "The Existentialist",
        subtitle: "The Authentic Self-Creator",
        description: "You believe that existence precedes essence - you create yourself through your choices and actions. There's no predetermined human nature or cosmic purpose, which means you're radically free but also fully responsible for who you become. You value authenticity, individual freedom, and the courage to create meaning in an absurd universe.",
        traits: [
            { title: "Core Belief", text: "You are condemned to be free - you must create your own essence" },
            { title: "Strength", text: "Embraces radical freedom and personal responsibility" },
            { title: "Challenge", text: "Freedom can be overwhelming; authenticity can be isolating" },
            { title: "Decision Style", text: "Chooses based on authentic self-expression and personal values" }
        ],
        philosophers: ["Jean-Paul Sartre", "Simone de Beauvoir", "Albert Camus"],
        compatibleWith: ["Skeptic", "Pragmatist"]
    },
    "Skeptic": {
        emoji: "🔍",
        name: "The Skeptic",
        subtitle: "The Eternal Questioner",
        description: "You believe in questioning assumptions, demanding evidence, and remaining intellectually humble. You're suspicious of dogma, absolute claims, and simple answers to complex questions. Your strength lies in rigorous thinking and helping others avoid false beliefs, though sometimes you struggle to commit to any firm positions.",
        traits: [
            { title: "Core Belief", text: "Most of what we think we know should be questioned and examined" },
            { title: "Strength", text: "Excellent critical thinking and intellectual honesty" },
            { title: "Challenge", text: "Skepticism can lead to paralysis and difficulty making decisions" },
            { title: "Decision Style", text: "Seeks evidence, questions assumptions, remains open to revision" }
        ],
        philosophers: ["Socrates", "David Hume", "Sextus Empiricus"],
        compatibleWith: ["Pragmatist", "Existentialist"]
    },
    "Pragmatist": {
        emoji: "🛠️",
        name: "The Pragmatist",
        subtitle: "The Practical Problem Solver",
        description: "You believe that the value of ideas lies in their practical consequences and usefulness. Abstract theories matter less than what works in the real world. You're flexible, experimental, and focused on solving concrete problems rather than pursuing absolute truths. For you, truth itself is what works reliably in practice.",
        traits: [
            { title: "Core Belief", text: "The truth is what works - ideas should be judged by their practical consequences" },
            { title: "Strength", text: "Flexible, adaptive, focused on real-world solutions" },
            { title: "Challenge", text: "May sacrifice important principles for expedient solutions" },
            { title: "Decision Style", text: "Tests ideas through experience and adjusts based on results" }
        ],
        philosophers: ["John Dewey", "William James", "Richard Rorty"],
        compatibleWith: ["Utilitarian", "Skeptic"]
    },
    "Platonist": {
        emoji: "💎",
        name: "The Platonist",
        subtitle: "The Truth Seeker",
        description: "You believe in eternal truths and perfect forms that exist beyond the physical world. For you, the material world is just a shadow of higher reality. You're drawn to mathematics, logic, and abstract reasoning. You believe that through philosophical contemplation, we can discover absolute truths about justice, beauty, and goodness.",
        traits: [
            { title: "Core Belief", text: "True reality exists in perfect, eternal forms beyond the physical world" },
            { title: "Strength", text: "Seeks absolute truth and objective standards of value" },
            { title: "Challenge", text: "Abstract ideals can seem disconnected from practical life" },
            { title: "Decision Style", text: "Seeks to align actions with eternal truths and perfect standards" }
        ],
        philosophers: ["Plato", "Augustine", "Anselm"],
        compatibleWith: ["Virtue Ethicist", "Idealist"]
    },
    "Hedonist": {
        emoji: "🌺",
        name: "The Hedonist",
        subtitle: "The Pleasure Seeker",
        description: "You believe that pleasure is the highest good and pain the greatest evil. Life should be lived to maximize enjoyable experiences and minimize suffering. You're not necessarily shallow - you might prefer refined pleasures of the mind over crude physical ones, but ultimately you judge everything by how it feels.",
        traits: [
            { title: "Core Belief", text: "Pleasure is good, pain is bad - life should maximize positive experiences" },
            { title: "Strength", text: "Appreciates life's joys and values personal well-being" },
            { title: "Challenge", text: "May neglect long-term consequences or others' needs" },
            { title: "Decision Style", text: "Chooses based on what brings the most pleasure and least pain" }
        ],
        philosophers: ["Epicurus", "Jeremy Bentham", "Michel Onfray"],
        compatibleWith: ["Utilitarian", "Existentialist"]
    },
    "Materialist": {
        emoji: "⚛️",
        name: "The Materialist",
        subtitle: "The Physical Realist",
        description: "You believe that reality consists entirely of matter and energy operating according to physical laws. Consciousness, thoughts, and experiences are all products of brain activity. You're scientifically minded and skeptical of supernatural claims, finding beauty and meaning in the natural world without needing anything beyond it.",
        traits: [
            { title: "Core Belief", text: "Everything that exists is physical - mind emerges from matter" },
            { title: "Strength", text: "Scientifically grounded and evidence-based worldview" },
            { title: "Challenge", text: "May struggle to account for subjective experiences and values" },
            { title: "Decision Style", text: "Relies on scientific evidence and natural explanations" }
        ],
        philosophers: ["Democritus", "Karl Marx", "Daniel Dennett"],
        compatibleWith: ["Skeptic", "Pragmatist"]
    },
    "Idealist": {
        emoji: "💭",
        name: "The Idealist",
        subtitle: "The Mind-First Philosopher",
        description: "You believe that reality is fundamentally mental or spiritual in nature. Ideas, consciousness, or spirit are more fundamental than matter. The physical world might be an illusion, a construction of mind, or dependent on consciousness for its existence. You find the deepest truths in introspection and rational reflection.",
        traits: [
            { title: "Core Belief", text: "Mind or spirit is more fundamental than matter" },
            { title: "Strength", text: "Values consciousness, meaning, and inner experience" },
            { title: "Challenge", text: "May seem disconnected from practical, material concerns" },
            { title: "Decision Style", text: "Guided by rational insight and spiritual intuition" }
        ],
        philosophers: ["George Berkeley", "G.W.F. Hegel", "Immanuel Kant"],
        compatibleWith: ["Platonist", "Deontologist"]
    }
};

// Game State
let currentQuestionIndex = 0;
let philosophyScores = {};
let gameInProgress = false;

// Initialize philosophy scores
Object.keys(philosophyTypes).forEach(philosophy => {
    philosophyScores[philosophy] = 0;
});

// Navigation Functions
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
}

function showHome() {
    showSection('home-section');
    document.getElementById('home-link').classList.add('active');
}

function showGame() {
    showSection('game-section');
    document.getElementById('game-link').classList.add('active');
    if (!gameInProgress) {
        startGame();
    }
}

function showPhilosophies() {
    showSection('philosophies-section');
    document.getElementById('philosophies-link').classList.add('active');
    displayAllPhilosophies();
}

function showGroupResults() {
    showSection('group-results-section');
    document.getElementById('results-link').classList.add('active');
    displayGroupResults();
}

function showResults() {
    showSection('results-section');
    displayResults();
}

// Game Logic
function startGame() {
    currentQuestionIndex = 0;
    gameInProgress = true;
    
    // Reset philosophy scores
    Object.keys(philosophyTypes).forEach(philosophy => {
        philosophyScores[philosophy] = 0;
    });
    
    showQuestion();
}

function showQuestion() {
    const question = gameData[currentQuestionIndex];
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1} of 8`;
    document.getElementById('progress-fill').style.width = `${((currentQuestionIndex + 1) / 8) * 100}%`;
    document.getElementById('scenario-title').textContent = question.title;
    document.getElementById('scenario-text').textContent = question.scenario;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerHTML = `
            ${choice.text}
            <span class="philosophy-tag">${choice.tag}</span>
        `;
        button.onclick = () => selectChoice(index);
        choicesDiv.appendChild(button);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function selectChoice(choiceIndex) {
    const question = gameData[currentQuestionIndex];
    const choice = question.choices[choiceIndex];
    
    // Add to philosophy score
    philosophyScores[choice.philosophy]++;
    
    // Disable choice buttons and highlight selected
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === choiceIndex) {
            btn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
            btn.style.transform = 'scale(1.02)';
        } else {
            btn.style.opacity = '0.5';
        }
    });
    
    // Show next button or finish game
    setTimeout(() => {
        if (currentQuestionIndex < gameData.length - 1) {
            document.getElementById('next-btn').classList.remove('hidden');
        } else {
            endGame();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {
    gameInProgress = false;
    setTimeout(() => {
        showResults();
    }, 500);
}

function playAgain() {
    showGame();
}

// Results Display
function displayResults() {
    // Find dominant philosophy
    let dominantPhilosophy = '';
    let maxScore = 0;
    
    for (let philosophy in philosophyScores) {
        if (philosophyScores[philosophy] > maxScore) {
            maxScore = philosophyScores[philosophy];
            dominantPhilosophy = philosophy;
        }
    }
    
    const result = philosophyTypes[dominantPhilosophy];
    
    // Display results
    document.getElementById('philosophy-avatar').textContent = result.emoji;
    document.getElementById('philosophy-name').textContent = result.name;
    document.getElementById('philosophy-subtitle').textContent = result.subtitle;
    document.getElementById('philosophy-description').textContent = result.description;
    
    // Display traits
    const traitsDiv = document.getElementById('philosophy-traits');
    traitsDiv.innerHTML = '';
    result.traits.forEach(trait => {
        const traitCard = document.createElement('div');
        traitCard.className = 'trait-card';
        traitCard.innerHTML = `
            <div class="trait-title">${trait.title}</div>
            <div class="trait-text">${trait.text}</div>
        `;
        traitsDiv.appendChild(traitCard);
    });
    
    // Display famous philosophers
    const philosophersDiv = document.getElementById('famous-philosophers');
    philosophersDiv.innerHTML = result.philosophers.map(philosopher => 
        `<span class="philosophy-badge" style="margin: 5px; padding: 8px 16px; display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">${philosopher}</span>`
    ).join('');
}

// Display all philosophies
function displayAllPhilosophies() {
    const gridDiv = document.getElementById('all-philosophies-grid');
    gridDiv.innerHTML = '';
    gridDiv.className = 'philosophy-grid';
    
    Object.keys(philosophyTypes).forEach(key => {
        const philosophy = philosophyTypes[key];
        const card = document.createElement('div');
        card.className = 'philosophy-card';
        card.innerHTML = `
            <div class="emoji">${philosophy.emoji}</div>
            <div class="name">${philosophy.name}</div>
            <div class="subtitle">${philosophy.subtitle}</div>
        `;
        card.onclick = () => showPhilosophyDetail(key);
        gridDiv.appendChild(card);
    });
}

function showPhilosophyDetail(philosophyKey) {
    const philosophy = philosophyTypes[philosophyKey];
    
    // Create a modal or detail view (simplified version)
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
        z-index: 2000;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 40px; border-radius: 20px; max-width: 600px; max-height: 80vh; overflow-y: auto;">
            <div style="text-align: center;">
                <div style="font-size: 4em; margin-bottom: 20px;">${philosophy.emoji}</div>
                <h2>${philosophy.name}</h2>
                <p style="font-style: italic; color: #718096; margin-bottom: 20px;">${philosophy.subtitle}</p>
                <p style="line-height: 1.6; margin-bottom: 20px;">${philosophy.description}</p>
                <p><strong>Famous Philosophers:</strong> ${philosophy.philosophers.join(', ')}</p>
                <button onclick="this.closest('div').style.display='none'" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 10px; cursor: pointer;">Close</button>
            </div>
        </div>
    `;
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
    
    document.body.appendChild(modal);
}

// Group Results Functions
function getGroupResults() {
    return JSON.parse(localStorage.getItem('philosophyGroupResults')) || [];
}

function saveGroupResult(result) {
    const results = getGroupResults();
    results.push({
        ...result,
        timestamp: new Date().toLocaleString(),
        id: Date.now()
    });
    localStorage.setItem('philosophyGroupResults', JSON.stringify(results));
}

function submitResult() {
    const playerName = document.getElementById('player-name').value.trim() || 'Anonymous';
    
    // Find the dominant philosophy from current game
    let dominantPhilosophy = '';
    let maxScore = 0;
    
    for (let philosophy in philosophyScores) {
        if (philosophyScores[philosophy] > maxScore) {
            maxScore = philosophyScores[philosophy];
            dominantPhilosophy = philosophy;
        }
    }

    if (!dominantPhilosophy) {
        alert('Please complete the quiz first!');
        return;
    }

    const result = {
        name: playerName,
        philosophy: dominantPhilosophy,
        emoji: philosophyTypes[dominantPhilosophy].emoji,
        subtitle: philosophyTypes[dominantPhilosophy].subtitle
    };

    saveGroupResult(result);
    
    // Clear input and show success
    document.getElementById('player-name').value = '';
    alert(`✅ ${playerName}'s result added! You're "${philosophyTypes[dominantPhilosophy].name}"`);
}

function displayGroupResults() {
    const results = getGroupResults();
    const totalParticipants = results.length;
    
    // Update stats
    document.getElementById('total-participants').textContent = totalParticipants;
    
    if (totalParticipants === 0) {
        document.getElementById('most-common-type').textContent = '-';
        document.getElementById('unique-types').textContent = '0';
        document.getElementById('group-results-list').innerHTML = `
            <div style="text-align: center; padding: 40px; color: #718096;">
                <h3>No results yet!</h3>
                <p>Take the quiz and submit your result to get started.</p>
            </div>
        `;
        return;
    }

    // Calculate most common type
    const typeCounts = {};
    results.forEach(result => {
        typeCounts[result.philosophy] = (typeCounts[result.philosophy] || 0) + 1;
    });

    let mostCommon = '';
    let maxCount = 0;
    for (let type in typeCounts) {
        if (typeCounts[type] > maxCount) {
            maxCount = typeCounts[type];
            mostCommon = type;
        }
    }

    document.getElementById('most-common-type').textContent = philosophyTypes[mostCommon]?.name.replace('The ', '') || '-';
    document.getElementById('unique-types').textContent = Object.keys(typeCounts).length;

    // Display results list
    const resultsList = document.getElementById('group-results-list');
    resultsList.innerHTML = '<div class="results-list">' + 
        results.slice().reverse().map(result => `
            <div class="result-item">
                <div class="result-info">
                    <div class="result-avatar">${result.emoji}</div>
                    <div class="result-details">
                        <h4>${escapeHtml(result.name)}</h4>
                        <p>${philosophyTypes[result.philosophy]?.name || result.philosophy}</p>
                    </div>
                </div>
                <div class="timestamp">${result.timestamp}</div>
            </div>
        `).join('') + '</div>';
}

function exportResults() {
    const results = getGroupResults();
    if (results.length === 0) {
        alert('No results to export yet!');
        return;
    }

    const exportText = `Philosoc Quiz Results\n` +
        `Generated: ${new Date().toLocaleString()}\n` +
        `Total Participants: ${results.length}\n\n` +
        results.map((result, index) => 
            `${index + 1}. ${result.name} - ${philosophyTypes[result.philosophy]?.name || result.philosophy}`
        ).join('\n');

    navigator.clipboard.writeText(exportText).then(() => {
        alert('📋 Results copied to clipboard! You can now paste them anywhere.');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = exportText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('📋 Results copied to clipboard!');
    });
}

function clearResults() {
    if (confirm('Are you sure you want to clear all group results? This cannot be undone.')) {
        localStorage.removeItem('philosophyGroupResults');
        displayGroupResults();
        alert('🗑️ All results cleared!');
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    showHome();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.section) {
        showSection(e.state.section);
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (gameInProgress && document.getElementById('game-section').classList.contains('active')) {
        const choiceButtons = document.querySelectorAll('.choice-btn:not(:disabled)');
        const keyNum = parseInt(e.key);
        if (keyNum >= 1 && keyNum <= choiceButtons.length) {
            choiceButtons[keyNum - 1].click();
        }
    }
    
    if (e.key === 'Enter') {
        const nextBtn = document.getElementById('next-btn');
        if (!nextBtn.classList.contains('hidden')) {
            nextBtn.click();
        }
    }
});
