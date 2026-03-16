let currentMode = "players"; // 'players' | 'word'
let currentRound = 1;
let currentSecretPlayer = null;
let currentWordRound = 1; // 1–30

// word-game state
let wordState = {
  wordIndex: 0, // index in WORDS
  display: [],
  guessed: [],
  attempts: 6,
};

document.addEventListener("DOMContentLoaded", () => {
  setupModeToggle();
  setupRoundSelect();
  setupControls();
  loadRound(1);
  initWordGameFromRound(1);
  setupHomeScreen();
});

function $(id) {
  return document.getElementById(id);
}

function setupModeToggle() {
  const playersBtn = $("mode-players");
  const wordBtn = $("mode-word");
  playersBtn.addEventListener("click", () => {
    currentMode = "players";
    playersBtn.classList.add("active");
    wordBtn.classList.remove("active");
    $("panel-players").style.removeProperty("display");
    $("panel-word").style.display = "none";
  });

  wordBtn.addEventListener("click", () => {
    currentMode = "word";
    playersBtn.classList.remove("active");
    wordBtn.classList.add("active");
    $("panel-players").style.display = "none";
    $("panel-word").style.removeProperty("display");
  });
}

function setupRoundSelect() {
  const select = $("round-select");
  select.innerHTML = "";
  for (let r = 1; r <= PLAYER_ROUNDS.length; r++) {
    const opt = document.createElement("option");
    opt.value = String(r);
    opt.textContent = `Round ${r}`;
    select.appendChild(opt);
  }
  select.value = "1";
  select.addEventListener("change", () => {
    const r = parseInt(select.value, 10);
    loadRound(r);
  });
}

function loadRound(round) {
  currentRound = round;
  currentSecretPlayer = null;
  renderSecretBox();
  renderGrid();
}

function renderGrid() {
  const container = $("players-grid");
  container.innerHTML = "";
  const ids = PLAYER_ROUNDS[currentRound - 1] || [];
  ids.forEach((id, index) => {
    const player = PLAYERS_DATABASE.find((p) => p.id === id);
    if (!player) return;
    const card = createCard(player, index);
    container.appendChild(card);
  });
}

function createCard(player, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.id = String(player.id);
  card.dataset.index = String(index);

  const initials = player.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "card-image";

  const img = document.createElement("img");
  img.src = `Images/${player.imageFile}`;
  img.alt = player.name;
  img.loading = "lazy";
  img.onerror = () => {
    img.remove();
  };

  imgWrapper.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";
  const nameEl = document.createElement("div");
  nameEl.className = "card-name";
  nameEl.textContent = player.name;
  nameEl.title = player.name; // Tooltip for full name

  const metaEl = document.createElement("div");
  metaEl.className = "card-meta";
  metaEl.textContent = `${player.nationality} • ${player.position}`;
  metaEl.title = `${player.nationality} • ${player.position}`; // Tooltip for full meta

  body.appendChild(nameEl);
  body.appendChild(metaEl);

  card.appendChild(imgWrapper);
  card.appendChild(body);

  card.addEventListener("click", () => {
    // Toggle hidden state for this card
    card.classList.toggle("hidden");

    // Also select as secret player
    currentSecretPlayer = player;
    document
      .querySelectorAll(".card.selected")
      .forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    renderSecretBox();
  });

  return card;
}

function renderSecretBox() {
  const container = $("secret-box");
  container.innerHTML = "";

  const label = document.createElement("div");
  label.className = "secret-label";
  label.textContent = "Secret Player";
  container.appendChild(label);

  const inner = document.createElement("div");
  inner.className = "secret-inner";

  if (!currentSecretPlayer) {
    const placeholder = document.createElement("div");
    placeholder.className = "secret-placeholder";
    placeholder.textContent = "Click a player card to choose the secret player.";
    inner.appendChild(placeholder);
  } else {
    const avatar = document.createElement("div");
    avatar.className = "secret-avatar";

    const img = document.createElement("img");
    img.src = `Images/${currentSecretPlayer.imageFile}`;
    img.alt = currentSecretPlayer.name;
    img.onerror = () => {
      img.remove();
      avatar.textContent = currentSecretPlayer.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();
    };
    avatar.appendChild(img);

    const text = document.createElement("div");
    text.className = "secret-text-main";
    const nameEl = document.createElement("div");
    nameEl.className = "secret-name";
    nameEl.textContent = currentSecretPlayer.name;

    const metaEl = document.createElement("div");
    metaEl.className = "secret-meta";
    metaEl.textContent = `${currentSecretPlayer.nationality} • ${currentSecretPlayer.position}`;

    text.appendChild(nameEl);
    text.appendChild(metaEl);

    inner.appendChild(avatar);
    inner.appendChild(text);
  }

  container.appendChild(inner);
}

