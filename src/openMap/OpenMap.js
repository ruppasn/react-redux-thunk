import React from 'react'
import { connect } from 'react-redux';

const OpenMap = (props) => {

    return <>Hi.. {props.msg}</>
}

const mapStateToProps = (state) => ({
    msg: state.map.test
})

export default connect(mapStateToProps)(OpenMap);