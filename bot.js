const mc = require('minecraft-protocol');
const { forgeHandshake } = require('minecraft-protocol-forge');

const config = {
  host: 'NicotinaUt.aternos.me',
  port: 28844,
  username: 'Botitonto',
  version: '1.20.1'
};

const modList = [
  { modid: 'minecraft', version: '1.20.1' },
  { modid: 'forge', version: '47.3.0' },
  { modid: 'FML', version: '47.3.0' },
  { modid: 'securitycraft', version: '1.10.1' },
  { modid: 'appleskin', version: '2.5.1' },
  { modid: 'embeddium', version: '0.3.31' },
  { modid: 'fusion', version: '1.2.12' },
  { modid: 'geckolib', version: '4.8.3' },
  { modid: 'jei', version: '15.20.0.130' },
  { modid: 'many_more_ores_and_crafts', version: '1.20.1' },
  { modid: 'mowziesmobs', version: '1.8.2' },
  { modid: 'oculus', version: '1.8.0' },
  { modid: 'rechiseled', version: '1.2.4' },
  { modid: 'sophisticatedbackpacks', version: '3.24.48.18' },
  { modid: 'sophisticatedcore', version: '1.3.42.1945' },
  { modid: 'supermartijn642configlib', version: '1.1.8' },
  { modid: 'supermartijn642corelib', version: '1.1.21' },
  { modid: 'xaerominimap', version: '25.3.13' }
];

function connect() {
  const client = mc.createClient(config);

  forgeHandshake(client, modList);

  client.on('success', () => {
    console.log('✅ Bot conectado con Forge y mods!');
  });

  client.on('kick_disconnect', (data) => {
    console.log('❌ Kickeado:', data.reason);
    setTimeout(connect, 10000);
  });

  client.on('error', (err) => {
    console.log('⚠️ Error:', err.message);
    setTimeout(connect, 10000);
  });

  client.on('end', () => {
    console.log('🔄 Reconectando...');
    setTimeout(connect, 10000);
  });
}

connect();
