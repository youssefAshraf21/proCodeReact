
    function Header() {

        return (
            <header>
                <nav className="bg-gray-900 text-white px-8 py-4" >
                <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-orange-400">
                    My React App
                </h1>
                    <ul className="flex space-x-8 text-lg">
                        <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">services</a></li>
                    </ul>
                </div>
                </nav>
                
                <hr /> <hr />
            </header>
        );
    }

    export default Header;