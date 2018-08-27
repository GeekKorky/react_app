import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            key={project.title}
            project={project}
          />
        );
      });
    }
    return (
      <div className="Projects">
        <strong>
          <h1>Latest Projects:</h1>
        </strong>
        <br /> {projectItems}
        <br />
      </div>
    );
  }
}

export default Projects;
