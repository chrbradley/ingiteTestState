import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/TestStateStyle'

class TestState extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  // componentWillreceiveProps (nextProps) {
  //   console.log('this.props: ', this.props)
  //   console.log('nextProps: ', nextProps)
  // }

  componentDidMount () {
    this.props.checkTestState()
  }

  componentWillReceiveProps () {
    this.props.checkTestState()
  }

  render () {
    console.log('this.props: ', this.props)
    let { a, b, c } = this.props
    console.log('a: ', a)
    return (
      <ScrollView style={styles.container}>
        <Text>TestState Container</Text>
        <Text>a: {a}</Text>
        <Text>b: {b}</Text>
        <Text>c: {c}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.testState.a,
    b: state.testState.b,
    c: state.testState.c
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkTestState: () => dispatch(Actions.checkTestState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestState)
