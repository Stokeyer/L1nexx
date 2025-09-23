// Конфигурация для Telegram Bot
export const TELEGRAM_CONFIG = {
    // Замените на ваш токен бота (получить у @BotFather)
    BOT_TOKEN: 'YOUR_BOT_TOKEN',
    
    // Замените на ваш chat ID (можно получить у @userinfobot)
    CHAT_ID: 'YOUR_CHAT_ID',
    
    // URL для отправки сообщений
    API_URL: 'https://api.telegram.org/bot'
};

// Функция для отправки сообщения в Telegram
export const sendTelegramMessage = async (data: {
    name: string;
    email: string;
    company: string;
    theme: string;
    message: string;
}) => {
    const { BOT_TOKEN, CHAT_ID, API_URL } = TELEGRAM_CONFIG;
    
    const formattedMessage = `
📧 <b>Новое сообщение с сайта</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
🏢 <b>Компания:</b> ${data.company || 'Не указана'}
📋 <b>Тема:</b> ${data.theme}
💬 <b>Сообщение:</b>
${data.message}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `;

    try {
        const response = await fetch(`${API_URL}${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: formattedMessage,
                parse_mode: 'HTML'
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result.ok;
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
        throw error;
    }
};
