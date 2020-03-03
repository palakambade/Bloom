import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
 //Calendar component to select Date 
class Calen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      nextDate: null, 
      deliveryDate: null
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 30); //Logic to get the next expected date for your next mentruation cycle
    let deliver = new Date(date);
    deliver.setDate(deliver.getDate() + 23); //logic to get the date of the sanitary napkins

    
     
    this.setState({
      selectedStartDate: date,
      nextDate: newDate,
      deliveryDate: deliver
      
    });
  }

  render() {
    const { selectedStartDate, nextDate, deliveryDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const nextCycle = nextDate ? nextDate.toString() : '';
    const deliverBy = deliveryDate ? deliveryDate.toString() : '';


    
    return (
      
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          
          {startDate?<Text><Text style={{fontWeight: "bold", fontFamily: "monospace"}}> Selected Date: </Text>{ startDate }</Text>:<Text></Text>}
          {startDate? <Text><Text style={{fontWeight: "bold", fontFamily: "monospace"}}> Next Expected Cycle: </Text>{ nextCycle }</Text>:<Text></Text>}
          {startDate?<Text><Text style={{fontWeight: "bold", fontFamily:"monospace"}}> Package will be delivered on: </Text>{ deliverBy }</Text>:<Text></Text>}

          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8a9c9',
    //marginTop: 100,
  },
});

export default Calen;