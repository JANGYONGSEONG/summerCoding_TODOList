import React,{Component} from 'react';
import {connect} from 'react-redux';
import {PlanActions} from '../actions';

class Plan extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : {
        ...this.props.plan
      },
      isTitleChange: false,
      isContentChange: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e){
    const {name,value} = e.target;


    if(name==="title"){
      this.setState(state => ({
        ...state,
        value: {
          ...state.value,
          [name]: value
        },
        isTitleChange: true
      }));
    }

    if(name==="content"){
      this.setState(state => ({
        ...state,
        value: {
          ...state.value,
          [name]: value
        },
        isContentChange: true
      }));
    }

  }

  handleClick(e){
    if(e.target.name==="save"){
      this.props.create(this.state.value.title,this.state.value.content);
    }else if(e.target.name==="cancel"){
      if(this.props.isCreatePlanOn){
        this.setState({value: {title:'',content:''}});
        this.props.setFormStatus(false);
      }
    }else if(e.target.name==="remove"){
      this.props.remove(e.target.value);
    }else if(e.target.name==="title_change"){
      this.props.modifyTitle(e.target.value,this.state.value.title);
      this.setState(state => ({
        ...state,
        isTitleChange: false
      }));
    }else if(e.target.name==="content_change"){
      this.props.modifyContent(e.target.value,this.state.value.content);
      this.setState(state => ({
        ...state,
        isContentChange: false
      }));
    }
  }

  render(){
    let plan;
    let titleChangeButton;
    let contentChangeButton;
    if(this.state.isTitleChange){
      titleChangeButton = <button onClick = {this.handleClick} name = "title_change" value={this.props.plan.id}>수정</button>
    }

    if(this.state.isContentChange){
      contentChangeButton = <button onClick = {this.handleClick} name = "content_change" value={this.props.plan.id}>수정</button>
    }

    if(this.props.isForm){
      plan = (
        <div>
          <input type="text" name="title" placeholder="title" value={this.state.value.title} onChange={this.handleChange}/>
          <input type="text" name="content" placeholder="content" value={this.state.value.content} onChange={this.handleChange}/>
          <div>
            <button onClick = {this.handleClick} name = "save">저장</button>
            <button onClick = {this.handleClick} name = "cancel">취소</button>
          </div>
        </div>
      )
    }else{
      plan = (
        <div>
          <input type="text" name="title" defaultValue={this.state.value.title} onChange={this.handleChange}/>
          {titleChangeButton}
          <input type="text" name="content" defaultValue={this.state.value.content} onChange={this.handleChange}/>
          {contentChangeButton}
          <div>
            <button onClick = {this.handleClick} name = "remove" value={this.props.plan.id}>삭제</button>
          </div>
        </div>
      )
    }

    return(
      <div>
        {plan}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isCreatePlanOn: state.plan.isCreatePlanOn,
    plans: state.plan.plans
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFormStatus: (flag) => {
      dispatch(PlanActions.setFormStatus(flag));
    },
    create: (title,content) => {
      dispatch(PlanActions.create(title,content));
    },
    remove: (id) => {
      dispatch(PlanActions.destroy(id));
    },
    modifyTitle: (id,title) => {
      dispatch(PlanActions.modifyTitle(id,title));
    },
    modifyContent: (id,content) => {
      dispatch(PlanActions.modifyContent(id,content));
    }
  };
}

Plan = connect(mapStateToProps,mapDispatchToProps)(Plan);
export default Plan;
