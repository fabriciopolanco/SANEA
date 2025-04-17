"use client";

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CertificadoPage() {
  const searchParams = useSearchParams();
  const imgPath = searchParams.get('img');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <Link href="/certificaciones" className="text-lime-600 hover:underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a certificaciones
          </Link>
        </div>

        {imgPath ? (
          <div className="border-2 border-lime-200 rounded-lg overflow-hidden">
            <Image
              src={`/${imgPath}`}
              alt="Certificado"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              quality={100}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700">Certificado no encontrado</h3>
            <p className="mt-1 text-gray-500">La imagen del certificado no está disponible</p>
          </div>
        )}
      </div>
    </div>
  );
}