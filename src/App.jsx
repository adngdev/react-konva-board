import Sidebar from "./components/Sidebar/Sidebar.jsx";


function App() {


    return (
        <div className={`relative`}>
            <div className={`fixed inset-0 h-20 bg-violet-400`}>
            </div>
            <div className={`h-screen pt-20 flex`}>
                <Sidebar />
                <div>

                </div>
            </div>
        </div>
    )
}

export default App;

