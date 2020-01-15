import React from 'react';
import { Helmet } from 'react-helmet';

import SearchIcon from '../../assets/search.png';
import GPSIcon from '../../assets/gps.png';

import {
  BoxContainer,
  Icon,
  SearchInput,
  LocationButton,
  LocationIcon,
} from './styles';

let autocomplete;

const SearchBox = (props) => {
  function onSelectedAddress() {
    const place = autocomplete.getPlace();
    props.addressChanged(
      place.geometry.location.lat(),
      place.geometry.location.lng(),
      place.formatted_address,
    );
  }

  const searchWithUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        props.addressChanged(
          position.coords.latitude,
          position.coords.longitude,
          'Localização atual',
        );
      });
    }
  };

  window.initAutocomplete = () => {
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
    );
    autocomplete.addListener('place_changed', onSelectedAddress);
  };

  const onInputFocus = () => {
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
      <Helmet>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBa3wgNvOQdc6JblZfxtKhE99JFhI_cA5c&libraries=places&callback=initAutocomplete"
          async
          defer
        />
      </Helmet>
      <BoxContainer>
        <Icon src={SearchIcon} />
        <SearchInput
          id="autocomplete"
          type="search"
          placeholder="Pesquisar endereço..."
          onFocus={onInputFocus}
        />
      </BoxContainer>
      {navigator.geolocation && (
        <LocationButton onClick={searchWithUserLocation}>
          <LocationIcon src={GPSIcon} />
          <p>Usar localização</p>
        </LocationButton>
      )}
    </>
  );
};

export default SearchBox;
