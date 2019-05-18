import React,{Component} from 'react';
import '../styles/ToDo.css';
class AddButton extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(!this.props.isCreatePlanOn){
      this.props.setFormStatus(true);
    }
  }

  render(){
    return(
      <div className="todo_add">
        <button className="todo_add_btn" onClick={this.handleClick}>
          + new
        </button>
      </div>
    )
  }
}

export default AddButton;
