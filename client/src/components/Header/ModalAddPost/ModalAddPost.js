import React, {Component} from 'react';
import './modalAddPost.scss'

class ModalAddPost extends Component {

    state = {
        post: {
            location: '',
            img_url: '',
            description: ''
        },
    };

    render() {
        const handleModalAddPost=()=>{

            if(this.props.show){
                return(
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <form onSubmit={this.onSubmitSignUp} className={this.props.dataClass}>
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Create Post</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-block input-group d-flex flex-column mb-2">
                                            <label className="form-block__label mb-1"
                                                   htmlFor="validationDefault01">location</label>
                                            <input type="text" className="form-block__input form-control rounded"
                                                   id="validationDefault01"
                                                   placeholder="location"
                                                   value={this.state.location}
                                                   name="location"
                                                   title='Must contain only character'
                                                   required/>
                                        </div>
                                        <div className="form-block input-group d-flex flex-column mb-2">
                                            <label className="form-block__label mb-1"
                                                   htmlFor="validationDefault01">Description</label>
                                            <textarea className="form-block__input form-block__textarea form-control rounded"
                                                      id="validationDefault01"
                                                      placeholder="Description"
                                                      value={this.state.description}
                                                      name="description"/>
                                        </div>
                                        <div className="form-block input-group d-flex flex-column mb-2">
                                            <label className="form-block__label form-block__label-default custom-file-label"
                                                   htmlFor="customFileLangHTML"
                                                   data-browse="Upload">
                                                <span className="form-block__span">Upload file</span>
                                                <input type="file" className="custom-file-input file-path validate"
                                                       id="customFileLangHTML"
                                                       title="Must contain path to your image"
                                                       name="img_url"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save post</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }
        };
        return (
            <>
            {handleModalAddPost()}
            </>
        );
    }
}

export default ModalAddPost;