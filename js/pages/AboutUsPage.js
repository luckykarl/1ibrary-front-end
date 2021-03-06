import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  WebView
} from 'react-native'
import CommonNav from '../components/CommonNav'
import TextPingFang from '../components/TextPingFang'
import AboutUsWebPage from './AboutUsWebPage'

const WIDTH = Dimensions.get('window').width
const INNERWIDTH = WIDTH - 16
const HEIGHT = Dimensions.get('window').height

export default class AboutUsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={require('../../res/images/about_bg.png')}
        >
          <CommonNav
            title={'关于我们'}
            navigator={this.props.navigator}
            navStyle={styles.opacity0}
            navBarStyle={styles.opacity0}
          />
        </Image>
        <Image
          style={styles.logo}
          source={require('../../res/images/about_logo.png')}
        />
        <View style={styles.text}>
          <Text style={styles.slogan}>ONE</Text>
          <TextPingFang style={styles.name}>一图</TextPingFang>
          <Text style={styles.slogan}>LIBRARY</Text>
          <View style={styles.border} />
        </View>
        <View style={styles.names}>
          <Text style={styles.name}>Back-End:Airing</Text>
          <Text style={styles.name}>UI Design:Albert Leung</Text>
          <Text style={styles.name}>IOS APP:YiFan Wang</Text>
          <View>
            <TouchableOpacity
              style={styles.contact}
              onPress={() => {
                this.props.navigator.push({
                  component: AboutUsWebPage
                })
              }}
            >
              <Text style={styles.contact_font}>联系我们</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.version}>Verison1.0.2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center'
  },
  bg: {
    width: WIDTH
  },
  opacity0: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  logo: {
    marginTop: -126
  },
  text: {
    alignItems: 'center',
    marginTop: 18 * HEIGHT / 667
  },
  name: {
    color: '#666666',
    fontSize: 24
  },
  slogan: {
    fontSize: 64,
    color: 'rgb(250,250,250)'
  },
  border: {
    width: 2,
    height: 74 / 667 * HEIGHT,
    backgroundColor: '#999999',
    marginTop: -74 / 667 * HEIGHT
  },
  names: {
    marginTop: 32 * HEIGHT / 667,
    alignItems: 'center'
  },
  name: {
    color: '#999999',
    fontSize: 14,
    marginBottom: 4 / 667
  },
  version: {
    position: 'absolute',
    bottom: 5,
    color: '#999999',
    fontSize: 14
  },
  contact: {
    width: INNERWIDTH,
    height: 44 * HEIGHT / 667,
    marginTop: 20 * HEIGHT / 667,
    alignItems: 'center'
  },
  contact_font: {
    textDecorationLine: 'underline'
  }
})
