import React from 'react';

import SearchIcon from '../../assets/search.png';
import { BoxContainer, Icon, SearchInput } from './styles';

let autocomplete;

const SearchBox = () => {
  function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    console.log(place);
    console.log(place.geometry.location.lat());
  }

  window.initAutocomplete = () => {
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
    );
    autocomplete.addListener('place_changed', fillInAddress);
  };

  const geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  };

  return (
    <>
      <BoxContainer>
        <Icon src={SearchIcon} />
        <SearchInput
          id="autocomplete"
          type="search"
          placeholder="Pesquisar endereço..."
          onFocus={geolocate}
        />
      </BoxContainer>
    </>
  );
};

export default SearchBox;
