import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novatarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this);
  }



  inputMudou(e) {
    this.setState({
      novatarefa: e.target.value,
    });
  }

  render() {
    const { novatarefa } = this.state;
    //alert(novatarefa);
    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input onChange={this.inputMudou} type="text" />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}


