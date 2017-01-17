import React, {Component} from 'react';

export class Hello extends Component {
  constructor() {
    super();
    this.state = {projects: []};
  }

  componentDidMount() {
    fetch('http://localhost:8888/wordpress/index.php/wp-json/wp/v2/posts?categories=2')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({projects: response});
      });
  }

  render() {
    console.log('coucou', this.state);
    return (
      <div>
        <h1>{'Hello world!'}</h1>
        <ul>
          {this.state.projects.map((project, i) => (
            <li key={i}>
              {project.acf.title}
              <img src={project.acf.picture.url}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
