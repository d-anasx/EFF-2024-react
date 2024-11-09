import React from 'react';
import expertsData from '../expertsData';

const Evenement = () => {
  const calculerCoutTotal = evenements =>
    evenements.reduce((total, event) => total + event.cout_journalier * event.durée, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Liste des Événements</h1>
      
      {expertsData.map(expert => (
        <div key={expert.id} className="mb-8 p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">{expert.nom_complet}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-800 bg-gray-900 text-white">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border border-gray-800">Thème</th>
                  <th className="p-2 border border-gray-800">Date de Début</th>
                  <th className="p-2 border border-gray-800">Date de Fin</th>
                  <th className="p-2 border border-gray-800">Description</th>
                  <th className="p-2 border border-gray-800">Coût Journalier</th>
                  <th className="p-2 border border-gray-800">Durée (jours)</th>
                  <th className="p-2 border border-gray-800">Coût Total</th>
                </tr>
              </thead>
              <tbody>
                {expert.événements.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="p-2 border border-gray-800">{event.théme}</td>
                    <td className="p-2 border border-gray-800">{event.date_debut}</td>
                    <td className="p-2 border border-gray-800">{event.date_fin}</td>
                    <td className="p-2 border border-gray-800">{event.description}</td>
                    <td className="p-2 border border-gray-800">{event.cout_journalier} DH</td>
                    <td className="p-2 border border-gray-800">{event.durée}</td>
                    <td className="p-2 border border-gray-800">
                      {event.cout_journalier * event.durée} DH
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-semibold text-blue-700">
            Total des coûts des événements pour {expert.nom_complet} : {calculerCoutTotal(expert.événements)} DH
          </p>
        </div>
      ))}
    </div>
  );
};

export default Evenement;

