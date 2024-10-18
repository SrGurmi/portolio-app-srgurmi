import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import QRCode from 'qrcode';

const QRCodeComponent = ({ value = 'https://github.com/adhernea/pgl-portfolio-app', size = 200 }) => {
  const [qr, setQr] = useState('');

  useEffect(() => {
    QRCode.toDataURL(value)
      .then(url => {
        setQr(url);
      })
      .catch(err => {
        console.error(err);
      });
  }, [value]);

  return (
    <View>
      {qr ? (
        <Image
          source={{ uri: qr }}
          style={{ width: size, height: size }}
        />
      ) : null}
    </View>
  );
};

export default QRCodeComponent;
