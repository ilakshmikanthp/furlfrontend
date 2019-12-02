import React, { useState,useEffect } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import axios from 'axios';
import TransitionsModal from './Modal';
export default function CustomTable(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Entry_id', field: 'id' },
      { title: 'Furl Description', field: 'furl_description' },
      { title: 'target', field: 'target' },
      {
        title: 'location',
        field: 'location'
      },
      { title: 'description', field: 'description' },
      { title: 'upi', field: 'upi' },
      // { title: 'lead_contact', field: 'lead_contact' },
      // { title: 'date', field: 'date' },
      // { title: 'comments', field: 'comments' },
      // { title: 'team_dl', field: 'team_dl' },

    ]
  });
  useEffect(()=>
  axios.get('http://localhost:8000/v1/furldetails').then(
    (res)=>{
      console.log('data',res.data.data);
      setState( {columns: [
        { title: 'Entry_id', field: 'id' },
        { title: 'Furl Description', field: 'furl_description' },
        { title: 'target', field: 'target' },
        {
          title: 'location',
          field: 'location'
        },
        { title: 'description', field: 'description' },
        { title: 'upi', field: 'upi' },
        // { title: 'lead_contact', field: 'lead_contact' },
        // { title: 'date', field: 'date' },
        // { title: 'comments', field: 'comments' },
        // { title: 'team_dl', field: 'team_dl' },
  
      ],data:res.data.data});
    }
  ),
  []
)
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
const handleSubmit = (newData) => {
  axios.post('http://localhost:8000/v1/furldetail',newData).then(
    (res)=>{
      handleClose();
      console.log('post',res);
      setState(prevState => {
        const data = [...prevState.data];
        data.push({ ... newData, id:res.data.data.id});
        return { ...prevState, data };
      });
    }
  )
}
  return (
    <div>
       <div style={{ backgroundColor: '#e8eaf5' }}>
              <TransitionsModal open={open} handleClose={handleClose} handleSubmit={handleSubmit} {...props} />
          </div>
          <MaterialTable
      title="Table"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) =>  handleOpen()
        }
      ]}
      components={{
        Toolbar: props => (
            <div style={{ backgroundColor: '#e8eaf5' }}>
                <MTableToolbar {...props} />
            </div>
        ),
        
    }}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     axios.post('http://localhost:8000/v1/furldetail',newData).then(
        //     (res)=>{
        //       console.log('post',res);
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }
        //   )
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
        axios.delete(`http://localhost:8000/v1/furldetail/${oldData.id}`).then(
          (res)=>{
            setState(prevState => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }
        )
              
      }}
    />
    </div>
    
  );
}
