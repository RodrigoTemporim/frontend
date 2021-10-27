import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TasksForn from './pages/Tasks/Forn';
import TasksDetail from './pages/Tasks/Detail';
 
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" exact component={Tasks} />
            <Route path="/tarefas_cadastro" exact component={TasksForn} />
            <Route path="/tarefas_cadastro/:id" exact component={TasksForn} />
            <Route path="/tarefas/:id" exact component={TasksDetail} />
        </Switch>
    );
}
 
export default Routes;