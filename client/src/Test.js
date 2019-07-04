import React, { Component } from 'react'
import { connect } from "react-redux"
import { getDataFromDb } from './action/data.action'

class Test extends Component{

    componentDidMount() {
        console.log(this);
        // this.props.getData();
    }

    render() {
        const {data} = this.props;
        console.log('render', data);
        return(
            <div>
                <ul>
                    {data.length <= 0
                        ? 'NO DB ENTRIES YET'
                        : data.map((dat) => (
                            <li style={{ padding: '10px' }} key={dat.message}>
                                <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                                <span style={{ color: 'gray' }}> data: </span>
                                {dat.message}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (store) => {

    console.log('mapStateToProps', store);
    return {
        data: store.data.get('data').toJS(),
        isLoading: store.data.get('isLoading')
    }
};

const mapDispatchToProps = (dispatch) => {

    console.log('mapDispatchToProps', dispatch);
    return {
        getData: () => dispatch(getDataFromDb())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test)



