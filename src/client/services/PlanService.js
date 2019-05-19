import axios from 'axios';

export const PlanService = {
  show,
  create,
  destroy,
  modifyTitle,
  modifyContent,
  modifyPriority,
  modifyStatus,
  modifyDate
};

function show(){
  return axios.get('/plans')
    .then(res => {
      const plans = res.data.plans;
      return plans;
    })
    .catch(err => {
      return err;
    });
};

function create(title,content){
  return axios.post('/plans',{
    title: title,
    content: content
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      title: res.data.title,
      content: res.data.content
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
};

function destroy(id){
  return axios.delete('/plans/'+id)
  .then(res => {
    return;
  })
  .catch(err => {
    return err;
  });
};

function modifyTitle(id,title){
  return axios.patch('/plans/title/'+id+'/'+title)
  .then(res => {
    const plan = {
      id: res.data.id,
      title: res.data.title
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
};

function modifyContent(id,content){
  return axios.patch('/plans/content/'+id+'/'+content)
  .then(res => {
    const plan = {
      id: res.data.id,
      content: res.data.content
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyPriority(id,priority){
  return axios.patch('/plans/priority/'+id+'/'+priority)
  .then(res => {
    const plan = {
      id: res.data.id,
      priority: res.data.priority
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyStatus(id,status){
  return axios.patch('/plans/status/'+id+'/'+status)
  .then(res => {
    const plan = {
      id: res.data.id,
      status: res.data.status
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyDate(id,date){
  if(date===""){
    date="empty";
  }
  return axios.patch('/plans/date/'+id+'/'+date)
  .then(res => {
    const plan = {
      id: res.data.id,
      date: res.data.date
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}
