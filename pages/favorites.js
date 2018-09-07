import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import {
  setFavoriteStories,
  setLastUpdated,
  setLoading
} from '../store/actions'
import { connect } from 'react-redux'
import media from 'styled-media-query'

import Page from '../components/Page'
import StoryList from '../components/StoryList'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Background from '../components/Background'
import { Container, Row } from '../components/Layout'

// API Stuff
import ApiClient from '../api'
let apiClient = new ApiClient()

const StoryListWrapper = styled.main`
  padding-top: 65px;
  ${media.greaterThan('medium')`
    padding-top: 80px;
  `};
`

class FavoritesPage extends React.Component {
  static getInitialProps({ store, isServer }) {
    return store.getState()
  }

  fetchStories() {
    this.props.setLoading(true)
    return apiClient.getStories(this.props.favorites).then(stories => {
      this.props.setLoading(false)
      this.props.setFavoriteStories(stories)
      return stories
    })
  }

  constructor(props) {
    super(props)
    this.apiClient = apiClient
  }

  componentDidMount() {
    this.fetchStories()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.favorites.length !== this.props.favorites.length) {
      this.fetchStories()
    }
  }

  render() {
    return (
      <Page>
        <Background />
        <Header />
        <StoryListWrapper>
          <Container>
            <Row>
              <SideNav favoriteCount={this.props.favorites.length} />
              <StoryList
                loading={this.props.loading}
                pageTitle="Favorites"
                lastUpdated={this.props.lastUpdated}
                stories={this.props.favoriteStories}
              />
            </Row>
          </Container>
        </StoryListWrapper>
      </Page>
    )
  }
}

const mapStateToProps = ({
  loading,
  favorites,
  favoriteStories,
  lastUpdated
}) => ({ favorites, loading, favoriteStories, lastUpdated })

const mapDispatchToProps = dispatch => ({
  setFavoriteStories(stories) {
    dispatch(setFavoriteStories(stories))
  },
  setLastUpdated() {
    dispatch(setLastUpdated())
  },
  setLoading(bool) {
    dispatch(setLoading(bool))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesPage)
