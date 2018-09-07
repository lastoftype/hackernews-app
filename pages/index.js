import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { setStories, setLastUpdated, setLoading } from '../store/actions'
import { connect } from 'react-redux'

import Background from '../components/Background'
import Page from '../components/Page'
import StoryList from '../components/StoryList'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Container, Row } from '../components/Layout'

// API Stuff
import ApiClient from '../api'
let apiClient = new ApiClient()

const StoryListWrapper = styled.main`
  padding-top: 80px;
`

class HackerPage extends React.Component {
  static getInitialProps({ store, isServer }) {
    return store.getState()
  }

  componentDidMount() {
    this.fetchStories()
  }

  fetchStories() {
    this.props.setLoading(true)

    apiClient
      .getTopStories()
      .then(stories => {
        this.props.setStories(stories)
      })
      .then(() => {
        this.props.setLoading(false)
        this.props.setLastUpdated()
      })
  }

  constructor(props) {
    super(props)
    this.apiClient = apiClient
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
                lastUpdated={this.props.lastUpdated}
                pageTitle="Top stories"
                stories={this.props.stories}
              />
            </Row>
          </Container>
        </StoryListWrapper>
      </Page>
    )
  }
}

const mapStateToProps = ({ loading, favorites, stories, lastUpdated }) => ({
  favorites,
  loading,
  stories,
  lastUpdated
})

const mapDispatchToProps = dispatch => ({
  setStories(stories) {
    dispatch(setStories(stories))
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
)(HackerPage)
