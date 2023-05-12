import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import './styles.css'
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    KEY: '34860459-58caa0f812cc249544584c986',
    articles: [],
    totalHits: 0,
    page: 1,
  };
  hendlerSavedData = event => {
    this.setState({
      articles: event.hits,
      totalHits: event.totalHits,
    });
  };
  hendlerPageIncrement = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }))
  }
  render() {
    return (
      <div>
        <Searchbar
          saved={this.hendlerSavedData}
          KEY={this.state.KEY}
          page={this.state.page}
        />
        <ImageGallery>
          {this.state.articles !== null &&
            this.state.articles.map(el => (
              <ImageGalleryItem
                key={el.id}
                src={el.webformatURL}
                fullImage={el.largeImageURL}
              />
            ))}
          <ImageGalleryItem />
        </ImageGallery>
        {this.state.totalHits !== 0 && <Button click={this.hendlerPageIncrement} />}
      </div>
    );
  }
}
