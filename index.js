import dgram from 'dgram';

const s = dgram.createSocket('udp4');


s.send(Buffer.from('Hola mundo!!'), 41234, 'localhost', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Message sent');
    });
