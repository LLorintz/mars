import React, { useState } from 'react';
import './PlayerCard.css';

const PlayerCard: React.FC = () => {
  const [steelAmount, setSteelAmount] = useState(0);
  const [steelProduction, setSteelProduction] = useState(0);

  const [titaniumAmount, setTitaniumAmount] = useState(0);
  const [titaniumProduction, setTitaniumProduction] = useState(0);

  const [energyAmount, setEnergyAmount] = useState(0);
  const [energyProduction, setEnergyProduction] = useState(0);

  const [heatAmount, setHeatAmount] = useState(0);
  const [heatProduction, setHeatProduction] = useState(0);

  const [plantsAmount, setPlantsAmount] = useState(0);
  const [plantsProduction, setPlantsProduction] = useState(0);

  const [megacreditsAmount, setMegacreditsAmount] = useState(0);
  const [megacreditsProduction, setMegacreditsProduction] = useState(0);

  const handleNextRound = () => {
    setSteelAmount(steelAmount + steelProduction);
    setTitaniumAmount(titaniumAmount + titaniumProduction);
    setEnergyAmount(energyAmount + energyProduction);
    setHeatAmount(heatAmount + heatProduction);
    setPlantsAmount(plantsAmount + plantsProduction);
    setMegacreditsAmount(megacreditsAmount + megacreditsProduction);
  };

  return (
    <div className="player-card">
      <h2>Player Resources</h2>
      
      <Resource 
        name="Steel" 
        amount={steelAmount} 
        production={steelProduction} 
        onAmountChange={setSteelAmount} 
        onProductionChange={setSteelProduction} 
      />

      <Resource 
        name="Titanium" 
        amount={titaniumAmount} 
        production={titaniumProduction} 
        onAmountChange={setTitaniumAmount} 
        onProductionChange={setTitaniumProduction} 
      />

      <Resource 
        name="Energy" 
        amount={energyAmount} 
        production={energyProduction} 
        onAmountChange={setEnergyAmount} 
        onProductionChange={setEnergyProduction} 
      />

      <Resource 
        name="Heat" 
        amount={heatAmount} 
        production={heatProduction} 
        onAmountChange={setHeatAmount} 
        onProductionChange={setHeatProduction} 
      />

      <Resource 
        name="Plants" 
        amount={plantsAmount} 
        production={plantsProduction} 
        onAmountChange={setPlantsAmount} 
        onProductionChange={setPlantsProduction} 
      />

      <Resource 
        name="Megacredits" 
        amount={megacreditsAmount} 
        production={megacreditsProduction} 
        onAmountChange={setMegacreditsAmount} 
        onProductionChange={setMegacreditsProduction} 
      />

      <button className="next-round" onClick={handleNextRound}>Next Round</button>
    </div>
  );
};

interface ResourceProps {
  name: string;
  amount: number;
  production: number;
  onAmountChange: (newValue: number) => void;
  onProductionChange: (newValue: number) => void;
}

const Resource= ({ name, amount, production, onAmountChange, onProductionChange }:ResourceProps) => {
  return (
    <div className="resource">
      <span>{name}: {amount} (Production: {production})</span>
      <div className="resource-buttons">
        <button onClick={() => onAmountChange(amount + 1)}>+ Amount</button>
        <button onClick={() => onAmountChange(amount > 0 ? amount - 1 : 0)}>- Amount</button>
        <button onClick={() => onProductionChange(production + 1)}>+ Production</button>
        <button onClick={() => onProductionChange(production > 0 ? production - 1 : 0)}>- Production</button>
      </div>
    </div>
  );
};

export default PlayerCard;
