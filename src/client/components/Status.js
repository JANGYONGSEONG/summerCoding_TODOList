import React,{Component} from 'react';
import '../styles/ToDo.css';
class Status extends Component{
  constructor(props){
    super(props);
    switch(this.props.status){
      case "Working on it":
        this.state={
          isSelectOn: false,
          backgroundColor:"#faff00"
        }
      break;
      case "Stuck":
        this.state={
          isSelectOn: false,
          backgroundColor:"#ff0000"
        }
      break;
      case "Done":
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
      case "work":
        this.props.modifyStatus(this.props.id,"Working on it");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#faff00"
        }));
        break;
      case "stuck":
        this.props.modifyStatus(this.props.id,"Stuck");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#ff0000"
        }));
        break;
      case "done":
        this.props.modifyStatus(this.props.id,"Done");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#00d10a"
        }));
        break;
      case "empty":
        this.props.modifyStatus(this.props.id,"empty");
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
        <div className="todo_status_btn_wrapper">
          <button className="todo_status_btn" onClick={this.handleClickButton} name="stuck" style={{backgroundColor:"#ff0000"}}>Stuck</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="work" style={{backgroundColor:"#faff00"}}>Working on it</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="done" style={{backgroundColor:"#00d10a"}}>Done</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="empty" style={{backgroundColor:"#0089c3"}}>None</button>
        </div>
      )
    }
    let status;
    if(this.props.status==null){
      status="Status"
    }else{
      status=this.props.status;
    }
    return(
      <div className="todo_status_wrapper">
        <div className="todo_status" onClick={this.handleClick} style={{backgroundColor:this.state.backgroundColor}}>
          {status}
        </div>
        {item}
      </div>
    );
  }
}

export default Status;
