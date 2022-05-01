const axios = require('axios');

const postReminder = async (reminder) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3001/api/reminder',
      data: reminder

    });
    console.log('se ha enviado el objeto correctamente');
  } catch(error) {
    console.log(error);
  }
};

const getReminders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: 'http://localhost:3001/api/reminder'
  });
  return res.data.filter(el => el.userId.includes(userId));
};

const postChecklist = async (checklist) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3001/api/checklist',
      data: checklist

    });
    console.log('se ha enviado el objeto correctamente');
  } catch(error) {
    console.log(error);
  }
};

const getChecklist = async (name) => {
  const res = await axios({
    method: 'GET',
    url: 'http://localhost:3001/api/checklist'
  });
  return res.data.filter(e => e.listName === name);
};

const putChecklist = async (id, checklistElement) => {
  const res = await axios({
    method: 'put',
    url: 'http://localhost:3001/api/checklist/' + id,
    data: checklistElement
  });
  console.log('se ha actualizado el objeto correctamente');
  return res;
};

const deleteChecklist = async (id) => {
  try{
    await axios({
      method: 'DELETE',
      url: 'http://localhost:3001/api/checklist/' + id,
    });
    console.log('realizada peticion DELETE');
  }catch(e){
    console.log(e);
  }
};


module.exports = {
  postReminder,
  getReminders,
  postChecklist,
  getChecklist,
  putChecklist,
  deleteChecklist
};