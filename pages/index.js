import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { setStories } from '../store/actions'
import { connect } from 'react-redux'

import Head from '../components/Head'

import StoryList from '../components/StoryList'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Container, Row } from '../components/Layout'

import ApiClient from '../api'

let apiClient = new ApiClient();

const StoryListWrapper = styled.main`
	padding-top: 80px;
`

const Background = styled.div`
	position: absolute;
	background: #F6F9FC;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	min-height: 100vh;
`

class HackerPage extends React.Component {

	state = {
		stories: []
	}

	static getInitialProps ({ store, isServer }) {
    return apiClient
			.getTopStories()
			.then((stories) => {
				store.dispatch(setStories(stories))
				return stories;
			})
  }

	constructor(props) {
		super(props)
		this.apiClient = apiClient;
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Background />
				<Header />
			  <StoryListWrapper>
			  	<Container>
			  		{JSON.stringify(this.props.favorites)}
			  		<Row>
				  		<SideNav />
				    	<StoryList stories={this.props.stories} />
			    	</Row>
			    </Container>
			  </StoryListWrapper>
			 </div>
		)
	}
}

const mapStateToProps = ({loading, favorites, stories}) => ({favorites, loading, stories})

const mapDispatchToProps = dispatch => ({
  setStories(){
  	dispatch(setStories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HackerPage)