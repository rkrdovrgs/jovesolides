import React from "react";
import axios from "axios";


class CreateCategories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            code: ''
        };

        this.createCategory = this.createCategory.bind(this);
    }

    createCategory(event) {
        event.preventDefault();
        console.log(this.state);

        //send a request to the server with the data
        axios.post("/api/category", this.state);
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <form>
                        <h1>Add Category</h1>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="categoryName">Category Name:</label>
                            <input onChange={(event) => this.setState({ name: event.target.value })} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoryCode">Category Code:</label>
                            <input onChange={(event) => this.setState({ code: event.target.value })} type="text" className="form-control" placeholder="Code" />
                        </div>
                        <input onClick={this.createCategory} type="submit" className="btn btn-default col-xs-offset-9 col-xs-3" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCategories;
