import { Component } from "react";
import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';

export class Searchbar extends Component {
  state = {
    findtext: '',    
    articles: [],
    // page:this.props.page,
  };
  hendlerChange = ({ target: { value } }) => {
    if (value.trim() !== '') {
      this.setState({
        findtext: value,
      }); 
    }
           
  };
  hendlerSubmit = (e) => {
    e.preventDefault();    
    this.props.saved(this.state.articles)
    this.setState({findtext:''})
  };
async componentDidUpdate(prevProps, prevState) {
  if (prevState.findtext !== this.state.findtext ||
      prevProps !== this.props) {
      try {
        const response = await axios.get(
          `?q=${this.state.findtext.replace(' ', '+')}&page=${
            this.props.page
          }&key=${
            this.props.KEY
          }&image_type=photo&orientation=horizontal&per_page=12`
        );        
        this.setState({ articles: response.data });

        if (!response.status === 200) {
          throw new Error(response.status);
        }
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
    
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.hendlerSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hendlerChange}
            value={this.state.findtext}        
          />
        </form>
      </header>
    );
  }
}