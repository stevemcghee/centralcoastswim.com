'use client';

import { useState } from 'react';
import CertificateGenerator from '@/components/CertificateGenerator';

const defaultAchievements = [
  'You can go under water',
  'You can float on your back',
  'You can be safe in the water',
  'You can swim to the edge of the pool',
  'You can swim freestyle',
  'You can swim breaststroke',
  'You can swim backstroke',
  'You can dive into a pool safely',
];

export default function CertificateAdmin() {
  const [swimmerName, setSwimmerName] = useState('');
  const [instructorName, setInstructorName] = useState('Andria McGhee');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedAchievements, setSelectedAchievements] = useState<string[]>([]);
  const [customNotes, setCustomNotes] = useState('');

  const handleAchievementToggle = (achievement: string) => {
    setSelectedAchievements(prev => 
      prev.includes(achievement)
        ? prev.filter(a => a !== achievement)
        : [...prev, achievement]
    );
  };

  const handleSelectAll = () => {
    if (selectedAchievements.length === defaultAchievements.length) {
      setSelectedAchievements([]);
    } else {
      setSelectedAchievements([...defaultAchievements]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Generate Swim Certificate</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="swimmerName" className="block text-sm font-medium text-gray-700 mb-2">
              Swimmer's Name
            </label>
            <input
              type="text"
              id="swimmerName"
              value={swimmerName}
              onChange={(e) => setSwimmerName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter swimmer's name"
            />
          </div>

          <div>
            <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700 mb-2">
              Instructor's Name
            </label>
            <input
              type="text"
              id="instructorName"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Achievements
            </label>
            <button
              onClick={handleSelectAll}
              className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
            >
              {selectedAchievements.length === defaultAchievements.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
          <div className="space-y-2">
            {defaultAchievements.map((achievement) => (
              <label key={achievement} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedAchievements.includes(achievement)}
                  onChange={() => handleAchievementToggle(achievement)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">{achievement}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="customNotes" className="block text-sm font-medium text-gray-700 mb-2">
            Custom Notes (Optional)
          </label>
          <textarea
            id="customNotes"
            value={customNotes}
            onChange={(e) => setCustomNotes(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            placeholder="Add any additional notes or comments for the certificate"
          />
        </div>

        <CertificateGenerator
          name={swimmerName}
          instructor={instructorName}
          date={date}
          notes={customNotes}
          achievements={selectedAchievements}
        />
      </div>
    </div>
  );
} 