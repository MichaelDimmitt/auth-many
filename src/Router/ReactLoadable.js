import Loadable from 'react-loadable';
import Loading from '../Component/Loading';

export const Error = Loadable({
    loader: () => import('../Component/Error'),
    loading: Loading,
});

export const MeetupAuth = Loadable({
    loader: () => import('../Component/MeetupAuth'),
    loading: Loading,
});

export const FourSquareAuth = Loadable({
    loader: () => import('../Component/FourSquareAuth'),
    loading: Loading,
})
// export const Meetups = Loadable({
//     loader: () => import('../Component/Meetups'),
//     loading: Loading,
// });
// export const MeetupDetails = Loadable({
//     loader: () => import('../Component/MeetupDetails'),
//     loading: Loading,
// });
// export const RsvpComponent = Loadable({
//     loader: () => import('../Component/RsvpComponent'),
//     loading: Loading,
// });