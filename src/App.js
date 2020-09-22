import React, { Component } from 'react';
import './App.css';
import './style.css';

class App extends Component {
    state={num:0}

    doit=(a)=>{
      this.setState({num:a})
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <div className="CircleSelector">
            <button onClick={()=>{this.state.num===1?this.doit(0):this.doit(1)}} className={this.state.num===1? 'selected' : ''}>1</button>
            <button onClick={()=>{this.state.num===2?this.doit(0):this.doit(2)}} className={this.state.num===2? 'selected' : ''}>2</button>
            <button onClick={()=>{this.state.num===3?this.doit(0):this.doit(3)}} className={this.state.num===3? 'selected' : ''}>3</button>
            <button onClick={()=>{this.state.num===4?this.doit(0):this.doit(4)}} className={this.state.num===4? 'selected' : ''}>4</button>
          </div>
          <span className="Circles">
            <div id="1" onClick={()=>{this.state.num===5?this.doit(0):this.doit(5)}} className={this.state.num===5?'selected':''}>1</div>
            <div id="2" onClick={()=>{this.state.num===6?this.doit(0):this.doit(6)}} className={this.state.num===6?'selected':''}>2</div>
            <div id="3" onClick={()=>{this.state.num===7?this.doit(0):this.doit(7)}} className={this.state.num===7?'selected':''}>3</div>
            <div id="4" onClick={()=>{this.state.num===8?this.doit(0):this.doit(8)}} className={this.state.num===8?'selected':''}>4</div>
          </span>
        </main>
      </div>
    );
  }
}

export default App;