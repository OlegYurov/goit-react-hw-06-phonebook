import React from 'react'
import PropTypes from 'prop-types'


function FormName({children}) {
  return (
    <h2>{children}</h2>
  )
}

FormName.propTypees = {
  children: PropTypes.string,
}

export default FormName