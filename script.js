function sendMessage() {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    
    if (chatInput.value.trim() !== "") {
        const message = document.createElement("div");
        message.textContent = chatInput.value;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
        chatInput.value = "";
    }
}
