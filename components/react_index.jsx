class App extends React.Component {
    render(){
        return (
            <div>
                <h1> "hello, from react_index.jsx "</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        < App />
    </div>,
    document.getElementById("root")
)