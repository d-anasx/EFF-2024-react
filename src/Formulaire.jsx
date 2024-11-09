import React, { useState } from 'react';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    theme: '',
    dateDebut: '',
    dateFin: '',
    cout: '',
    expert: '',
    confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      confirmation: `L'expert : ${formData.expert} assurera le thème : ${formData.theme}, avec un coût journalier : ${formData.cout}DH, pour une durée de : ${new Date(formData.dateFin) - new Date(formData.dateDebut)} jours`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50  m-auto to-indigo-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-[40%] sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-2xl rounded-3xl sm:p-10">
          <div className=" mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="text-center pb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Formulaire de Formation</h1>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 pt-8">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thème
                    <input
                      type="text"
                      name="theme"
                      value={formData.theme}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"
                      placeholder="Entrez le thème"
                    />
                  </label>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de début
                    <input
                      type="date"
                      name="dateDebut"
                      value={formData.dateDebut}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date de fin
                    <input
                      type="date"
                      name="dateFin"
                      value={formData.dateFin}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"
                    />
                  </label>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Coût
                    <input
                      type="number"
                      name="cout"
                      value={formData.cout}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"
                      placeholder="Entrez le coût"
                    />
                  </label>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expert
                    <input
                      type="text"
                      name="expert"
                      value={formData.expert}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"
                      placeholder="Nom de l'expert"
                    />
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
                  >
                    Confirmer
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-700 mt-6">
                  {formData.confirmation}
                </p>
      </div>
    </div>
  );
};

export default Formulaire;

