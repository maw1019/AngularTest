import { Restaurant,RestaurantMenu } from './restaurant';

export const Restaurants: Restaurant[] = [
  { id: 1, address: '台北市信義區莊敬路359號', name: '悟饕池上飯包', telphone: '(02)27292726' },
  { id: 2, address: '台北市信義區吳興街281巷1號', name: '邱記涼麵', telphone: '(02)27220354' },
  { id: 3, address: '台北市信義區吳興街269巷24號', name: '越泰軒', telphone: '(02)27209395'  }


];


export const Menus: RestaurantMenu[] = [
  { id: 1, menu:[{price:60,name:'魯肉便當'},{price:90,name:'雞腿便當'},{price:85,name:'排骨便當'},{price:80,name:'烤肉便當'}]},
  { id: 2, menu:[{price:35,name:'涼麵小'},{price:40,name:'涼麵中'},{price:45,name:'涼麵大'},{price:20,name:'味增湯'}]},
  { id: 3, menu:[{price:130,name:'生牛河粉'},{price:130,name:'酸辣海鮮米線'},{price:90,name:'南洋咖哩飯'},{price:50,name:'越式春捲'}]}
];