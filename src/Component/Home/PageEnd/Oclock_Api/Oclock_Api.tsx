import axios from "axios";
import React from "react";

class OclockApi extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {repos: []};
    }



    componentDidMount() {
      axios.get('http://worldclockapi.com/api/json/est/now')
        .then(response => this.setState({ repos: response.data.ordinalDate }))
    }
    // componentDidMount() {
    //   axios.get('https://api.github.com/users/facebook/repos')
    //     .then(response => this.setState({ repos: response.data }))
    //     .catch(error => console.log(error));
    // }
  
    render() {
        // console.log(this.state.repos);
        
      return (
        <div>
          <h1>Repos by facebook</h1>
          {/* {this.state.repos.map(repo =>
            <div key={repo.id}>{repo.name}</div>
          )} */}
        </div>
      );
    }
  }
export default OclockApi