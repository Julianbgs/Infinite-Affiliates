import './base';
import './grid';
import './wrapper';
import './content';
import initHeader from './header';
import initFooter from './footer';

export default () => {
  initHeader();
  initFooter();
};
