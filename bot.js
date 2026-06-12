const mineflayer = require('mineflayer');

const forgeData = {
  fmlNetworkVersion: 3,
  channels: [
    { res: 'mowziesmobs:net', version: '1', required: true },
    { res: 'sophisticatedbackpacks:channel', version: '1', required: true },
    { res: 'securitycraft:securitycraft', version: '1', required: true },
    { res: 'sophisticatedcore:channel', version: '1', required: true },
    { res: 'rechiseled:main', version: '1', required: true },
    { res: 'geckolib:main', version: '1', required: true },
    { res: 'voicechat:voice', version: '1', required: true },
    { res: 'orbital_railgun:main', version: '1', required: true },
    { res: 'refurbished_furniture:main', version: '1', required: true }
  ],
  mods: [
    { modId: 'minecraft', modmarker: '1.20.1' },
    { modId: 'forge', modmarker: '51.2.0' },
    { modId: 'securitycraft', modmarker: '1.10.1' },
    { modId: 'appleskin', modmarker: '2.5.1' },
    { modId: 'architectury', modmarker: '9.2.14' },
    { modId: 'creativecore', modmarker: '2.12.38' },
    { modId: 'framework', modmarker: '0.8.0' },
    { modId: 'fusion', modmarker: '1.2.12' },
    { modId: 'geckolib', modmarker: '4.8.3' },
    { modId: 'jei', modmarker: '15.20.0.130' },
    { modId: 'many_more_ores_and_crafts', modmarker: '1.1.3' },
    { modId: 'mowziesmobs', modmarker: '1.8.2' },
    { modId: 'opf', modmarker: '1.20.1' },
    { modId: 'orbital_railgun', modmarker: '1.4.2' },
    { modId: 'rechiseled', modmarker: '1.2.4' },
    { modId: 'refurbished_furniture', modmarker: '1.0.20' },
    { modId: 'skinrestorer', modmarker: '2.7.0' },
    { modId: 'sophisticatedbackpacks', modmarker: '3.24.48.1821' },
    { modId: 'sophisticatedcore', modmarker: '1.3.42.1945' },
    { modId: 'supermartijn642configlib', modmarker: '1.1.8' },
    { modId: 'supermartijn642corelib', modmarker: '1.1.21' },
    { modId: 'voicechat', modmarker: '2.6.18' },
    { modId: 'xaerominimap', modmarker: '25.3.13' },
    { modId: 'embeddium', modmarker: '0.3.31' },
    { modId: 'oculus', modmarker: '1.8.0' }
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
