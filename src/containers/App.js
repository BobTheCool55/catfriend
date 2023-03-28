import React from "react";
import Cardlist from '../components/cardList.js';
import Search from '../components/Search.js';
import './App.css'
import Scroll from '../components/Scroll.js'
import Error from '../components/Error.js'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchFiled: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchFiled: event.target.value})
    }

    render() {
        const { robots, searchFiled} = this.state;
        const targetCats = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchFiled.toLocaleLowerCase());
        })
        return robots.length === 0 ?
        <div className="tc">
            <div>
                <h1 className="animate-charcter">CatBox</h1>
                <Search searchChange={this.onSearchChange}/>
            </div>

            <h1 className="pa3 f-headline-ns" style={{color: "purple"}}>Loading</h1>
        </div> :
        <div className="tc">
            <div>
                <h1 className="animate-charcter">CatBox</h1>
                <Search searchChange={this.onSearchChange}/>
            </div>
            <Scroll>
                <Error>
                    <Cardlist robots={targetCats}/>
                </Error>
            </Scroll>
        </div>
    }
}

export default App;