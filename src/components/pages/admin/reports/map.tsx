'use client'
import { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

interface MapLocation {
  location: string;
  school_count: number;
  location_type: 'province' | 'country';
}

interface MapProps {
  locations?: MapLocation[];
  selectedCountry?: string;
}

interface GeocodeResult {
  features: {
    center: [number, number];
    place_name: string;
    matching_place_name?: string;
    text: string;
  }[];
}

function Map({ locations = [], selectedCountry = "Rwanda" }: MapProps) {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? '';
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [lng, setLng] = useState(30.0619);
  const [lat, setLat] = useState(-1.9403);
  const [zoom, setZoom] = useState(6);
  
  const RWANDA_CENTER: [number, number] = [30.0619, -1.9403];
  const DEFAULT_ZOOM = 6;
  const RWANDA_ZOOM = 7;
  const MULTI_COUNTRY_ZOOM = 4;
  const MAX_ZOOM = 12;

  const clearMarkers = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  const createMarkerElement = (count: number) => {
    const el = document.createElement('div');
    el.className = 'relative';
    
    const content = document.createElement('div');
    content.style.backgroundColor = '#F15A22';
    content.className = `
      flex items-center justify-center
      min-w-12 min-h-12 
      rounded-full 
      text-white 
      font-bold 
      text-base
      border-2 
      border-white 
      shadow-[0_0_10px_rgba(0,0,0,0.3)]
      cursor-pointer
      transition-transform
      hover:scale-110
      z-50
    `;
    content.innerHTML = count.toString();
    
    const tooltip = document.createElement('div');
    tooltip.className = `
      absolute 
      bottom-full 
      left-1/2 
      -translate-x-1/2 
      mb-2 
      px-2 
      py-1 
      bg-black 
      bg-opacity-75 
      text-white 
      text-sm 
      rounded 
      whitespace-nowrap
      opacity-0
      transition-opacity
      pointer-events-none
    `;
    tooltip.innerHTML = `${count} schools`;
    
    content.onmouseenter = () => {
      tooltip.style.opacity = '1';
    };
    content.onmouseleave = () => {
      tooltip.style.opacity = '0';
    };
    
    el.appendChild(tooltip);
    el.appendChild(content);
    return el;
  };

  const getCountryCoordinates = async (country: string): Promise<[number, number] | null> => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(country)}.json?access_token=${mapboxgl.accessToken}&types=country&limit=1`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].center;
        return coordinates;
      }
      return null;
    } catch (error) {
      // console.error('Error fetching country coordinates:', error);
      return null;
    }
  };

  const fetchCoordinates = async (location: string, locationType: 'province' | 'country') => {
    try {
      const searchQuery = locationType === 'province' ? `${location}, Rwanda` : location;
      const type = locationType === 'province' ? 'region' : 'country';
      
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${mapboxgl.accessToken}&types=${type}`
      );
      const data: GeocodeResult = await response.json();
      
      let feature;
      if (locationType === 'province') {
        feature = data.features.find(f => {
          const matchingName = f.matching_place_name?.toLowerCase() || f.text.toLowerCase();
          return matchingName.includes(location.toLowerCase());
        });
      } else {
        feature = data.features[0];
      }

      return feature?.center;
    } catch (error) {
      return null;
    }
  };

  const panToCountry = async () => {
    if (!map.current || !selectedCountry) return;
    
    const coordinates = await getCountryCoordinates(selectedCountry);
    
    if (coordinates) {
      map.current.easeTo({
        center: coordinates,
        zoom: DEFAULT_ZOOM,
        duration: 1500
      });
    } else {
      map.current.easeTo({
        center: RWANDA_CENTER,
        zoom: DEFAULT_ZOOM,
        duration: 1500
      });
    }
  };

  const updateMap = async () => {
    if (!map.current) return;

    clearMarkers();

    if (!locations.length) {
      await panToCountry();
      return;
    }
    
    const isRwandaProvinces = locations.every(l => l.location_type === 'province');
    
    if (isRwandaProvinces) {
      map.current.easeTo({
        center: RWANDA_CENTER,
        zoom: RWANDA_ZOOM,
        duration: 1500
      });
    } else {
      map.current.easeTo({
        zoom: MULTI_COUNTRY_ZOOM,
        duration: 1500
      });
    }

    for (const location of locations) {
      const coordinates = await fetchCoordinates(location.location, location.location_type);
      if (coordinates) {
        const marker = new mapboxgl.Marker({
          element: createMarkerElement(location.school_count),
          anchor: 'bottom',
        })
          .setLngLat(coordinates)
          .addTo(map.current);
        
        markersRef.current.push(marker);
      }
    }

    if (!isRwandaProvinces && markersRef.current.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      markersRef.current.forEach(marker => {
        bounds.extend(marker.getLngLat());
      });
      map.current.fitBounds(bounds, { 
        padding: 50,
        maxZoom: MAX_ZOOM
      });
    }
  };

  useEffect(() => {
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: RWANDA_CENTER,
      zoom: DEFAULT_ZOOM,
      maxZoom: MAX_ZOOM
    });

    map.current.on('move', () => {
      if (!map.current) return;
      setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current.getZoom().toFixed(2)));
    });
  }, []);

  // Separate useEffect for handling country changes
  useEffect(() => {
    if (map.current && selectedCountry && !locations.length) {
      // console.log('Country changed:', selectedCountry);
      panToCountry();
    }
  }, [selectedCountry]);

  // Separate useEffect for handling location changes
  useEffect(() => {
    if (map.current) {
      // console.log('Locations changed:', locations);
      updateMap();
    }
  }, [locations]);

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="h-full rounded-lg">
        <div className="absolute top-2 right-2 p-1 rounded bg-[rgba(0,0,0,.7)] z-10 text-gray-200 text-sm">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
}

export default Map;