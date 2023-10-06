
import './App.css';

function App() {
  const styles = {
    textAlign: 'center',
    color:'green',
  };
  return (
    <div style={styles}>

      <h1 >TRAINS SCHEDULE</h1>
      <table border='1'> 
    <tr>
      <th>SNO</th>
      <th>Train name</th>
      <th>timing</th>
      <th>capacity</th>
      <th>Platform</th>
      <th>Detination</th>
    </tr>
    <tr>
      <td>1</td>
      <td>CHENNAI express</td>
      <td>6 am </td>
      <td>500</td>
      <td>10 A</td>
      <td>Chennai</td>
    </tr>
    <tr>
      <td>2</td>
      <td>MUMBAI EXPRESS</td>
      <td>8 am</td>
      <td>450</td>
      <td>11 B</td>
      <td>Bangalore</td>
    </tr>
    <tr>
      <td>3</td>
      <td>BANGALORE EXPRESS</td>
      <td>10 am</td>
      <td>700</td>
      <td>14 C</td>
      <td>Mumbai</td>
    </tr>
    </table>
 
    </div>
  );
};

export default App;
