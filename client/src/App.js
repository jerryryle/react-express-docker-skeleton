import React, {Component} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "waiting"
        }
    }

    componentDidMount() {
        axios.get("/api")
            .then(response => {
                const message = response.data.message;
                this.setState({message});
            })
            .catch(error => {
                const message = error.toString();
                this.setState({message});
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/> <Message message={this.state.message}/>
                </header>
            </div>
        );
    }
}

function Message(props) {
    return (
        <p>
            Message: {props.message}
        </p>
    );
}

export default App;
