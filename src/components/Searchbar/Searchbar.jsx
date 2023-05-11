import { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export class Searchbar extends Component {
    state = {
        findtext:'',
    }
    hendlerChange=({target:{value}})=> {
        this.setState({
          findtext: value,
        });    
    }   
    
  async componentDidUpdate() {
    try {
      const response = await axios.get(
        `q=${this.state.findtext}&page=${this.props.page}&key=${this.props.KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ articles: response.data.hits });

      if (!response.status === 200) {
        throw new Error(response.status);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.hendlerChange}
          />
        </form>
      </header>
    );
  }
}