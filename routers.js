import AuctionList from './src/containers/AuctionList';
import AuctionDetail from './src/containers/AuctionDetail';
import EndedList from './src/containers/EndedList';

const routers = [
  {
    path: '/',
    exact: true,
    component: AuctionList
  },
  {
    path: '/auctionDetail/:id',
    exact: true,
    component: AuctionDetail
  },
  {
    path: '/endedList',
    exact: true,
    component: EndedList
  }
];

export default routers;
