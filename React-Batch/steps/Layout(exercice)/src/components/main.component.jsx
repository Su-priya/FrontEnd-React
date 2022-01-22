import { Component } from 'react';
import ArticleComp from './article.component';
class MainComp extends Component{
    render(){
        return <main>
                    <ArticleComp/>
                    <ArticleComp/>
                    <ArticleComp/>
               </main>
    }
}

export default MainComp;