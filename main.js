import './node_modules/ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';
import {OSM} from 'ol/source';

const los_angeles = new Feature({
  geometry: new Point(fromLonLat([-118.241592, 34.054622])),
});

los_angeles.setStyle(
  new Style({
    image: new Icon({
      scale: 0.02,
      src: 'data/black-circle.png',
    }),
  })
);
const vectorSource = new VectorSource({
  features: [los_angeles],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    }), vectorLayer],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([-120.660164, 35.300486]),
    zoom: 6,
  }),
});

