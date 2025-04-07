'use client';

import { useState } from "react";

export default function UrbaNovaApp() {
  const [investment, setInvestment] = useState('');
  const targetAmount = 250000;
  const invested = 112000;

  const handleInvestmentChange = (e) => {
    setInvestment(e.target.value);
  };

  const handleInvestClick = () => {
    alert(\`Has invertido €\${investment} en el proyecto Urbanova.\`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bienvenido a UrbaNova Capital</h1>
      <p>Oportunidad de inversión: Reforma y alquiler de propiedad en Valencia.</p>
      <p><strong>Objetivo de financiación:</strong> €{targetAmount}</p>
      <p><strong>Capital recaudado:</strong> €{invested}</p>
      <progress value={invested} max={targetAmount} style={{ width: '100%', height: '20px' }}></progress>
      
      <div style={{ marginTop: '2rem' }}>
        <label>¿Cuánto quieres invertir?</label>
        <input
          type="number"
          value={investment}
          onChange={handleInvestmentChange}
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
        />
        <button onClick={handleInvestClick} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Invertir
        </button>
      </div>
    </div>
  );
}