import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from "./AccountsUIWrapper";
import {Records} from '../api/records.js';
import PropTypes from "prop-types";
// App component - represents the whole app
export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      best:"",
      rec:""
    };
    this.renderList=this.renderList.bind(this);
  }
/*  shouldComponentUpdate()
  {
    let records = this.state.rec;
    if(records.length>=1)
    {
      Meteor.call("records.getGanadores", (err, records)=>{
        if(records)
        {
          this.setState({rec:records});
        }
      });
    }
    else {
    console.log("Ya hay lista de records en el should update");
    this.render();
    }
  }*/
    renderList(list)
    {
      console.log(list);
      console.log(" records en el props ");
      console.log(this.props.records);
    let records = list;
      if(records)
      {
        console.log("dentro del map: "+records);
        let list = records.map((rec, i)=>{
          console.log("dentro del map: "+i);
          console.log(rec);
          return(
            <tr>
              <th scope="row">{rec.winner}</th>
              <td>{rec.player1}</td>
              <td>{rec.player2}</td>
            </tr>)
        });
        return (
          <div className="tdiv">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Ganador</th>
                  <th scope="col">Jugador 1</th>
                  <th scope="col">Jugador 2</th>
                  </tr>
              </thead>
              <tbody>
                {list}
              </tbody>
            </table>
          </div>
        );
      }
      else
      {
        return (
            <div className="tdiv">
              <table>
                <tr>
                  <th>Ganador</th>
                  <th>Jugador 1</th>
                  <th>Jugador 2</th>
                  </tr>
              </table>
            </div>
        );
      }
  }
  render() {
    let dataAvaible = true;
    //let records = Meteor.call("records.getGanadores");
    let records =this.props.records
    console.log("en el LeaderBoard");
    console.log(records);
    console.log("en el LeaderBoard");
    if(records === undefined)
    {
      dataAvaible= false;
    }
    console.log(records);
    console.log("records find");
    //console.log(Records.find({}).fetch());
    console.log("records find");

    let recordAvaible = (dataAvaible && records);
    return (
      <div>
      <h2>Lista de Partidas Jugadas</h2>
    {recordAvaible ? this.renderList(records): null}
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  records:PropTypes.array.isRequired,
};
/*LeaderBoard.propTypes = {
  records:PropTypes.array.isRequired,
};
export default withTracker(() => {
  return {
    records:Records.find({}).fetch(),
  };
})(LeaderBoard);

lines to delete
*/
