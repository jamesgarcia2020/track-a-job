import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddTrackPage extends Component {
 state = {
   invalidForm: true,
   formData: {
     company: '',
     title: 'Engineer',
     dateApplied: '2020-10-23',
     location: '',
     level: '',
     nextStep: '',
     applicationStatus: '',
     user: this.props.user._id
   }
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddTrack(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 render() {
   return (
     <>
     
       <h1>Add A Job</h1>
       <form className="form" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Company:</label>
           <input
             className="form-control"
             name="company"
             value={this.state.formData.company}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Title:</label>
           <input
             className="form-control"
             name="title"
             value={this.state.formData.title}
             onChange={this.handleChange}
             required
           />
         </div>
         <div className="form-group">
           <label>Date Applied:</label>
           <input
             className="form-control"
             type="date"
             name="dateApplied"
             value={this.state.formData.dateApplied}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Location:</label>
           <input
             className="form-control"
             name="location"
             value={this.state.formData.location}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Link:</label>
           <input
             className="form-control"
             name="level"
             value={this.state.formData.level}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Next Step:</label>
           <input
             className="form-control"
             name="nextStep"
             value={this.state.formData.nextStep}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Application Notes:</label>
           <textarea
             className="form-control"
             name="applicationStatus"
             rows="3"
             value={this.state.formData.applicationStatus}
             onChange={this.handleChange}
           >
           </textarea>
         </div>
         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           ADD Track
         </button>
         <Link to='/'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default AddTrackPage;