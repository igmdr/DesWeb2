import {Route,Switch} from 'react-router-dom';
import NewComment from './components/NewComment/NewComment.js';
import Comments from './components/Comments/Comments.js';
import CommentUpdate from './components/CommentUpdate/CommentUpdate';
import FullComment from './components/FullComment/FullComment.js';
import SignIn from './components/SignIn/SignIn.js';
import MyComments from './components/MyComments/MyComments.js';

const Routes = () => {
    return(
        <Switch>
            <Route path="/meuscomentarios" exact>
                <MyComments/>
            </Route>
            <Route path="/login" exact>
                <SignIn/>
            </Route>
            <Route path="/" exact>
                <Comments/>
            </Route>
            <Route path="/novocomentario">
                <NewComment/>
            </Route>
            <Route path="/:id" exact>
                <FullComment/>
            </Route>
            <Route path="/atualizar/:id" exact>
                <CommentUpdate/>
            </Route>
        </Switch>
    )
}

export default Routes;