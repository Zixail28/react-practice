import React from 'react';
import './Search.css';

class Search extends React.Component<unknown, { text: string; isLoading: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      text: localStorage.getItem('searchText') || '',
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  componentDidMount(): void {
    const searchText = localStorage.getItem('searchText');
    if (searchText) {
      this.setState({ text: searchText });
    }
    localStorage.setItem('searchText', '');
  }

  componentWillUnmount(): void {
    localStorage.setItem(
      'searchText',
      this.state.text ? this.state.text : localStorage.getItem('searchText')!
    );
  }

  render() {
    return (
      <form className="search-box" action="" method="post" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name=""
          className="search-txt"
          placeholder="Type to search"
          onChange={this.handleChange}
          disabled={this.state.isLoading}
          value={this.state.isLoading ? 'Loading...' : this.state.text}
        />
        <button className="search-btn" type="submit" disabled={this.state.isLoading}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export { Search };
