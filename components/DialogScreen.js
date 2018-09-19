
import React,{Component} from 'react';
import { View } from "react-native";


export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [],
          shoWdialog: false,
          cont : 1
        };
        this.shoWdialogs = this.shoWdialogs.bind(this);
      }
      shoWdialogs()
      {
        if(this.state.shoWdialog)
        {
          this.setState(
            {
              shoWdialog : false
            }
          )
        }else
        {
          this.setState(
            {
              shoWdialog : true
            }
          )
        }
      }
 

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Dialog isVisible = {this.shoWdialogs} in = {this.sendInput}/>
      </View>
    );
  }
}