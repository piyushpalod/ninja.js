import React from 'react'
import DataTable from './components/DataTable'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <DataTable rows={this.props.rows} locale="da" rowsPerPage={5} />
      </div>
    )
  }
}

export default App
