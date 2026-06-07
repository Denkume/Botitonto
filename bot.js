const mineflayer = require('mineflayer');

const forgeData = {
  fmlNetworkVersion: 3,
  channels: [
    { res: 'mowziesmobs:net', version: '1', required: true },
    { res: 'sophisticatedbackpacks:channel', version: '1', required: true },
    { res: 'securitycraft:securitycraft', version: '1', required: true },
    { res: 'sophisticatedcore:channel', version: '1', required: true },
    { res: 'rechiseled:main', version: '1', required: true },
    { res: 'geckolib:main', version: '1', required: true }
  ],
  mods: [
    { modId: 'minecraft', modmarker: '1.20.1' },
    { modId: 'forge', modmarker: '51.2.0' },
    { modId: 'securitycraft', modmarker: '1.10.1' },
    { modId: 'appleskin', modmarker: '2.5.1' },
    { modId: 'embeddium', modmarker: '0.3.31' },
    { modId: 'fusion', modmarker: '1.2.12' },
    { modId: 'geckolib', modmarker: '4.8.3' },
    { modId: 'jei', modmarker: '15.20.0.130' },
    { modId: 'many_more_ores_and_crafts', modmarker: '1.20.1' },
    { modId: 'mowziesmobs', modmarker: '1.8.2' },
    { modId: 'oculus', modmarker: '1.8.0' },
    { modId: 'rechiseled', modmarker: '1.2.4' },
    { modId: 'sophisticatedbackpacks', modmarker: '3.24.48.18' },
    { modId: 'sophisticatedcore', modmarker: '1.3.42.1945' },
    { modId: 'supermartijn642configlib', modmarker: '1.1.8' },
    { modId: 'supermartijn642corelib', modmarker: '1.1.21' },
    { modId: 'xaerominimap', modmarker: '25.3.13' }
  ]
};

function connect() {
  const bot = mineflayer.createBot({
    host: 'NicotinaUt.aternos.me',
    port: 28844,
    username: 'Botitonto',
    version: '1.20.1',
    auth: 'offline',
    forgeData
  });

  bot.on('login', () => {
    console.log('✅ Bot conectado!');
  });

  bot.on('spawn', () => {
    console.log('✅ Bot en el servidor!');
    setInterval(() => {
      const moves = ['forward', 'back', 'left', 'right'];
      const move = moves[Math.floor(Math.random() * moves.length)];
      bot.setControlState(move, true);
      setTimeout(() => bot.setControlState(move, false), 1000);
    }, 240000);
  });

  bot.on('kicked', (reason) => {
    console.log('❌ Kickeado:', reason);
    setTimeout(connect, 10000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Error:', err.message);
    setTimeout(connect, 10000);
  });

  bot.on('end', () => {
    console.log('🔄 Reconectando...');
    setTimeout(connect, 10000);
  });
}

connect();
