'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [inversion, setInversion] = useState('');
  const recaudado = 150000;
  const objetivo = 230000;
  const porcentaje = (recaudado / objetivo) * 100;

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: '2rem', color: '#222' }}>Urbanova Capital</h1>
      <p style={{ fontSize: '1.2rem' }}>Invierte en propiedades exclusivas desde solo 100€</p>
      <div style={{ background: '#fff', padding: 20, marginTop: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2>Proyecto en Valencia</h2>
        <p>Propiedad de 200.000€ + Reforma 30.000€</p>
        <p>Objetivo: {objetivo.toLocaleString()}€</p>
        <p>Recaudado: {recaudado.toLocaleString()}€</p>
        <div style={{ background: '#eee', borderRadius: 5, overflow: 'hidden', marginTop: 10 }}>
          <div style={{ width: porcentaje + '%', background: '#0070f3', height: 20 }}></div>
        </div>
        <input
          type="number"
          value={inversion}
          onChange={(e) => setInversion(e.target.value)}
          placeholder="Cantidad a invertir (€)"
          style={{ marginTop: 20, padding: 10, width: '100%', borderRadius: 5, border: '1px solid #ccc' }}
        />
        <button style={{ marginTop: 10, padding: 10, background: '#0070f3', color: 'white', border: 'none', borderRadius: 5 }}>
          Invertir ahora
        </button>
      </div>
    </div>
  );
}