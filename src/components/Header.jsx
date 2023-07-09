
const Header = ({title}) => {
  return (
    <>
        <header className="fixed top-0 left-0 right-0 bg-white z-50">
            <div className="container mx-auto p-4">
                <h1 className="text-center text-2xl font-bold">{title}</h1>
            </div>
        </header>
    </>
  )
}

export default Header