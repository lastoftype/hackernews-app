import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { setFavoriteStories, setLastUpdated } from '../store/actions'
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

class FavoritesPage extends React.Component {

	state = {
		stories: []
	}

	static getInitialProps ({ store, isServer }) {

		const {favorites} = store.getState();

		let promise = apiClient.getStories(favorites)
			.then((stories) => {
				if(stories && stories.length) {
					store.dispatch(setFavoriteStories(stories))
				}
				return stories;
			})

    return !isServer ? promise : {}
  }

  fetchStories() {
  	return apiClient
			.getStories(this.props.favorites)
			.then((stories) => {
				this.props.setFavoriteStories(stories);
				return stories;
			})
  }

	constructor(props) {
		super(props)
		this.apiClient = apiClient;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.favorites.length !== this.props.favorites.length) {
			this.fetchStories()
		}
	}

	render() {
		return (
			<div>
				<Background />
				<Header />
			  <StoryListWrapper>
			  	<Container>
			  		<Row>
				  		<SideNav favoriteCount={this.props.favorites.length} />
				    	<StoryList 
				    		title="Favorites" 
				    		lastUpdated={this.props.lastUpdated}
				    		stories={this.props.favoriteStories} />
			    	</Row>
			    </Container>
			  </StoryListWrapper>
			 </div>
		)
	}
}

const mapStateToProps = ({loading, favorites, favoriteStories, lastUpdated}) => ({favorites, loading, favoriteStories, lastUpdated})

const mapDispatchToProps = dispatch => ({
  setFavoriteStories(stories){
  	dispatch(setFavoriteStories(stories))
  },
  setLastUpdated() {
  	dispatch(setLastUpdated())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage)