var React = require('react');
var axios = require('axios');




var Query = React.createClass({
	getInitialState: function() {
		return {term: ''};
	},
	handleTermChange: function(event) {
		this.setState({term: event.target.value});
	},

	handleSubmit: function(event){
		event.preventDefault();
		console.log('SUBMITTED');
		var term = this.state.term.trim();
		if (!term) {
	    	return;
	    }
		// run search on (term)

		this.props.callbackParent(term)
		this.setState({term: ''})
	},
	render: function(){
		return(

			<div className="col-sm-12">
		        <form onSubmit={this.handleSubmit}>
		          	<div className="form-group col-lg-6">
		            	<input type="text" value={this.state.term} onChange={this.handleTermChange} placeholder="Enter search terms.." className="form-control" />
		          	</div>
		          	<div className="form-group col-lg-6">
		            	<button type="submit" className="btn btn-block btn-primary">Search NYT</button>
		          	</div>
		        </form>
		    </div>

		)
	}
});

function runSearch(term){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258&q=" + term)
		.then(function(results){
			console.log(results)
			for (var i = 0; i < results.data.response.docs.length; i++) {
				console.log(results.data.response.docs[i].headline.main)
			}
	})
};



module.exports = Query;
