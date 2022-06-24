import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'
import i18n from 'i18next'


const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyFetchOneQuery()
  const [internationalLanguage, setInternationalLanguage] = useState(true)


  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const setLanguage = async language => {
    await i18n.changeLanguage(language)
    setInternationalLanguage(!internationalLanguage)
  }

  const toggleLanguage = () => {
    const getLanguage = () => i18n.language
    getLanguage() === 'fr' ? setLanguage('en') : setLanguage('fr')
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <Switch
        thumbColor={Colors.primary}
        onValueChange={toggleLanguage}
        value={internationalLanguage}
        trackColor={{
          false: Colors.inputBackground,
          true: Colors.trackTrueColor,
        }}
      />
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        {/* <Brand /> */}
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: data?.name })}
          </Text>
        )}
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={setUserId}
          editable={!isLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Auto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sample}
        onPress={() => onChangeTheme({ darkMode: true })}
      >
        <Text style={Fonts.textRegular}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Common.button.outline, Gutters.regularBMargin]}
        onPress={() => onChangeTheme({ darkMode: false })}
      >
        <Text style={Fonts.textRegular}>Light</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  sample: {
    height: 50,
    width:100,
    marginBottom:10,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center"
  }
})



export default ExampleContainer
