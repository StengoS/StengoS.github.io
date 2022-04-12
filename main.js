import './node_modules/ol/ol.css';
import Feature from './node_modules/ol/Feature';
import Map from './node_modules/ol/Map';
import Point from './node_modules/ol/geom/Point';
import TileJSON from './node_modules/ol/source/TileJSON';
import VectorSource from './node_modules/ol/source/Vector';
import View from './node_modules/ol/View';
import {Icon, Style} from './node_modules/ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from './node_modules/ol/layer';
import {fromLonLat} from './node_modules/ol/proj';
import {OSM} from './node_modules/ol/source';

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

