import React from 'react';

import SearchIcon from '../../assets/search.png';
import GPSIcon from '../../assets/gps.png';

import { history } from '../../lib/utils';

import {
  BoxContainer,
  Icon,
  SearchInput,
  LocationButton,
  LocationIcon,
} from './styles';

let autocomplete;

const SearchBox = () => {
  function onSelectedAddress() {
    const place = autocomplete.getPlace();
    history.push(`/products?lat=${place.geometry.location.lat()}&lng=${place.geometry.location.lng()}&address=${place.formatted_address}`);
  }

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

  const searchWithUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        history.push(`/products?lat=${position.coords.latitude}&lng=${position.coords.longitude}&address=Localização atual`);
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
