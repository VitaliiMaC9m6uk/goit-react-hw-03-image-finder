import { Component } from "react";
// import axios from "axios";
import { Searchbar } from "./Searchbar/Searchbar";
import './styles.css'



export class App extends Component {
  state = {
    KEY: '34860459-58caa0f812cc249544584c986',
    articles: [],    
    page: 1,
  };
  
  
  render() {
    return <div>
      <Searchbar page={this.state.page} KEY={this.state.KEY} />
    </div>;
  }
}
