import './index.sass';
import './index.pug';
import initBanner from './banner/index';
import initServices from './services/index';
import initAbout from './about/index';
import initCallback from './callback/index';

export default () => {
  initBanner();
  initServices();
  initAbout();
  initCallback();
};
