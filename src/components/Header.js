import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="App-header bg-white p-4 mb-4 px-4">
            <div className="container mx-auto flex items-center">
                <img src={logo} className="App-logo mr-24" alt="logo" />
                <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Home</p>
                <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Org Settings</p>
                <p className="text-gray-500 font-medium text-sm mr-8 active-nav-item">Insights</p>
                <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Locker Management</p>
                <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Planner</p>
            </div>
        </header>
    );
}