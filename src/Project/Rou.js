import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moviehome from './Moviehome';
import Seat from './Seat';
import Payment from './Payment'; // Import the Payment component

const Rou = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Moviehome />} />
        <Route path="/seats" element={<Seat />} />
        <Route path="/payment" element={<Payment />} /> {/* Add Payment route */}
      </Routes>
    </Router>
  );
};

export default Rou;
