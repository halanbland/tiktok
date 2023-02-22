import HomePage from '../page/Home';
import Following from '../page/Following';
import Profile from '../page/Profile';
import Upload from '../page/Upload';
import Search from '../page/Search';

// Layouts
import { HeaderOnly } from '../component/Layout';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/@/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
