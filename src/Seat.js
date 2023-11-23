import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from './Redux/actions';
import './seat.css';
import Loader from './Loader';


 const { addSelectedSeat, setPosts } = actions;

const Seat = () => {

  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([]);
  const seatreback = useSelector((state) => state.selectedSeats);
  // const seatpost = useSelector((state) => state.posts)
  // console.log("useSelector=>",posts)

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log("selectedSeats=>",selectedSeats.length)
  // console.log("selectedSeatsadases",selectedSeats)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
    setLoading(false)

      });
  }, [dispatch]);


  const posts = useSelector((state) => state.posts);
  console.log("posts==>",posts)

  const numRows = 8;
  const seatsPerRow = 10;

  const seatTypes = {
    silver: { label: 'S', price: 100 },
    gold: { label: 'G', price: 200 },
    platinum: { label: 'P', price: 300 },
  };

  // const storedData = localStorage.getItem('bookingData') || '[]';
  // const parsedData = JSON.parse(storedData);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    if (selectedSeats.some((seat) => seat.seatId === seatId)) {
      // Remove the seat from the selectedSeats state
      // console.log('dldldl')
      setSelectedSeats(selectedSeats.filter((seat) => seat.seatId !== seatId));
    } else {
      const seatType = row > 7 ? 'platinum' : row >= 5 ? 'gold' : 'silver';
      // Add the seat to the selectedSeats state
      // console.log("seatType",seatType, selectedSeats, { row, seat, price: seatTypes[seatType].price, seatId } )
      setSelectedSeats([...selectedSeats, { row, seat, price: seatTypes[seatType].price, seatId }]);
    }
  };


  const generateSeats = () => {
    const seats = [];
    for (let row = 1; row <= numRows; row++) {
      let seatType = 'silver';
      if (row >= 5 && row <= 7) {
        seatType = 'gold';
      } else if (row > 7) {
        seatType = 'platinum';
      }

      const numSeats = seatsPerRow;
      const rowSeats = [];
      for (let seat = 1; seat <= numSeats; seat++) {
        const seatId = `${row}-${seat}`;
        const selectedSeat = selectedSeats.find(seatObj => seatObj.seatId === seatId);
        const isChecked = selectedSeat !== undefined;
        // console.log("seat=>",seat)
        const isDisabled = seatreback.find((seat) => seat.seatId === seatId);
        // console.log("seatId=>",seatreback.seat)
        // console.log("isDisabled==>",isDisabled)

        rowSeats.push(
          <label key={seat}>
            <input
              type="checkbox"
              onChange={() => toggleSeat(row, seat)}
              checked={isChecked}
              disabled={isDisabled}
            />
            <span className={`seat ${seatType}`}>
              {seatTypes[seatType].label}
            </span>
          </label>
        );
      }
      seats.push(
        <div className="row" key={row}>
          {rowSeats}
        </div>
      );
    }
    return seats;
  };

  const renderSelectedPost = () => {
    if (selectedPost) {
      return (
        <div className="api-info">
          <h2 className='deco'>Selected Post Details</h2>
          <div className='deco'>ID:= {selectedPost.id}</div>
          <div>Title:== {selectedPost.title}</div>
          <div>Body:== {selectedPost.body}</div>
        </div>
      );
    }
    // return null;
  };

  const handlePostClick = (postId) => {
    // Set the selected post when a post is clicked
    setSelectedPost(posts.find((post) => post.id === postId));
  };



  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => {
      // console.log("seat==>",seat)

      // const [row] = seat.split('-');
      const seatType = seat.row > 7 ? 'platinum' : seat.row >= 5 ? 'gold' : 'silver';
      return total + seatTypes[seatType].price;
    }, 0);
  };

  const handleBookTickets = () => {
    // console.log("handleBookTickets",selectedSeats)
    // const lo = parsedData.selectedSeats || [];
    // console.log(lo,"lo")
    // const bookingData = {selectedSeats: selectedSeats.map((seat) => {
    //     // console.log(bookingData,"bookingData==>")
    //     // const [row, column] = seat.split('-');
    //     const seatType = seat.row  > 7 ? 'platinum' : seat.row >= 5 ? 'gold' : 'silver';
    //     console.log("selectedSeats==>",selectedSeats)
    //     // persistor.persist();
    //     return {
    //       row: Number(seat.row),
    //       column: Number(seat.column),
    //       price: seatTypes[seatType].price, 
    //     }; 
    //     }),
    // };
    dispatch(addSelectedSeat(selectedSeats));
    setSelectedSeats([]);
    

    
  

  };

  return (
    <div className="seatpage">
      <div className="movie-booking-app">
        <div className="screen" title="Movie Screen">
          Screen
        </div>
        <div className="seats" title="Seats">
          {generateSeats()}
        </div>
      </div>

      <div className="booking-info">
        <p>Selected Seats</p>
        <div className="join-seat">  <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>
              Row: {seat.row}, Column: {seat.column}--${seat.price}
            </li>
          ))}
        </ul>
        </div>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button onClick={handleBookTickets}>Book Tickets</button>
      </div>

      {loading ? <Loader/> : <div className='white'>
          {posts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post.id)} className='post-number'>{post.id}</div>
          ))}
        </div>}
        {renderSelectedPost()}
    </div>
  );
};

export default Seat;
