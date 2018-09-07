import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import domain from 'getdomain'
import moment from 'moment'

import { bindActionCreators } from 'redux'
import { addFavorite, removeFavorite } from '../../store/actions'
import { connect } from 'react-redux'

import StoryTimestamp from '../StoryTimestamp'
import StoryLink from '../StoryLink'
import StoryTitle from '../StoryTitle'
import StoryScore from '../StoryScore'
import StoryIcon from '../StoryIcon'
import StoryAuthor from '../StoryAuthor'
import ArticleWrapper from '../ArticleWrapper'
import { Row } from '../Layout'

import { StorySchema } from '../../lib/schema'

const Article = styled.article`
  flex: 0 0 100%;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.15s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transform: translateY(0);
  background: white;
`

class Story extends React.Component {
  static propTypes = {
    ...StorySchema
  }

  constructor(props) {
    super(props)
  }

  toggle = () => {
    console.log('toggled')
  }

  toggleFavorite = () => {
    const { favorites, id } = this.props
    const inArray = favorites.indexOf(id) !== -1

    console.log({ inArray }, { favorites })

    if (inArray) {
      this.removeFavorite(id)
    } else {
      this.addFavorite(id)
    }
  }

  removeFavorite = () => {
    this.props.removeFavorite(this.props.id)
  }

  addFavorite = () => {
    this.props.addFavorite(this.props.id)
  }

  get isActive() {
    const { favorites, id } = this.props
    return favorites.indexOf(id) !== -1
  }

  render() {
    const { by, title, id, score, time, url, type, className } = this.props

    return (
      <ArticleWrapper>
        <Article score={score}>
          <Row column>
            <Row spaceBetween>
              <StoryTimestamp time={time} />
              <StoryScore score={score} />
            </Row>
            <StoryTitle title={title} url={url} score={score} />
          </Row>
          <Row spaceBetween>
            <StoryAuthor author={by} />
            <StoryIcon
              active={this.isActive}
              handleClick={() => this.toggleFavorite}
            />
          </Row>
        </Article>
      </ArticleWrapper>
    )
  }
}

const mapStateToProps = ({ loading, favorites }) => ({ favorites, loading })

const mapDispatchToProps = dispatch => ({
  addFavorite(id) {
    dispatch(addFavorite(id))
  },
  removeFavorite(id) {
    dispatch(removeFavorite(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story)
