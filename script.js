const speedTest = require('speedtest-net');

function runSpeedTest() {
  const test = speedTest({ maxTime: 5000 });

  test.on('data', data => {
    const downloadSpeed = (data.speeds.download / 1024 / 1024).toFixed(2); // convertendo para MB/s
    const uploadSpeed = (data.speeds.upload / 1024 / 1024).toFixed(2); // convertendo para MB/s

    console.log(`Velocidade de Download: ${downloadSpeed} MB/s`);
    console.log(`Velocidade de Upload: ${uploadSpeed} MB/s`);
  });

  test.on('error', err => {
    console.error(`Erro no teste de velocidade: ${err.message}`);
  });
}

runSpeedTest();
