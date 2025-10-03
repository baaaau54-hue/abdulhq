import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import PersonaScreen from './components/PersonaScreen';
import ChatScreen from './components/ChatScreen';

const App: React.FC = () => {
  // مراحل التطبيق: welcome, persona, chat
  const [stage, setStage] = useState<'welcome' | 'persona' | 'chat'>('welcome');
  const [apiKey, setApiKey] = useState('');
  const [persona, setPersona] = useState({ name: '', description: '', avatar: '' });

  return (
    <div className="main-container">
      {stage === 'welcome' && (
        <WelcomeScreen
          onSaveApiKey={(key) => { setApiKey(key); setStage('persona'); }}
        />
      )}
      {stage === 'persona' && (
        <PersonaScreen
          onCreatePersona={(personaObj) => { setPersona(personaObj); setStage('chat'); }}
        />
      )}
      {stage === 'chat' && (
        <ChatScreen persona={persona} apiKey={apiKey} />
      )}
    </div>
  );
};

export default App;
