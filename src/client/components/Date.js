import React,{Component} from 'react';
import Alarm from './Alarm';
import '../styles/ToDo.css';
class Date extends Component{
  constructor(props){
    super(props);
    this.state={
      date:this.props.date,
      isdateChange: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const value = e.target.value;
    this.setState(state => ({
      date: value,
      isdateChange: true
    }));
  }


  handleClick(){
    this.props.modifyDate(this.props.id,this.state.date);
    this.setState(state => ({
      isdateChange: !state.isdateChange
    }));
  }

  render(){
    let dateChangeButton;
    var emptyMessage;
    var alarmMessage;
    if(this.state.isdateChange){
      dateChangeButton = <button className="todo_date_btn"onClick={this.handleClick} name="date_change">수정</button>
      emptyMessage = <Alarm date={""}/>
    }else{
      alarmMessage = <Alarm date={this.state.date}/>
    }

    let placeholder = "ex)2019.05.20";
    let defaultValue = this.state.date;

    return(
      <div>
        <div className="todo_date">
          <input className="todo_date_input" type="text" name="date" placeholder={placeholder} defaultValue={defaultValue} onChange={this.handleChange}/>
          {dateChangeButton}
        </div>
        {emptyMessage}
        {alarmMessage}
      </div>
    );
  }
}

export default Date;
