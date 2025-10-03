import React, { useState } from 'react';

interface Persona {
  name: string;
  description: string;
  avatar: string;
}

interface Props {
  persona: Persona;
  apiKey: string;
}

const ChatScreen: React.FC<Props> = ({ persona, apiKey }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);

  // ملاحظة: تحتاج لاستدعاء Gemini API هنا حسب مشروعك
  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');
    // مثال رد مؤقت
    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: 'تم استقبال رسالتك!', sender: 'bot' }]);
    }, 700);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1100px', margin: 'auto' }}>
      <div className="header">CogniLink V1.2 PRO</div>
      <div className="flex-row" style={{ alignItems: 'flex-start' }}>
        <div className="chat-container">
          <div className="chat-header">
            {persona.name || 'شخصية افتراضية'}
          </div>
          <div style={{ flex: 1, minHeight: '350px', marginBottom: '20px', background: '#23293b', borderRadius: '16px', padding: '24px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginBottom: '8px'
              }}>
                <span style={{ color: msg.sender === 'user' ? '#fff' : '#bdbdbd' }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="chat-input-zone">
            <input
              className="chat-input"
              value={message}
              placeholder="اكتب رسالتك..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button className="chat-send-btn" onClick={sendMessage}>إرسال</button>
          </div>
        </div>
        <div className="sidebar">
          <button className="persona-btn">إنشاء شخصية جديدة +</button>
          <div className="persona-list">
            <div className="persona-item">
              {persona.avatar ? <img src={persona.avatar} alt="" /> : <img src="https://i.imgur.com/E6ZbZ4C.png" alt="" />}
              <span>{persona.name || 'Aura'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
