import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddButton} from "./components";
import {Plan} from "./container";
import {PlanActions} from "./actions";
import './styles/ToDo.css';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    this.props.getPlan();
    let planForm;
    if (this.props.isCreatePlanOn) {
     planForm = <Plan isForm={true}/>;
    }

    let plans;
    plans = (this.props.plans.map(plan =>
      <Plan plan={plan}/>
    ))

    return(
      <div className="wrap">
        <div className="header">
          <span className="header_title">SummerCoding ToDoList</span>
          <AddButton setFormStatus={this.props.setFormStatus} isCreatePlanOn={this.props.isCreatePlanOn}/>
        </div>
        <div className="content">
          {planForm}
          {plans}
        </div>
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
    getPlan: () => {
      dispatch(PlanActions.show());
    }
  };
}

App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
