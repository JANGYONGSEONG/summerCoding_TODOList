import React,{Component} from 'react';
import '../styles/ToDo.css';
class Priority extends Component{
  constructor(props){
    super(props);
    switch(this.props.priority){
      case "High":
        this.state={
          isSelectOn: false,
          backgroundColor:"#ff0000"
        }
      break;
      case "Medium":
        this.state={
          isSelectOn: false,
          backgroundColor:"#faff00"
        }
      break;
      case "Low":
        this.state={
          isSelectOn: false,
          backgroundColor:"#00d10a"
        }
      break;
      default:
        this.state={
          isSelectOn: false,
          backgroundColor:"#0089c3"
        }
      break;
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isSelectOn: !state.isSelectOn
    }));
  }

  handleClickButton(e){
    switch(e.target.name){
      case "high":
        this.props.modifyPriority(this.props.id,"High");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#ff0000"
        }));
        break;
      case "medium":
        this.props.modifyPriority(this.props.id,"Medium");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#faff00"
        }));
        break;
      case "low":
        this.props.modifyPriority(this.props.id,"Low");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#00d10a"
        }));
        break;
      case "empty":
        this.props.modifyPriority(this.props.id,"empty");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#0089c3"
        }));
        break;
      default:
        break;
    }
  }

  render(){
    let item;
    if(this.state.isSelectOn){
      item = (
        <div className="todo_priority_btn_wrapper">
          <button className="todo_priority_btn" onClick={this.handleClickButton} name="high" style={{backgroundColor:"#ff0000"}}>High</button>
          <button className="todo_priority_btn" onClick={this.handleClickButton} name="medium" style={{backgroundColor:"#faff00"}}>Medium</button>
          <button className="todo_priority_btn" onClick={this.handleClickButton} name="low" style={{backgroundColor:"#00d10a"}}>Low</button>
          <button className="todo_priority_btn" onClick={this.handleClickButton} name="empty" style={{backgroundColor:"#0089c3"}}>우선순위</button>
        </div>
      )
    }
    let priority;
    if(this.props.priority==null){
      priority="우선순위"
    }else{
      priority=this.props.priority;
    }
    return(
      <div className="todo_priority_wrapper">
        <div className="todo_priority" onClick={this.handleClick} style={{backgroundColor:this.state.backgroundColor}}>
          {priority}
        </div>
        {item}
      </div>
    );
  }
}

export default Priority;
