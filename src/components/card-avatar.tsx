import Picture from '@/components/picture'

export default function Avatar() {
  return (
    <div className="bg-[#C1F9A6] rounded-full w-15 h-15 border-4 border-white overflow-hidden">
      <Picture src="./img/Happy.svg" alt="avatar Pidu" className="w-20 h-20 object-contain" />
    </div>
  )
}
