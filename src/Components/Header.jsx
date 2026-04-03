const Header = () => {
    

  return (
    <header className="flex justify-between items-center py-7.5 px-4 bg-white">
        <h1 className="text-neutral-900
text-sm
font-extrabold
leading-5">Where in the world?</h1>

    <div className="cursor-pointer flex gap-2 items-center">
        <img src="/moonLight.svg" alt="" />
        <img className="hidden" src="/moonDark.svg" alt="" />
        <p className="text-neutral-900
text-xs
font-semibold">Dark Mode</p>
    </div>
    </header>
  )
}

export default Header
