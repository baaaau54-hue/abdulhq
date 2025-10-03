import React, { useState } from 'react';

interface Props {
  onCreatePersona: (persona: { name: string; description: string; avatar: string }) => void;
}

const PersonaScreen: React.FC<Props> = ({ onCreatePersona }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="card">
      <h2>أنشئ شخصيتك الرمزية</h2>
      <div>ابدأ بوصف الشخصية التي تريد إنشائها. كن مبدعًا ومتصلًا كأنك الروبوت الذكي!</div>
      <input
        className="input"
        type="text"
        placeholder="اسم الشخصية..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="input"
        placeholder="الوصف أو المهام..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
      <button
        className="button"
        onClick={() => name && description && onCreatePersona({ name, description, avatar: '' })}
      >
        إنشاء الرابط المعرفي
      </button>
    </div>
  );
};

export default PersonaScreen;
