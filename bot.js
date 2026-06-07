const mineflayer = require('mineflayer');

const config = {
  host: 'NicotinaUt.aternos.me',
  port: 28844,
  username: 'Botitonto',
  version: '1.20.1',
  forgeHandshake: true
};

function createBot() {
  const bot = mineflayer.createBot(config);

  bot.on('spawn', () => {
    console.log('✅ Bot conectado al servidor con Forge');
    setInterval(() => {
      const moves = ['forward', 'back', 'left', 'right'];
      const move = moves[Math.floor(Math.random() * moves.length)];
      bot.setControlState(move, true);
      setTimeout(() => bot.setControlState(move, false), 1000);
    }, 240000);
  });

  bot.on('kicked', (reason) => {
    console.log('❌ Bot kickeado:', reason);
    console.log('🔄 Reconectando en 10 segundos...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Error:', err.message);
    setTimeout(createBot, 10000);
  });

  bot.on('end', () => {
    console.log('🔄 Conexión perdida, reconectando...');
    setTimeout(createBot, 10000);
  });
}

createBot();
