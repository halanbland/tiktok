import HomePage from '../page/Home';
import Following from '../page/Following';
import Upload from '../page/Upload';
import Search from '../page/Search';
import { HeaderOnly } from '../component/Layout';
// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
