function testarVelocidade() {
  const startTime = performance.now();

  fetch('https://httpbin.org/get').then(response => {
    if (response.ok) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      const ping = duration / 2; // Assuming ping is half of the total round-trip time
      const downloadSpeed = response.body.length / duration * 8; // Assuming 8 bits per byte
      const uploadSpeed = 0; // Assuming upload speed is not measured

      console.log(`
        Ping: ${ping}ms
        Download: ${downloadSpeed.toFixed(2)} Mbps
        Upload: ${uploadSpeed.toFixed(2)} Mbps
      `);
    } else {
      console.error('Error fetching data:', response.status);
    }
  }).catch(error => {
    console.error(error);
  });
}

testarVelocidade();
