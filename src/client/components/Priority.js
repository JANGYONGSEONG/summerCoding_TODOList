import React,{Component} from 'react';
import '../styles/ToDo.css';
class Priority extends Component{
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
      case "high":
        this.props.modifyPriority(this.props.id,"High");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "medium":
        this.props.modifyPriority(this.props.id,"Medium");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "low":
        this.props.modifyPriority(this.props.id,"Low");
        this.setState(state => ({
          isSelectOn: !state.isSelectOn
        }));
        break;
      case "empty":
        this.props.modifyPriority(this.props.id,"empty");
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
        <div>
          <button onClick={this.handleClickButton} name="high">High</button>
          <button onClick={this.handleClickButton} name="medium">Medium</button>
          <button onClick={this.handleClickButton} name="low">Low</button>
          <button onClick={this.handleClickButton} name="empty">null</button>
        </div>
      )
    }
    return(
      <div>
        <div className="todo_priority" onClick={this.handleClick}>
          {this.props.priority}
        </div>
        {item}
      </div>
    );
  }
}

export default Priority;