function setupControls() {
  $("btn-clear-secret").addEventListener("click", () => {
    currentSecretPlayer = null;
    document
      .querySelectorAll(".card.selected")
      .forEach((c) => c.classList.remove("selected"));
    renderSecretBox();
  });

  $("btn-new-round").addEventListener("click", () => {
    const total = PLAYER_ROUNDS.length;
    const next = currentRound % total + 1;
    $("round-select").value = String(next);
    loadRound(next);
  });

  $("btn-reveal").addEventListener("click", () => {
    if (!currentSecretPlayer) {
      alert("First click a player card to choose the secret player.");
      return;
    }
    const card = document.querySelector(
      `.card[data-id="${currentSecretPlayer.id}"]`
    );
    if (card) {
      card.classList.add("selected");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // word controls
  $("btn-word-next").addEventListener("click", () => {
    const nextRound = currentWordRound % WORD_ROUNDS.length + 1;
    initWordGameFromRound(nextRound);
  });

  $("btn-word-guess").addEventListener("click", () => {
    submitLetterGuess();
  });

  $("word-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitLetterGuess();
  });
}

function initWordGame(index) {
  wordState.wordIndex = index;
  wordState.guessed = [];
  wordState.attempts = 6;
  const word = WORDS[index].word.toUpperCase();
  wordState.display = Array.from(word).map((ch) => (ch === " " ? " " : "_"));
  renderWordPanel();
}

function initWordGameFromRound(roundNumber) {
  currentWordRound = roundNumber;
  const wordIndex = WORD_ROUNDS[roundNumber - 1] ?? 0;
  initWordGame(wordIndex);
}

function renderWordPanel() {
  const wordObj = WORDS[wordState.wordIndex];
  $("word-display").textContent = wordState.display.join(" ");
  $("word-category").textContent = wordObj.category;
  $("word-attempts").textContent = String(wordState.attempts);
  $("word-used").textContent =
    wordState.guessed.length > 0 ? wordState.guessed.join(", ") : "—";
}

function submitLetterGuess() {
  const input = $("word-input");
  const raw = input.value.trim().toUpperCase();
  if (!raw || raw.length !== 1 || !/[A-Z]/.test(raw)) {
    input.value = "";
    return;
  }
  const letter = raw;
  if (wordState.guessed.includes(letter)) {
    input.value = "";
    return;
  }
  wordState.guessed.push(letter);

  const word = WORDS[wordState.wordIndex].word.toUpperCase();
  let hit = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordState.display[i] = letter;
      hit = true;
    }
  }
  if (!hit) {
    wordState.attempts -= 1;
  }

  input.value = "";
  renderWordPanel();

  if (!wordState.display.includes("_")) {
    setTimeout(() => {
      alert(`Nice! The word was ${word}.`);
      const nextRound = currentWordRound % WORD_ROUNDS.length + 1;
      initWordGameFromRound(nextRound);
    }, 50);
  } else if (wordState.attempts <= 0) {
    setTimeout(() => {
      alert(`Out of attempts. The word was ${word}.`);
      initWordGame(wordState.wordIndex);
    }, 50);
  }
}

function setupHomeScreen() {
  const home = $("home-screen");
  const btnPlayers = $("home-players");
  const btnWord = $("home-word");
  const layout = $("main-layout");

  const openPlayers = () => {
    currentMode = "players";
    $("mode-players").classList.add("active");
    $("mode-word").classList.remove("active");
    $("panel-players").style.removeProperty("display");
    $("panel-word").style.display = "none";
    layout.style.opacity = "1";
    home.style.display = "none";
  };

  const openWord = () => {
    currentMode = "word";
    $("mode-players").classList.remove("active");
    $("mode-word").classList.add("active");
    $("panel-players").style.display = "none";
    $("panel-word").style.removeProperty("display");
    layout.style.opacity = "1";
    home.style.display = "none";
  };

  btnPlayers.addEventListener("click", openPlayers);
  btnWord.addEventListener("click", openWord);

  // Hide main layout behind home screen for smoother first impression
  layout.style.opacity = "0.2";
}

