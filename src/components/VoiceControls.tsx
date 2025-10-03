import React from 'react'
// TODO: استخدم hook useSpeech لتحويل الكلام لنص والعكس
const VoiceControls: React.FC = () => (
  <div className="voice-controls">
    <button>🎤 تحويل الكلام لنص</button>
    <button>🔊 قراءة الرد بالصوت</button>
    {/* TODO: فعّل الوظائف الصوتية */}
  </div>
)
export default VoiceControls