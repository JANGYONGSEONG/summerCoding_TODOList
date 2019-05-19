import React,{Component} from 'react';
import '../styles/ToDo.css';
class Alarm extends Component{
  constructor(props){
      super(props);
      if(this.props.date==="" ||this.props.date==null){
        this.state={
          alarmState: "#cdcdcd",
          alarmMessage: ""
        }
      }else{
        let date = new Date();
        let mydate = this.props.date.split(".");
        if(date.getFullYear()>Number(mydate[0])){
          this.state={
            alarmState: "#ff0000", //red
            alarmMessage: "마감기한초과"
          }
        }else if(date.getFullYear()<Number(mydate[0])){
          this.state={
            alarmState: "#00d10a", //green
            alarmMessage: "마감까지 여유롭네요"
          }
        }else{
          if(date.getMonth()+1>Number(mydate[1])){
            this.state={
              alarmState: "#ff0000",
              alarmMessage: "마감기한초과"
            }
          }else if(date.getMonth()+1<Number(mydate[1])){
            this.state={
              alarmState: "#00d10a",
              alarmMessage: "마감까지 여유롭네요"
            }
          }else{
            if(date.getDate()>Number(mydate[2])){
              this.state={
                alarmState: "#ff0000",
                alarmMessage: "마감기한초과"
              }
            }else if(date.getDate()<Number(mydate[2])){
              this.state={
                alarmState: "#00d10a",
                alarmMessage: "마감까지 여유롭네요"
              }
            }else if(date.getDate()==Number(mydate[2])){
              this.state={
                alarmState: "#faff00",
                alarmMessage: "오늘이 마감일이네요"
              }
            }else{
              this.state={
                alarmState: "#cdcdcd",
                alarmMessage: ""
              }
            }
          }
        }
      }
  }

  render(){

    return(
      <div className="todo_alarm" onClick={this.handleClick} style={{backgroundColor:this.state.alarmState}}>
        {this.state.alarmMessage}
      </div>
    );
  }
}

export default Alarm;
