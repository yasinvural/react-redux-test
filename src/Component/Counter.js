import React, {Component} from 'react';
import '../App.css';

export default class Counter extends Component{
    render(){
        let store = this.props.myStore;
        return(
            <div className="col-sm-12 js-counter-container text-center">
                <h3 className="jumbotron">Counter Example With Redux </h3>
                <div className="col-sm-4 js-counter-column">
                    <button className="btn btn-danger" onClick={this.props.onDecrement}> Decrement </button>
                </div>
                <div className="col-sm-4 js-counter-column">
                    Counter: <strong>{store.getState().counter}</strong>
                </div>
                <div className="col-sm-4 js-counter-column">
                    <button className="btn btn-success" onClick={this.props.onIncrement}> Increment </button>
                </div>
            </div>
        );
    }
}