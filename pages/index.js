import React from 'react';
import Link from 'next/link'
import Head from '../components/Head'

import StoryList from '../components/StoryList'

import ApiClient from '../api'

let apiClient = new ApiClient();

class HackerPage extends React.Component {

	state = {
		stories: []
	}

	constructor(props) {
		super(props)
		this.apiClient = apiClient;
	}

	componentDidMount() {
		this.apiClient
			.getTopStories()
			.then((data) => {
				this.setState({
					stories: data
				})
			})
	}

	render() {
		return (
		  <main className="story-list-wrapper">
		    <StoryList stories={this.state.stories} />
		  </main>
		)
	}
}


export default HackerPage