class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.refresh = this.refresh.bind(this)
        this.stopCycle = this.stopCycle.bind(this)
        this.startCycle = this.startCycle.bind(this)
        this.state = {message: this.props.message,
             i:0,
            isFocused: false
        }
        this.cycle = setInterval(() => {
            this.refresh()
        }, 1000);

    }
    render() {
        return <div onFocus={this.startCycle} onBlur={this.stopCycle} tabIndex="100">
            {this.state.message}
            <button onClick={this.refresh}>
                say hi
            </button>
            <input></input>
        </div>
    }
    startCycle() {
        if(this.state.isFocused) {return}
        this.state.isFocused = true
    }

    stopCycle() {   
        console.log("stop cycle called")
        clearInterval(this.cycle)
    }

    refresh() {
        this.state.i++
        this.setState({
            message : this.state.i 
        })
    }
}

ReactDOM.render(<Comment refresh={this.refresh} message="excalibar"/>, document.querySelector("#commentTest"))