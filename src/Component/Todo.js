import React, {Component} from 'react';
import Item from './Item';
import '../App.css';


export default class Todo extends Component{

    getInputValue(){
        return document.getElementById('todoText').value;
    }

    clearInputValue(){
        return document.getElementById('todoText').value="";
    }

    handleChange(e){
        var btnAdd = document.getElementById('addBtn');
        
        if(typeof(e) !=="undefined"){
            var lengthOfText = e.currentTarget.value.trim().length;
            if(lengthOfText > 0){
                btnAdd.removeAttribute("disabled");
                btnAdd.classList.remove("disabled");
            }else{
                btnAdd.setAttribute("disabled","disabled");
                btnAdd.classList.add("disabled");
            }
        }else{
                btnAdd.setAttribute("disabled","disabled");
                btnAdd.classList.add("disabled");
        }
    }

    render(){
        let store = this.props.myStore;
        let input;
        return(
            <div className="col-sm-12 text-center">
                <h2 className="jumbotron">TODO'S</h2>
                <div className="input-group">
                    <input  className="form-control" 
                            onChange={this.handleChange}
                            id="todoText" />
                    
                    <span className="input-group-btn">
                        <button className="btn btn-primary disabled" id="addBtn" 
                                onClick={
                                    ()=>{
                                        let text = this.getInputValue();
                                        this.props.onHandleClick(text);
                                        this.clearInputValue();
                                        this.handleChange();
                                    }
                                }>Add
                        </button>
                    </span>
                </div>
                <div className="js-item-container">
                    {
                        store.getState().todos.map((item,i) => 
                            <Item   handleClick={(index) => store.dispatch({type:"TOGGLE_TODO",id:index})}
                                    myStore={store.getState()}
                                    id={item.id}
                                    key={item.id}
                                    name={item.text}
                                    status={item.completed} />)
                    }
                </div>                
            </div>
        );
    }
}