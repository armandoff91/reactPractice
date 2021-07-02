

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {time: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
        , 1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
  
    tick() {
        this.setState({
            time: new Date()
        })
    }

    render () {
        return <h1>the time is now {this.state.time.toString()}</h1>
    }

    

}

const element = <Clock/>
ReactDOM.render(element, document.querySelector("#clock"))