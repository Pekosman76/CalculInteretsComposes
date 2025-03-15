import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-100">Contact</h2>
        </div>

        <p className="text-gray-300 mb-8">
          Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter.
        </p>

        <div className="max-w-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}