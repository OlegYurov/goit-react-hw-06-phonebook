import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../Redux/phoneBook-actions'

function Filter({value, onChange}) {
    return (
        <>
             <p>Find contacts by name</p>
      <label>
                <input onChange={onChange}
                    placeholder="Enter name..."
                    type="text"
                    name='filter'
                value={value}/> 
      </label></>
 
  )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

// Мапает State в пропсы
const mapStateToProps = (state) => ({
    value: state.filter
})

// Передает(dispatch) значение заданных пропсов в экшин
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(actions.filterContacts(e.target.value))
})

// подключает (connect) указанные функции к общему store(хранилищу)
export default connect(mapStateToProps,mapDispatchToProps)(Filter)