import { useEffect, useState } from 'react'
import Picture from '@/components/picture'
import { useClickAway } from '@uidotdev/usehooks'
import Title from '@/components/title'
import ChoiceAvatar from '@/components/choice-avatar'
import CustomButton from '@/components/button/button-long'
import { API_URL } from '@/config/api'
import { ROUTES } from '@/const'
import useAvatarStore from '@/store/user'
import useAuthStore from '@/store/tracking/tracker-auth'

interface AvatarItem {
  id: number
  character: string
}

export default function Avatar() {
  const [showing, setShowing] = useState(false)
  const [avatars, setAvatars] = useState<AvatarItem[]>([])

  const { selectedAvatar, setAvatar } = useAvatarStore()
  const { user_id, avatar_id } = useAuthStore()

  const refModal = useClickAway(() => {
    setShowing(false)
  })

  const handleClick = () => {
    setShowing(!showing)
  }

  useEffect(() => {
    fetch(`${API_URL}/${ROUTES.AVATAR}`)
      .then(res => res.json())
      .then(data => {
        setAvatars(data)

        if (avatar_id) {
          const found = data.find((a: AvatarItem) => a.id === avatar_id)
          if (found) {
            setAvatar(found)
          }
        } else if (data.length > 0) {
          setAvatar(data[0])
        }
      })
      .catch(err => console.error('Erreur de récupération des avatars :', err))
  }, [avatar_id, setAvatar])

  const handleValidate = async () => {
    if (!selectedAvatar || !user_id) {
      alert('Veuillez choisir un avatar')
      return
    }

    try {
      const res = await fetch(`${API_URL}/${ROUTES.AVATAR}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id,
          avatar_id: selectedAvatar.id,
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setShowing(false)
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement')
      }
    } catch (err) {
      console.error('Erreur:', err)
      alert('Erreur serveur.')
    }
  }

  return (
    <>
      <button onClick={handleClick} aria-label="Avatar utilisateur" className="z-50 circle pulse">
        <div className="bg-[#C1F9A6] rounded-full w-15 h-15 border-4 border-white overflow-hidden ">
          <Picture
            src={selectedAvatar ? selectedAvatar.character : './img/Happy.svg'}
            alt="avatar Pidu"
            className="w-20 h-20 object-contain object-center cursor-pointer"
          />
        </div>
      </button>

      {showing && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          ></div>

          <div
            ref={refModal as React.Ref<HTMLDivElement>}
            className="fixed top-1/2 left-1/2 max-w-[90%] sm:max-w-[800px] bg-white rounded-2xl shadow-lg text-center transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 sm:p-10"
          >
            <Title tag="h2" title="Choisis ton avatar" className="text-2xl text-black mb-4" />

            <div className="grid grid-cols-2 sm:flex gap-4 justify-center max-h-[400px] overflow-y-auto items-center">
              {avatars.map(avatar => (
                <ChoiceAvatar
                  key={avatar.id}
                  avatar={avatar}
                  onClickHandler={() => setAvatar(avatar)}
                  isSelected={selectedAvatar?.id === avatar.id}
                />
              ))}
            </div>

            <div className="flex justify-center mt-5">
              <CustomButton text="Valider" onClickHandler={handleValidate} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
