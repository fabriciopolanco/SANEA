"use client";

import { QRCodeCanvas as QRCode } from 'qrcode.react';
import Link from 'next/link';

export default function QRPage() {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/certificaciones`;
  const qrToken = 'SANEA-CERT-' + Date.now().toString(36).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Certificaciones SANEA</h1>
        <p className="text-gray-600 mb-6">Escanea este código para acceder a las certificaciones</p>
        
        <div className="flex justify-center mb-6 p-4 bg-white rounded-lg border-2 border-lime-200">
          <QRCode 
            value={url}
            size={256}
            level="H"
            fgColor="#4ade80"
            bgColor="transparent"
            includeMargin={false}
          />
        </div>
        
        <div className="bg-lime-100 p-3 rounded-lg mb-6">
          <p className="text-sm font-mono break-all">{url}</p>
        </div>
        
        <Link 
          href="/certificaciones" 
          className="inline-block px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors"
        >
          Ir a Certificaciones
        </Link>
        
        <div className="mt-6 text-xs text-gray-500">
          <p>Token de acceso: {qrToken}</p>
          <p className="mt-2">Válido por 30 días</p>
        </div>
      </div>
    </div>
  );
}