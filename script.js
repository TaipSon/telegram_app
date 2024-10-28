const chatBox = document.getElementById("chat-box");

function showMessage(text) {
    const message = document.createElement("p");
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
}

function chooseOption(option) {
    if (option === 1) {
        showMessage("Вы выбрали вариант 1. Элисон отвечает...");
        // Дополнительная логика сюжета
    } else if (option === 2) {
        showMessage("Вы выбрали вариант 2. Элисон говорит...");
        // Дополнительная логика сюжета
    }
}

// Первое сообщение
showMessage("Элисон: Привет... ты меня слышишь?");
