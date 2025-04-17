import React from 'react';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

const GenerarQR = () => {
  const uniqueToken = 'UNICO123'; // Esto puede venir de la BD o generarse dinámicamente
  const url = `http://localhost:3000/certificaciones`;

  return (
    <div>
      <h2>Escanea el código QR</h2>
      <QRCode value={url} size={256} />
      <p>{url}</p>
    </div>
  );
};

export default GenerarQR;
