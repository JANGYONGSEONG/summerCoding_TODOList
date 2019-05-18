import React,{Component} from 'react';
import {connect} from 'react-redux';
import {PlanActions} from '../actions';
import {Date,Priority,Status,Alarm} from '../components';
import '../styles/ToDo.css';
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
    switch(e.target.name){
      case "save":
        this.props.create(this.state.value.title,this.state.value.content);
        break;

      case "cancel":
        this.setState({value: {title:'',content:''}});
        this.props.setFormStatus(false);
        break;

      case "remove":
        this.props.remove(this.props.plan.id);
        break;

      case "title_change":
        this.props.modifyTitle(this.props.plan.id,this.state.value.title);
        this.setState(state => ({
          ...state,
          isTitleChange: false
        }));
        break;

      case "content_change":
        this.props.modifyContent(this.props.plan.id,this.state.value.content);
        this.setState(state => ({
          ...state,
          isContentChange: false
        }));
        break;

      default:
        break;
    }
  }

  render(){
    let plan;
    let titleChangeButton;
    let contentChangeButton;
    if(this.state.isTitleChange){
      titleChangeButton = <button className="todo_update_btn" onClick={this.handleClick} name="title_change">수정</button>
    }

    if(this.state.isContentChange){
      contentChangeButton = <button className="todo_update_btn" onClick={this.handleClick} name="content_change">수정</button>
    }

    if(this.props.isForm){
      plan = (
        <div className="todo_plan_form">
          <div className="todo_plan_input_wrapper">
            <input className="todo_input_title" type="text" name="title" placeholder="title" value={this.state.value.title} onChange={this.handleChange}/>
            <textarea className="todo_input_content" name="content" placeholder="content" value={this.state.value.content} onChange={this.handleChange}/>
          </div>
          <div className="todo_plan_btn_wrapper">
            <button className="todo_save_btn" onClick={this.handleClick} name="save">저장</button>
            <button className="todo_cancel_btn" onClick={this.handleClick} name="cancel">취소</button>
          </div>
        </div>
      )
    }else{
      plan = (
        <div className="todo_plan">
          <div className="todo_plan_left">
            <input className="todo_input_title" type="text" name="title" defaultValue={this.state.value.title} onChange={this.handleChange}/>
            {titleChangeButton}
            <textarea className="todo_input_content" name="content" defaultValue={this.state.value.content} onChange={this.handleChange}/>
            {contentChangeButton}
          </div>
          <div className="todo_plan_right">
            <Date id={this.props.plan.id} date={this.props.plan.date} modifyDate={this.props.modifyDate}/>
            <Priority id={this.props.plan.id} priority={this.props.plan.priority} modifyPriority={this.props.modifyPriority}/>
            <Status id={this.props.plan.id} status={this.props.plan.status} modifyStatus={this.props.modifyStatus}/>
            <Alarm id={this.props.plan.id} date={this.props.plan.date}/>
          </div>
          <div className="todo_plan_btn_wrapper">
            <button className="todo_delete_btn" onClick={this.handleClick} name="remove">삭제</button>
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
    },
    modifyDate: (id,date) => {
      dispatch(PlanActions.modifyDate(id,date));
    },
    modifyPriority: (id,priority) => {
      dispatch(PlanActions.modifyPriority(id,priority));
    },
    modifyStatus: (id,status) => {
      dispatch(PlanActions.modifyStatus(id,status));
    },
  };
}

Plan = connect(mapStateToProps,mapDispatchToProps)(Plan);
export default Plan;
