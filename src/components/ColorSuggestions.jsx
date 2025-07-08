import React from 'react';

export const colorPalettes = {
  purple: {
    primary: '#8B5CF6',
    secondary: '#A78BFA',
    accent: '#C4B5FD',
    dark: '#1F1B24',
    darker: '#0F0D12',
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
  },
  teal: {
    primary: '#06B6D4',
    secondary: '#22D3EE',
    accent: '#67E8F9',
    dark: '#0F172A',
    darker: '#020617',
    text: '#F1F5F9',
    textSecondary: '#CBD5E1',
  },
  orange: {
    primary: '#F59E0B',
    secondary: '#FBBF24',
    accent: '#FCD34D',
    dark: '#1C1917',
    darker: '#0C0A09',
    text: '#FAFAF9',
    textSecondary: '#D6D3D1',
  },
  emerald: {
    primary: '#10B981',
    secondary: '#34D399',
    accent: '#6EE7B7',
    dark: '#064E3B',
    darker: '#022C22',
    text: '#ECFDF5',
    textSecondary: '#A7F3D0',
  },
};

export default function ColorSuggestions() {
  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Color Palette Suggestions</h2>
      {Object.entries(colorPalettes).map(([name, palette]) => (
        <div key={name} className="mb-8 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 capitalize">{name} Theme</h3>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(palette).map(([colorName, colorValue]) => (
              <div key={colorName} className="text-center">
                <div
                  className="w-16 h-16 rounded-lg mb-2 border border-gray-600"
                  style={{ backgroundColor: colorValue }}
                ></div>
                <p className="text-xs text-gray-300">{colorName}</p>
                <p className="text-xs text-gray-500">{colorValue}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}