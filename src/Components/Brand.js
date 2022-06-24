import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'

const Brand = ({ height, width,center,rowHCenter, mode }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ center }}>
      <Text> stub app</Text>
    </View>
  )
}

Brand.propTypes = {
  
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
