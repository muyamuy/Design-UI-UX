const chatbox = document.getElementById('chatbox');
const toggleBtn = document.getElementById('toggleBtn');
const chatBody = document.getElementById('chat-body');
const messagesEl = document.getElementById('messages');
const msgInput = document.getElementById('msgInput');
const sendBtn = document.getElementById('sendBtn');

let open = false;

// Tampilkan pesan
function renderMessage(text, who='user'){
  const div = document.createElement('div');
  div.className = 'message ' + (who === 'user' ? 'user' : 'bot');
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Tombol minimize / open
toggleBtn.addEventListener('click', () => {
  open = !open;
  if(open){
    chatbox.classList.remove('chatbox-closed');
    chatBody.classList.remove('hidden');
    toggleBtn.textContent = '×';
  } else {
    chatbox.classList.add('chatbox-closed');
    chatBody.classList.add('hidden');
    toggleBtn.textContent = '_';
  }
});

// Kirim pesan
function sendMessage(){
  const txt = msgInput.value.trim();
  if(!txt) return;

  renderMessage(txt, 'user');
  msgInput.value = '';

  setTimeout(() => {
    renderMessage("Terima kasih, pesan Anda: '" + txt + "' sudah diterima.", 'bot');
  }, 600);
}

sendBtn.addEventListener('click', sendMessage);
msgInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') sendMessage();
});