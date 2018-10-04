import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data';
import Square from './BoardComponents/Square.js';
import RowB from './BoardComponents/RowB.js';
export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row1: [0,0,0,0,0,0],
      row2: [0,0,0,0,0,0],
      row3: [0,0,0,0,0,0],
      row4: [0,0,0,0,0,0],
      row5: [0,0,0,0,0,0],
      row6: [0,0,0,0,0,0],
      row7: [0,0,0,0,0,0],
      row8: [0,0,0,0,0,0],
      player: 1,
      winner: ""
    };
    this.setMove1=this.setMove1.bind(this);
    this.setMove2=this.setMove2.bind(this);
    this.setMove3=this.setMove3.bind(this);
    this.setMove4=this.setMove4.bind(this);
    this.setMove5=this.setMove5.bind(this);
    this.setMove6=this.setMove6.bind(this);
    this.setMove7=this.setMove7.bind(this);
    this.setPlayer=this.setPlayer.bind(this);
    this.evaluateV=this.evaluateV.bind(this);
  }
  evaluateV(){
    let m =[7];
    m[0]=this.state.row1;
    m[1]=this.state.row2;
    m[2]=this.state.row3;
    m[3]=this.state.row4;
    m[4]=this.state.row5;
    m[5]=this.state.row6;
    m[6]=this.state.row7;
    for (var i = 0; i < m.length; i++) {
      let x = m[i];
      let p1=0;
      let p2=0;
      let last=0;
      for (var j = 0; j < x.length; j++) {
        console.log("p1: "+p1+" p2: "+p2+" last: "+last);
        if(last===0 && x[j]!=0){
          last=x[j];
          if(x[j]===1){
            p1=1;
            p2=0;
          }
          else {
            p2=1;
            p1=0;
          }
        }
        else if(last === 1){
          if(x[j]===1){
              p1++;
              p2=0;
          }
          else if(x[j]===2){
            p1=0;
            last=2;
            p2++;
          }
          else {
            p1=0;
            p2=0;
            last=0;
          }
        }
        else if(last === 2){
          if(x[j]===2){
            p2++;
            p1=0;
          }
          else if(x[j]===1){
            p2=0;
            p1++;
            last=1;
          }
          else {
            p1=0;
            p2=0;
            last=0;
          }
        }
        if(p1===4 || p2===4){
          if(p1===4){
            alert("Gana el jugador P1");
            this.setState({winner: 1});
          }
          else {
            alert("Gana el jugador P2");
            this.setState({winner: 2});
          }
        }
      }
    }
  }
//-------------------------------------------------------------------------------------------------------------
  setPlayer(){
    let player = this.state.player;
    let nuevo;
    console.log(player);
    if(player===1){
      nuevo=2;
    }
    else{
      nuevo=1;
    }
    console.log("CAMBIANDO JUGADOR");
    this.setState({player:nuevo},()=>{this.evaluateV();console.log(player+" JUGADOR CAMBIADO A "+this.state.player);});
  };

  //***************************************************************************************************
  setMove1(row, winner){
    let player=this.state.player;
    if(winner!=""){
      this.setState({row1: row, winner: winner});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row1: row});
    }
    this.setPlayer();
  };
  setMove2(row, winner){
    let player=this.state.player;

    if(winner!=""){
      this.setState({row2: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row2: row},()=>{this.setPlayer();});
    }

  };
  setMove3(row, winner){
    let player=this.state.player;

    if(winner!=""){
      this.setState({row3: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row3: row},()=>{this.setPlayer();});
    }

  };
  setMove4(row, winner){
    let player=this.state.player;

    if(winner!=""){
      this.setState({row4: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row4: row},()=>{this.setPlayer();});
    }

  };
  setMove5(row, winner){
    let player=this.state.player;

    if(winner!=""){
      this.setState({row5: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row5: row},()=>{this.setPlayer();});
    }

  };
  setMove6(row, winner){
    let player=this.state.player;
    if(winner!=""){
      this.setState({row6: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row6: row},()=>{this.setPlayer();});
    }
  };
  setMove7(row, winner){
    let player=this.state.player;
    if(winner!=""){
      this.setState({row7: row, winner: winner},()=>{this.setPlayer();});
      alert("Gana el jugador P"+player);
    }
    else {
      this.setState({row7: row},()=>{this.setPlayer();});
    }
  };
  win(){
    let winner =this.state.winner;
  }
  titulo(){
    let player = this.state.player;
    if(player!=0){
      return (<h2>{"Jugador "+player+" en turno"}</h2>);
    }
    else {
      return (<h2>{"Iniciando partida"}</h2>);
    }
  }
    //***************************************************************************************************
  //----------------------------------------------------------------------------------------------------------------

  render(){
    let winner= this.state.winner;
    let player= this.state.player;
    console.log(player+" ENVIANDO JUGADOR "+player);
    return(
      <div className="block">
        <h2>Tablero de juego de 4 en linea</h2>
        {this.titulo()}
        <div className="container">
          <RowB setMove={this.setMove1} player={player}/>
          <RowB setMove={this.setMove2} player={player}/>
          <RowB setMove={this.setMove3} player={player}/>
          <RowB setMove={this.setMove4} player={player}/>
          <RowB setMove={this.setMove5} player={player}/>
          <RowB setMove={this.setMove6} player={player}/>
          <RowB setMove={this.setMove7} player={player}/>
        </div>
      </div>
    );
  }
}
