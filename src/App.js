import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components'

import { fetchData } from './api/index'

class App extends React.Component{

  state = {
    data : {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(data)

    this.setState( {data:fetchedData})
  }

  render(){
    const { data } = this.state
    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
