import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTweets } from '../ducks/twitter'
import { Timeline, Topbar } from '../components'

export class AppContainer extends Component {
  // Lifecycle methods

  componentDidMount () {
    this.props.fetchTweets()
  }

  // render

  render () {
    const { isLoading, data } = this.props
    if (isLoading) return <div>Loading...</div>
    return (
      <React.Fragment>
        <Topbar />
        <Timeline posts={data} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state.twitter

const mapDispatchToProps = dispatch => ({
  fetchTweets: () => dispatch(fetchTweets())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
