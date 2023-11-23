import React from 'react'
import "./Nav.css"
import Seat from './Seat'
// import Counter from './Counter'

const Main = () => {
    return (
        <div className='root'>

            

            <div className='page2'>
                <div className='maintext'>
                    <h1>Fifty Shades Darker</h1>
                    <p>  It is the first installment in the Fifty Shades film series.
                        The story follows Anastasia Steele (Johnson), a college graduate who begins a
                        sadomasochistic relationship with young business magnate Christian Grey (Dornan).</p>
                </div>

                <div className='trailer' title='Watch trialer'>
                    <img src='./fifty-shades-darker.jpg' alt='aa' className='movie-triler'></img>
                    {/* <div className='playbtn'>
                    <a href='https://youtu.be/n6BVyk7hty8?si=57HX8I8Tccytm8sU'>
                    <img src='./play-removebg-preview.png' alt='4'></img> </a>
                    <p>Watch Trailer</p>
                </div> */}
                </div>
               
            </div>
          <Seat/>
        </div>
    )
}

export default Main