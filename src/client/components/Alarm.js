import React,{Component} from 'react';
import '../styles/ToDo.css';
class Alarm extends Component{
  constructor(props){
      super(props);
      if(this.props.date!=null){
        const q = new Date();
        const m = q.getMonth()+1;
        const d = q.getDay();
        const y = q.getFullYear();

        const date = new Date(y,m,d);

        const mydate = this.props.date.split(".");
        const deadline = ""+mydate[0]+"-"+mydate[1]+"-"+mydate[2];
        if(date>deadline){
          this.state={
            alarmState: "#ff0000"
          }
        }else if(date==deadline)
        {
          this.state={
            alarmState: "#faff00"
          }
        }else{
          this.state={
            alarmState: "#00d10a"
          }
        }
      }else{
        this.state={
          alarmState: "#f5f5f5"
        }
      }
  }




  render(){

    return(
      <div className="todo_alarm" onClick={this.handleClick} style={{backgroundColor:this.state.alarmState}}>
      </div>
    );
  }
}

export default Alarm;
