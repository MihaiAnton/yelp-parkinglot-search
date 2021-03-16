import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import ParkingLotCard from '../../../components/ParkingLot/ParkingLot'

const SearchScreen = () => {
  const [location, setLocation] = useState('')
  const [parkingLots, setParkingLots] = useState([])

  const fetchYelpData = (location) => {
    const token =
      'Iac6dYa4M4gQnlohD3Kxw-Id1-2khnUrqQf9UuqmUNWwEaYl0ZXfVRNWIP7j6QwLMHamlQbvbpV7ugmY-esx3lzWGxS8496Rxybi_B_cFpQ7egEcctj6sD_D129QYHYx'

    fetch(
      `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
        location
      )}&categories=parking`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data.hasOwnProperty('businesses') &&
          Array.isArray(data.businesses)
        ) {
          setParkingLots(data.businesses)
        } else {
          setParkingLots([])
        }
      })
      .catch((err) => {
        setParkingLots([])
      })
  }

  return (
    <div>
      <h2>Search parking lots</h2>
      <TextField
        id="standard-basic"
        label="Standard"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        disabled={location.length === 0}
        onClick={() => fetchYelpData(location)}
      >
        Search
      </Button>

      <Grid container direction="column" justify="center" alignItems="center">
        {parkingLots.map((lot) => {
          return (
            <ParkingLotCard
              address={lot.location.display_address}
              name={lot.name}
              img={lot.image_url}
              rating={lot.rating}
              reviewCount={lot.review_count}
              link={lot.url}
            />
          )
        })}
      </Grid>
    </div>
  )
}

export default SearchScreen
