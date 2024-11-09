import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/experts2');
        setExperts(response.data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur : {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Liste des Experts</h1>
      <ul className="list-disc pl-5">
        {experts.map(expert => (
          <li key={expert.id} className="mb-4">
            <h2 className="text-lg font-semibold text-blue-600">{expert.nom_complet}</h2>
            <ul className="list-disc pl-5">
              {expert.événements.map((event, index) => (
                <li key={index} className="mb-2">
                  <p><span className="font-bold">Thème:</span> {event.théme}</p>
                  <p><span className="font-bold">Date de début:</span> {event.date_debut}</p>
                  <p><span className="font-bold">Date de fin:</span> {event.date_fin}</p>
                  <p><span className="font-bold">Description:</span> {event.description}</p>
                  <p><span className="font-bold">Coût Journalier:</span> {event.cout_journalier} DH</p>
                  <p><span className="font-bold">Durée:</span> {event.durée} jours</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts2;

