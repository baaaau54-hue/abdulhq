import React, { useState } from 'react';

interface Props {
  onSaveApiKey: (key: string) => void;
}

const WelcomeScreen: React.FC<Props> = ({ onSaveApiKey }) => {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="card">
      <h1>مرحبًا في CogniLink V1.2 PRO</h1>
      <div>لاستخدام التطبيق، يرجى إدخال واجهة برمجة تطبيقات Google Gemini الخاصة بك.</div>
      <input
        className="input"
        type="text"
        placeholder="أدخل مفتاح API هنا..."
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button
        className="button"
        onClick={() => apiKey && onSaveApiKey(apiKey)}
      >
        حفظ وبدء الاستخدام
      </button>
      <div className="text-muted">لن يتم تخزين مفتاحك إلا في متصفحك.</div>
    </div>
  );
};

export default WelcomeScreen;
