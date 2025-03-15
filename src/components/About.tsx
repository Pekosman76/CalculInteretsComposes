import React from 'react';
import { PiggyBank } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <PiggyBank className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-100">À propos des intérêts composés</h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-4">
            Les intérêts composés sont considérés comme la "huitième merveille du monde" selon Albert Einstein. 
            Ce concept financier puissant permet de générer des intérêts non seulement sur votre capital initial, 
            mais aussi sur les intérêts précédemment accumulés.
          </p>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">Comment ça fonctionne ?</h3>
          <p className="text-gray-300 mb-4">
            Imaginons que vous investissez 1 000 € avec un taux d'intérêt annuel de 5% :
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Année 1 : 1 000 € + (5% de 1 000 €) = 1 050 €</li>
            <li>Année 2 : 1 050 € + (5% de 1 050 €) = 1 102,50 €</li>
            <li>Et ainsi de suite...</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">Facteurs clés</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Le montant initial investi</li>
            <li>Le taux d'intérêt annuel</li>
            <li>La durée de l'investissement</li>
            <li>La fréquence de capitalisation</li>
            <li>Les versements réguliers (optionnels)</li>
          </ul>

          <p className="text-gray-300">
            Plus la période d'investissement est longue, plus l'effet des intérêts composés est important. 
            C'est pourquoi il est souvent conseillé de commencer à investir le plus tôt possible.
          </p>
        </div>
      </div>
    </div>
  );
}