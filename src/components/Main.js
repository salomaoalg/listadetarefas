import React, { Component } from 'react';
import './Main.css';

import { FaPlus } from 'react-icons/fa';

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

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action="#" className='form'>
          <input onChange={this.inputMudou}
           type="text"
           value={novatarefa} 
           />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}


