import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'
import SettingsModal from './components/SettingsModal'
import { useLocalStorage } from './hooks/useLocalStorage'
import { Avatar } from './types'

const App: React.FC = () => {
  const [avatars, setAvatars] = useLocalStorage<Avatar[]>('avatars', [])
  const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(avatars[0]?.id || null)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="app-arabic">
      <Sidebar
        avatars={avatars}
        selectedAvatarId={selectedAvatarId}
        onSelect={setSelectedAvatarId}
        onAdd={() => setShowSettings(true)}
      />
      <ChatArea
        avatar={avatars.find(v => v.id === selectedAvatarId)}
      />
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          avatars={avatars}
          setAvatars={setAvatars}
        />
      )}
    </div>
  )
}

export default App