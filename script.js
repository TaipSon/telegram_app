const chatBox = document.getElementById("chat-box");

function showMessage(text) {
    const message = document.createElement("p");
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
}

function chooseOption(option) {
    if (option === 1) {
        showMessage("Элисон: Вы выбрали вариант 1. Я рада, что ты здесь! Что ты хочешь узнать?");
        showOptions(); // Показываем новые варианты
    } else if (option === 2) {
        showMessage("Элисон: Вы выбрали вариант 2. Я немного волнуюсь... Ты готов помочь мне?");
        showOptions(); // Показываем новые варианты
    }
}

// Функция для показа вариантов выбора
function showOptions() {
    const option1Button = document.createElement("button");
    option1Button.innerText = "Спросить о её миссии";
    option1Button.onclick = () => {
        showMessage("Элисон: Моя миссия — помочь тебе разобраться с тем, что происходит...");
        // Здесь можно продолжить сюжет
    };

    const option2Button = document.createElement("button");
    option2Button.innerText = "Успокоить её";
    option2Button.onclick = () => {
        showMessage("Элисон: Спасибо, мне становится спокойнее, когда ты рядом.");
        // Здесь можно продолжить сюжет
    };

    chatBox.appendChild(option1Button);
    chatBox.appendChild(option2Button);
}

// Первое сообщение
showMessage("Элисон: Привет... ты меня слышишь?");

// Пример вызова выбора
const startGameButton = document.createElement("button");
startGameButton.innerText = "Начать игру";
startGameButton.onclick = () => {
    showMessage("Элисон: Привет! Ты готов начать наше путешествие?");
    showMessage("Выберите вариант: ");
    chooseOption(1); // Или chooseOption(2) для другого ответа
};

chatBox.appendChild(startGameButton);
