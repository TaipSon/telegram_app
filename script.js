const chatBox = document.getElementById("chat-box");
const actionsBox = document.getElementById("actions-box");

let gameHistory = []; // Массив для хранения истории игры
let isGameStarted = false; // Флаг, указывающий, началась ли игра

function saveGame() {
    localStorage.setItem("gameHistory", JSON.stringify(gameHistory)); // Сохраняем историю в локальное хранилище
}

function loadGame() {
    const savedHistory = localStorage.getItem("gameHistory");
    if (savedHistory) {
        gameHistory = JSON.parse(savedHistory); // Загружаем сохранённую историю
        gameHistory.forEach(entry => showMessage(entry.text, entry.isUserChoice, entry.isInactiveChoice));
    }
}

function showMessage(text, isUserChoice = false, isInactiveChoice = false) {
    const message = document.createElement("p");
    message.innerText = text;

    if (isUserChoice) {
        message.style.fontWeight = "bold";
        message.style.color = "#007bff"; // Синий цвет для выбранного варианта
        message.style.border = "1px solid #007bff"; // Рамка синего цвета для выбранного варианта
        message.style.padding = "5px";
        message.style.borderRadius = "8px";
    } else if (isInactiveChoice) {
        message.style.color = "#666"; // Серый цвет для невыбранного варианта
        message.style.border = "1px solid #666"; // Рамка серого цвета для невыбранного варианта
        message.style.padding = "5px";
        message.style.borderRadius = "8px";
    }

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Сохраняем сообщение в истории
    gameHistory.push({ text, isUserChoice, isInactiveChoice });
    saveGame();
}

function clearOptions() {
    actionsBox.innerHTML = '';
}

function showOptions(option1Text, option2Text, option1Action, option2Action) {
    clearOptions();

    const option1Button = document.createElement("button");
    option1Button.innerText = option1Text;
    option1Button.onclick = () => {
        showMessage(option1Text, true); // Показ выбранного действия
        showMessage(option2Text, false, true); // Показ невыбранного действия в сером цвете
        clearOptions();
        option1Action();
    };

    const option2Button = document.createElement("button");
    option2Button.innerText = option2Text;
    option2Button.onclick = () => {
        showMessage(option2Text, true); // Показ выбранного действия
        showMessage(option1Text, false, true); // Показ невыбранного действия в сером цвете
        clearOptions();
        option2Action();
    };

    actionsBox.appendChild(option1Button);
    actionsBox.appendChild(option2Button);
}

// Функция для начала игры
function startGame() {
    const startGameButton = document.createElement("button");
    startGameButton.innerText = "Начать игру";
    startGameButton.onclick = () => {
        startGameButton.remove();
        isGameStarted = true; // Игра начата
        showMessage("Элисон: Привет! Ты готов начать наше путешествие?");
        showOptions(
            "Спросить о её миссии",
            "Успокоить её",
            () => {
                showMessage("Элисон: Моя миссия — помочь тебе разобраться с тем, что происходит...");
                showOptions("Продолжить", "Сменить тему", () => {
                    showMessage("Элисон: Хорошо, у меня есть важное сообщение...");
                }, () => {
                    showMessage("Элисон: Конечно, можем поговорить о чём-то другом.");
                });
            },
            () => {
                showMessage("Элисон: Спасибо, мне становится спокойнее, когда ты рядом.");
                showOptions("Спросить о плане", "Пожелать удачи", () => {
                    showMessage("Элисон: У меня есть план, как выбраться отсюда.");
                }, () => {
                    showMessage("Элисон: Спасибо, я надеюсь, что у нас все получится.");
                });
            }
        );
    };

    actionsBox.appendChild(startGameButton);
}

// Функция для сброса игры
function resetGame() {
    localStorage.removeItem("gameHistory"); // Удаляем историю из локального хранилища
    gameHistory = []; // Очищаем массив истории
    chatBox.innerHTML = ''; // Очищаем чат
    actionsBox.innerHTML = ''; // Очищаем кнопки действий
    isGameStarted = false; // Сбрасываем флаг начала игры
    startGame(); // Показать кнопку "Начать игру"
}

// Кнопка сброса
const resetButton = document.createElement("button");
resetButton.innerText = "Начать игру заново";
resetButton.onclick = resetGame;
actionsBox.appendChild(resetButton);

// Загрузка сохранённой игры при старте
loadGame();

// Проверка, начата ли игра, и отображение кнопки
if (!isGameStarted) {
    startGame(); // Показываем кнопку только если игра не начата
}
