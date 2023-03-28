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
            searchFiledName: '',
            searchFiledGmail: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChangeName = (event) => {
        this.setState({ searchFiledName: event.target.value})
    }

    onSearchChangeGmail = (event) => {
        this.setState({ searchFiledGmail: event.target.value})
    }
//    robot.email.toLocaleLowerCase().includes(searchFiled.toLocaleLowerCase())
    render() {
        const { robots, searchFiledName, searchFiledGmail} = this.state;

        const targetCats = robots.filter(cat => {
            return cat.name.toLocaleLowerCase().includes(searchFiledName.toLocaleLowerCase());
        })

        const targetCatsFilter = targetCats.filter(cat => {
            return cat.email.toLocaleLowerCase().includes(searchFiledGmail.toLocaleLowerCase());
        })


        return robots.length === 0 ?
        <div className="tc">
            <div>
                <h1 className="animate-charcter">CatBox</h1>
                <Search searchChangeName={this.onSearchChangeName} searchChangeGmail={this.onSearchChangeGmail}/>
            </div>

            <h1 className="pa3 f-headline-ns" style={{color: "purple"}}>Loading</h1>
        </div> :
        <div className="tc">
            <div>
                <h1 className="animate-charcter">CatBox</h1>
                <Search searchChangeName={this.onSearchChangeName} searchChangeGmail={this.onSearchChangeGmail}/>
            </div>
            <Scroll>
                <Error>
                    <Cardlist robots={targetCatsFilter}/>
                </Error>
            </Scroll>
        </div>
    }
}

export default App;