import login from '../components/login';
import NewProduct from '../components/NewProduct';
import ProductDetails from '../components/ProductDetails';
import ProductsList from '../components/ProductsList';

const routes = [
    { path: '/', component: login },
    { path: '/productslist', component: ProductsList },
    { path: '/new', component: NewProduct },
    { path: '/modify', component: NewProduct },
    { path: '/productdetail', component: ProductDetails }
];

const router = new VueRouter({
    routes,
});


export default router;

