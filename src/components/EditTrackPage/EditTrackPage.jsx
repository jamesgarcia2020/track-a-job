import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditTrackPage extends Component {
 state = {
   invalidForm: false,
   // Refer to PuppyListItem to see how puppy is being passed via the <Link>
   formData: this.props.location.state.track
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleUpdateTrack(this.state.formData);
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
       <h1>Edit Job</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Company</label>
           <input
             className="form-control"
             name="company"
             value={this.state.formData.company}
             onChange={this.handleChange}
             
           />
         </div>
         <div className="form-group">
           <label>Title</label>
           <input
             className="form-control"
             name="title"
             value={this.state.formData.title}
             onChange={this.handleChange}
             
           />
         </div>
         
         <div className="form-group">
           <label>Location</label>
           <input
             className="form-control"
             name="location"
             value={this.state.formData.location}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Level</label>
           <input
             className="form-control"
             name="level"
             value={this.state.formData.level}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Next Step</label>
           <input
             className="form-control"
             name="nextStep"
             value={this.state.formData.nextStep}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Application Status</label>
           <input
             className="form-control"
             name="applicationStatus"
             value={this.state.formData.applicationStatus}
             onChange={this.handleChange}
           />
         </div>
         <button
           type="submit"
           className="btn btn-xs"
           disabled={this.state.invalidForm}
         >
           SAVE Job
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
       </form>
     </>
   );
 }
}
export default EditTrackPage;