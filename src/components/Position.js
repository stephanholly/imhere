import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet} from 'react-native'

class SwichExample extends Component {
   state = {
      initialPosition: 'unknown',
      coords: [],
      locations: []
   }
   watchID: ?number = null;
   componentDidMount = () => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const initialPosition = JSON.stringify(position);
            this.setState({ initialPosition });
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         const coords = JSON.stringify([position.coords.latitude, position.coords.longitude]);
         this.setState({ coords });
      });
   }
   componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Current position:
            </Text>
            <Text>
              ({this.state.coords})
            </Text>
         </View>
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   boldText: {
      fontSize: 30,
      color: 'red',
   }
})
