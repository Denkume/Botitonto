const mc = require('minecraft-protocol');

const config = {
  host: 'NicotinaUt.aternos.me',
  port: 28844,
  username: 'Botitonto',
  version: '1.20.1'
};

const modList = [
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
];

function connect() {
  const client = mc.createClient(config);

  // Interceptar el handshake de Forge moderno (FML3)
  client.on('custom_payload', (packet) => {
    if (packet.channel === 'forge:handshake') {
      console.log('🤝 Handshake de Forge recibido, respondiendo...');
      client.write('custom_payload', {
        channel: 'forge:handshake',
        data: Buffer.from(JSON.stringify({ modList }))
      });
    }
  });

  client.on('login', () => {
    console.log('✅ Bot conectado!');
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
