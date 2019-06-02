import React,{Component} from 'react';
import '../styles/ToDo.css';
class Status extends Component{
  constructor(props){
    super(props);
    switch(this.props.status){
      case "Working on it":
        this.state={
          isSelectOn: false,
          backgroundColor:"#faff00",
          status:"Working on it"
        }
      break;
      case "Stuck":
        this.state={
          isSelectOn: false,
          backgroundColor:"#ff0000",
          status:"Stuck"
        }
      break;
      case "Done":
        this.state={
          isSelectOn: false,
          backgroundColor:"#00d10a",
          status:"Done"
        }
      break;
      default:
        this.state={
          isSelectOn: false,
          backgroundColor:"#0089c3",
          status:""
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
          backgroundColor:"#faff00",
          status:"Working on it"
        }));
        break;
      case "stuck":
        this.props.modifyStatus(this.props.id,"Stuck");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#ff0000",
          status:"Stuck"
        }));
        break;
      case "done":
        this.props.modifyStatus(this.props.id,"Done");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#00d10a",
          status:"Done"
        }));
        break;
      case "empty":
        this.props.modifyStatus(this.props.id,"empty");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn,
          backgroundColor:"#0089c3",
          status:""
        }));
        break;
      default:
        break;
    }
  }

  componentDidMount(){

  }

  render(){
    let item;
    if(this.state.isSelectOn){
      item = (
        <div className="todo_status_btn_wrapper">
          <button className="todo_status_btn" onClick={this.handleClickButton} name="stuck" style={{backgroundColor:"#ff0000"}}>문제 발생</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="work" style={{backgroundColor:"#faff00"}}>진행 중</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="done" style={{backgroundColor:"#00d10a"}}>완료</button>
          <button className="todo_status_btn" onClick={this.handleClickButton} name="empty" style={{backgroundColor:"#0089c3"}}>상태</button>
        </div>
      )
    }
    let status;
    switch(this.state.status){
        case "Working on it":
          status = "진행 중";
          break;
        case "Stuck":
          status = "문제 발생";
          break;
        case "Done":
          status = "완료";
          break;
        default:
          status = "상태"
          break;
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
