import React,{Component} from 'react';
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
      isSelectOn: !state.isSelectOn
    }));
  }

  render(){
    let dateChangeButton;
    if(this.state.isdateChange){
      dateChangeButton = <button className="todo_date_btn"onClick={this.handleClick} name="date_change">수정</button>
    }

    let placeholder;
    let defaultValue
    if(this.state.date===null){
      placeholder = "ex)2019.05.20";
    }else{
      defaultValue= this.state.date;
    }

    return(
      <div className="todo_date">
        <input className="todo_date_input" type="text" name="date" placeholder={placeholder} defaultValue={defaultValue} onChange={this.handleChange}/>
        {dateChangeButton}
      </div>
    );
  }
}

export default Date;
