import React from 'react'

import { ActionTypes } from '../constants'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={ActionTypes.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={ActionTypes.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={ActionTypes.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer