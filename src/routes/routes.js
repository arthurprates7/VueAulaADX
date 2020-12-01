import Home from '../pages/Home'
import ListStudents from '../components/ListStudents'
import NotFound from '../pages/NotFound'
import RegisterStudent from '../components/RegisterStudent'
import EditStudent from '../components/EditStudent'


export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/students',
        component: ListStudents,
    },
    {
        path: '/new',
        component: RegisterStudent
    },
    {
        
        path: '/student/edit/:id',
        component: EditStudent
    },
    {
        path: '*',
        component: NotFound
    }
]