import React , {useState} from 'react';
import Task from './Task';


export default function Todolist() {
    const[tasks,settasks]=useState([
        {id:Math.random()*10, nom :'SPORT' , done:false },
        {id:Math.random()*10, nom :'FILM',done:false  },
        {id:Math.random()*10, nom :'CODING' ,done:false  }

    ]);
    const [task,settask]=useState('');
    const addtask=()=>{
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=Math.random()*10;
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask('');
    };
    const deletetask=(idp)=>{
        let ntasks=tasks.filter((t)=>{
            return t.id!=idp
        })
        settasks(ntasks); 
    }
    const modifierTache=(id)=>{
        settasks(tasks.map(task => task.id===id ? {id:task.id,nom:task.nom,done:true} : task ))
    }
  
    
  return (
    <div className='bgcl'>

      <h1 >TO DO LIST APP</h1>
      
      <br />
      <form action="">
        <div className='d-flex justify-content-center align-items-center'>
        ENTREZ UNE TACHE : <input type="text" id='btn1' placeholder='Entrer une tache' className='w-50 form-control mx-5' value={task} onChange={(e)=>{settask(e.target.value)}}  />
       <input  type="button" onClick={addtask} className='btn btn-outline-primary'  value="AJOUTER" />
       

        </div>
       

      </form>
      <br /><br />
      <h2>TASKS</h2>
      <br />
     <ul>
        {
            tasks.map((t)=>{
                return <li   style={{listStyle:"none" ,margin:"10px"}}><Task delf={(idp)=>{deletetask(t.id)}} modifierTache = {() => modifierTache(t.id)} key={t.id} txt={t.nom} done = {t.done} /></li> 

            })
        }
     </ul>

    </div>
  )
}