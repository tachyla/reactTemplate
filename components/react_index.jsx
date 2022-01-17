class App extends React.Component {
    render(){
        return (
            <div className="header">
                <h1> App component from react_index.jsx </h1>
            </div>
        );

    }
}

function Navbar() {
    return (
        <nav>
            <h1>Bistro Navbar component</h1>
            <ul>
                <li>thing 1</li>
                <li>thing 2</li>
                <li>thing 3</li>
            </ul>
        </nav>
        );
}

ReactDOM.render(
    <div>
        <Navbar />
       < App/>
    </div>,
    document.getElementById("root")
)