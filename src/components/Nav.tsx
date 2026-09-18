import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <>
        <nav className="w-full bg-[#fcf6fc] py-4 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={Logo} alt=""/>
                </div>
                <ul className="flex items-center gap-6 text-gray-600 text-sm font-medium">
                    <li className="hover:text-[#cf3b24] cursor-pointer">Home</li>
                    <li className="hover:text-[#cf3b24] cursor-pointer">Techonologices</li>
                    <li className="hover:text-[#cf3b24] cursor-pointer">Projects</li>
                    <li className="hover:text-[#cf3b24] cursor-pointer">Aboute</li>
                    <li className="hover:text-[#cf3b24] cursor-pointer">Contact</li>
                </ul>
                <div className="flex items-center gap-4">
                    <button className="btn btn-outline btn-error">Sign In</button>
                    <button className="btn btn-error">Sign Up</button>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Nav;