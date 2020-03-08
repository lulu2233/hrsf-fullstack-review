import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  fecth() {
    $.get('/repos', (data) => {
      this.setState({
        repos: data
      })
      console.log('success get');
    })
  }

  componentDidMount() {
    this.fecth();
  }

  search(term) {
    console.log(`${term} was searched`);
    console.log(typeof term);
    $.ajax({
      url: '/repos',
      type: "POST",
      data: { 'username': term },
      success: () => {
        console.log('success post');
        this.fecth();
      },

    });
  }





  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));