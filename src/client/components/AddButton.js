import React,{Component} from 'react';

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
      <div>
        <button onClick = {this.handleClick}>
          + new
        </button>
      </div>
    )
  }
}

export default AddButton;
