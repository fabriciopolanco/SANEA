"use client";

import React, { useState } from "react";
import Link from "next/link";

const Certificaciones: React.FC = () => {
    // Datos de los trabajadores y sus certificados
    const trabajadores = [
        {
            id: 1,
            nombre: "GARCÍA GUILLERMO CESAR AUGUSTO",
            dni: "10008370",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "certificados/CerTrabajosenaltura_GarciaCesar10008370_2025.pdf"
                },
                {
                    nro: 2,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/CerMatpel_GarciaCesar10008370_2025.pdf"
                }
            ]
        },
        {
            id: 2,
            nombre: "CHANG CHUMPITAZ LIONEL LEONARDO ",
            dni: "44296497",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/CerTrabajosenaltura_ChangLionel44296497_2025.pdf"
                }
            ]
        },
        {
            id: 3,
            nombre: "THEXSE VASQUEZ EDWIN ROMAN",
            dni: "44271780",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/edwin-altura.jpg"
                },
                {
                    nro: 2,
                    curso: "ESPACIOS CONFINADOS",
                    fecha: "14-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "14-04-2026",
                    certificadoImg: "/certificados/edwin-espacios.jpg"
                },
                {
                    nro: 3,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/guillermo-matpel.jpg"
                }
            ]
        },
        {
            id: 4,
            nombre: "THEXSE VASQUEZ JOSE LUIS",
            dni: "45655374",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/edwin-altura.jpg"
                },
                {
                    nro: 2,
                    curso: "ESPACIOS CONFINADOS",
                    fecha: "14-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "14-04-2026",
                    certificadoImg: "/certificados/edwin-espacios.jpg"
                },
                {
                    nro: 3,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/guillermo-matpel.jpg"
                }
            ]
        },
        {
            id: 5,
            nombre: "VARGAS CONDORI ROMULO WALTHER",
            dni: "29652068",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/edwin-altura.jpg"
                },
                {
                    nro: 2,
                    curso: "ESPACIOS CONFINADOS",
                    fecha: "14-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "14-04-2026",
                    certificadoImg: "/certificados/edwin-espacios.jpg"
                },
                {
                    nro: 3,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/guillermo-matpel.jpg"
                }
            ]
        },
        {
            id: 6,
            nombre: "ARTAZA LANFRANCO VICTOR OSCAR",
            dni: "43085205",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/CerTrabajosenaltura_ArtazaVictor_43085205_2025.pdf"
                },
                {
                    nro: 2,
                    curso: "ESPACIOS CONFINADOS",
                    fecha: "14-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "14-04-2026",
                    certificadoImg: "/certificados/CerTrabajosenespaciosconfinados_ArtazaVictor_43085205.pdf"
                },
                {
                    nro: 3,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/public/certificados/CerMatpel_ArtazaVictor_43085205_2025.pdf"
                }
            ]
        },
        {
            id: 7,
            nombre: "SANCHEZ ESCALANTE JUAN EMILIO",
            dni: "70147799",
            certificados: [
                {
                    nro: 1,
                    curso: "TRABAJOS EN ALTURA",
                    fecha: "12-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "12-04-2026",
                    certificadoImg: "/certificados/CerTrabajosenaltura_SanchezJuan_70147799_2025.pdf"
                },
                {
                    nro: 2,
                    curso: "ESPACIOS CONFINADOS",
                    fecha: "14-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "KEYLER OCTAVIO VILLENA SOTO",
                    fechaVencimiento: "14-04-2026",
                    certificadoImg: "/certificados/Cer_espaciosconfinados_SanchezJuan_70147799_2025.pdf"
                },
                {
                    nro: 3,
                    curso: "CAPACITACÓN EXTERNA MATPEL",
                    fecha: "16-04-2025",
                    notaFinal: "APROBADO",
                    facilitador: "UBER JHON POLANCO PEZO",
                    fechaVencimiento: "16-04-2026",
                    certificadoImg: "/certificados/CerMatpel_SanchezJuan_70147799_2025.pdf"
                }
            ]
        }
    ];

    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrar trabajadores por nombre o DNI
    const filteredTrabajadores = trabajadores.filter(trabajador => {
        const searchLower = searchTerm.toLowerCase();
        return (
            trabajador.nombre.toLowerCase().includes(searchLower) ||
            trabajador.dni.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Encabezado con gradiente verde */}
            <div className="bg-gradient-to-r from-green-400 to-lime-500 rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-3xl font-bold text-center text-white">Área de Capacitaciones</h1>
                <p className="text-center text-white/90 mt-2">Gestión de certificados de capacitación</p>
            </div>

            {/* Barra de búsqueda con estilo moderno */}
            <div className="mb-8 max-w-2xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar por nombre o DNI..."
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-3 text-gray-500 hover:text-lime-600"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {filteredTrabajadores.length === 0 ? (
                <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-700">No se encontraron resultados</h3>
                    <p className="mt-1 text-gray-500">Intenta con otro nombre o DNI</p>
                </div>
            ) : (
                <div className="space-y-8">
                    {filteredTrabajadores.map((trabajador) => (
                        <div key={trabajador.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                            {/* Encabezado de tarjeta del trabajador */}
                            <div className="bg-lime-100 px-6 py-4 border-b border-lime-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">{trabajador.nombre}</h2>
                                        <p className="text-gray-600">DNI: {trabajador.dni}</p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lime-500 text-white">
                                        {trabajador.certificados.length} certificado{trabajador.certificados.length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>

                            {/* Tabla de certificados */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-lime-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">NRO</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">CURSO</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">FECHA</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ESTADO</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">FACILITADOR</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">VENCIMIENTO</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">OPCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {trabajador.certificados.map((certificado) => (
                                            <tr key={certificado.nro} className="hover:bg-lime-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{certificado.nro}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">{certificado.curso}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{certificado.fecha}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {certificado.notaFinal}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{certificado.facilitador}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <span className={`px-2 py-1 rounded ${new Date(certificado.fechaVencimiento.split('-').reverse().join('-')) > new Date() ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                        {certificado.fechaVencimiento}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a
                                                            href={certificado.certificadoImg}
                                                            download
                                                            className="text-lime-600 hover:text-lime-800 font-medium hover:underline flex items-center"
                                                        >
                                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                                            </svg>
                                                            Descargar
                                                        </a>
                                                    </td>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Certificaciones;