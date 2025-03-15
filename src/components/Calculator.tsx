import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calculator as CalculatorIcon, TrendingUp } from 'lucide-react';
import { CalculatorInputs, CapitalizationFrequency, CalculationResult } from '../types';
import { calculateCompoundInterest } from '../utils/calculator';

const initialInputs: CalculatorInputs = {
  initialCapital: 10000,
  interestRate: 5,
  years: 10,
  frequency: 'yearly',
  monthlyDeposit: 100
};

export function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const calculationResult = calculateCompoundInterest(inputs);
    setResult(calculationResult);
  };

  // Calculate initial result on component mount
  useEffect(() => {
    handleCalculate();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">
          Simulateur d'Intérêts Composés
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Découvrez la puissance des intérêts composés et planifiez votre avenir financier. 
          Notre calculateur vous permet de visualiser la croissance de votre investissement 
          au fil du temps, en prenant en compte les versements réguliers et différentes 
          fréquences de capitalisation.
        </p>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <CalculatorIcon className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-100">Paramètres de calcul</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Capital initial (€)
              </label>
              <input
                type="number"
                value={inputs.initialCapital}
                onChange={(e) => setInputs({ ...inputs, initialCapital: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Taux d'intérêt annuel (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs({ ...inputs, interestRate: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Durée (années)
              </label>
              <input
                type="number"
                value={inputs.years}
                onChange={(e) => setInputs({ ...inputs, years: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Fréquence de capitalisation
              </label>
              <select
                value={inputs.frequency}
                onChange={(e) => setInputs({ ...inputs, frequency: e.target.value as CapitalizationFrequency })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              >
                <option value="yearly">Annuelle</option>
                <option value="quarterly">Trimestrielle</option>
                <option value="monthly">Mensuelle</option>
                <option value="daily">Quotidienne</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Versement mensuel (€)
              </label>
              <input
                type="number"
                value={inputs.monthlyDeposit}
                onChange={(e) => setInputs({ ...inputs, monthlyDeposit: Number(e.target.value) })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Calculer
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <p className="text-sm text-gray-300">
            <strong>Exemple par défaut :</strong> Un investissement initial de 10 000 € avec un versement mensuel de 100 € 
            sur 10 ans à un taux d'intérêt de 5% par an, capitalisé annuellement.
          </p>
        </div>
      </div>

      {result && (
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-100">Résultats</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-400">Montant total final</p>
              <p className="text-2xl font-bold text-blue-400">{formatCurrency(result.totalAmount)}</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-400">Intérêts générés</p>
              <p className="text-2xl font-bold text-green-400">{formatCurrency(result.totalInterest)}</p>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={result.yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  formatter={(value) => formatCurrency(Number(value))}
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amount"
                  name="Montant total"
                  stroke="#60A5FA"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="principal"
                  name="Capital investi"
                  stroke="#9CA3AF"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="interest"
                  name="Intérêts"
                  stroke="#34D399"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}