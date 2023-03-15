

const Popup = ({open,onClose}) => {

  if(!open) return null
  return (
    <div  onClick={onClose} className="w-4/5 bg-[#2a9d8f] h-[5rem] font-montserrat font-bold text-[1.2rem] sm:w-2/5 lg:w-1/5 drop-shadow-lg flex items-center justify-center z-20 fixed top-3 right-3 opacity-75 text-white">Message Sent</div>
  )
}

export default Popup