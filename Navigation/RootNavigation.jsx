// Navigation/RootNavigation.jsx

import * as React from 'react'

export const navigationRef = React.createRef()


export function navigate(name, params) {
    console.log("RootNavigation navigationRef : " +  navigationRef.current.getRootState())
    navigationRef.current.navigate(name, params)
}
