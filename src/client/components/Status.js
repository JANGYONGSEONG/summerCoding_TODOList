import React,{Component} from 'react';
import '../styles/ToDo.css';
class Status extends Component{
  constructor(props){
    super(props);
    this.state={
      isSelectOn: false
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
      case "work":
        this.props.modifyStatus(this.props.id,"Working on it");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "stuck":
        this.props.modifyStatus(this.props.id,"Stuck");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "done":
        this.props.modifyStatus(this.props.id,"Done");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "empty":
        this.props.modifyStatus(this.props.id,"empty");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
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
        <div className="todo_status_btn_wrapper">
          <button className="todo_status_btn" onClick={this.handleClickButton} name="work">Working on it</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="stuck">Stuck</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="done">Done</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="empty">null</button>
        </div>
      )
    }
    return(
      <div className="todo_status_wrapper">
        <div className="todo_status" onClick={this.handleClick}>
          {this.props.status}
        </div>
        {item}
      </div>
    );
  }
}

export default Status;
