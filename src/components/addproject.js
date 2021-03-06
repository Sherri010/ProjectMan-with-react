import React, { Component } from 'react';
import uuid from "uuid";
class AddProject extends Component {
  constructor(){
    super();
    this.satate={
      newProject:[]
    }
  }
  static defaultProps ={
    categories:["web","mobile","design"]
  }

  handleSubmit(e){
       e.preventDefault();
    if(this.refs.title.value === ""){
      alert("no empty")
    }else{
      this.setState({newProject:{
        id:uuid.v4(),
        title:this.refs.title.value,
        category:this.refs.category.value
      }},function(){
        this.props.addProject(this.state.newProject);
      }
    )
    }

  }

  render() {
    let cats = this.props.categories.map(category =>{
       return <option key={category} value={category}>{category}</option>
     });
    return (
    <div>
      <h3> Add new project </h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label> <br />
          <input type="text" ref="title" />
        </div>
        <div>
          <label>Cat</label> <br />
          <select ref="category">
             {cats}
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )}
}

AddProject.propTypes ={
  category : React.PropTypes.string,
  onDelete : React.PropTypes.func
}
export default AddProject;
