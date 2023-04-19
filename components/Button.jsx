import { Text, TouchableOpacity } from 'react-native'

const Button = ({Icon, title, stylesButton, stylesText, pressHandler}) => {

  return (
    <TouchableOpacity onPress={pressHandler && pressHandler} style={stylesButton}>
      {Icon ?  Icon : <Text style={stylesText} >{title && title}</Text>} 
    </TouchableOpacity>
  )
}

export default Button