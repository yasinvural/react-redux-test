import React, {Component} from 'react';
import '../App.css';


export default class Item extends Component{
    
    
    getButtonClass(){        
        return `btn ${this.props.status ? "btn-danger" : "btn-success"}`;
    }

    render(){
        const cardStyle={
            width: '20rem',
            height:'100%',
            background: 'rgba(222, 214, 212, 0.38)'
        };
        return(
                <div className="card js-card" style={cardStyle}>
                    <div className="card-block">
                        <h4 className={this.props.status ? "itemTrue" : "itemFalse"}>
                            {this.props.name}
                        </h4>
                    </div>
                    <a  className={`btn ${this.props.status ? "btn-danger" : "btn-success"}`} 
                        onClick={()=>{this.props.handleClick(this.props.id)}}>
                        {this.props.status ? "Get Back" : "Done"}
                    </a>
                </div>

            /*<div 
                onClick={()=>{this.props.handleClick(this.props.id)}}
                className=  {this.props.status ? "itemTrue" : "itemFalse"} >
                {this.props.name}
            </div>*/

        );
    }
}