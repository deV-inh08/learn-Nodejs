const socket = io('http://localhost:3000');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Nhận tin nhắn từ server
socket.on('message-from-server-to-client', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống tin nhắn mới nhất
});

// Gửi tin nhắn khi nhấn nút
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('new-message', message);
        messageInput.value = ''; // Xóa input sau khi gửi
    }
});

// Gửi tin nhắn khi nhấn Enter
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendBtn.click();
});