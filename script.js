const chatBox = document.getElementById("chat-box");
const actionsBox = document.getElementById("actions-box");

function showMessage(text, isUserChoice = false, isInactiveChoice = false) {
    const message = document.createElement("p");
    message.innerText = text;

    if (isUserChoice) {
        message.style.fontWeight = "bold";
        message.style.color = "#007bff"; // Синий цвет для выбранного варианта
    } else if (isInactiveChoice) {
        message.style.color = "#666"; // Серый цвет для невыбранного варианта
    }

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
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

// Стартовое сообщение и кнопка
showMessage("Элисон: Привет... ты меня слышишь?");
const startGameButton = document.createElement("button");
startGameButton.innerText = "Начать игру";
startGameButton.onclick = () => {
    startGameButton.remove();
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
