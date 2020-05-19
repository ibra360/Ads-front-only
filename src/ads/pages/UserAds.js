import React from 'react';
import { useParams } from 'react-router-dom';

import AdList from '../components/AdList';

const DUMMY_ADS = [{
    id: 'p1',
    title: '3 piece Coat',
    description: 'Lunda ka coat nhy hai bhai ye Branded hai',
    imageUrl: 'https://i.pinimg.com/originals/7f/ab/90/7fab909dfe8cf80d86fc7013ccb35d9b.jpg',
    address: "Shadman Side aajao dasti",
    creator: "u1"
},
{
    id: 'p2',
    title: '3 piece Coat',
    description: 'Lunda ka coat nhy hai bhai ye Branded hai',
    imageUrl: 'https://i.pinimg.com/originals/7f/ab/90/7fab909dfe8cf80d86fc7013ccb35d9b.jpg',
    address: "Shadman Side aajao dasti",
    creator: "u2"
}
]

const UserAds = () => {
    const userId = useParams().userId;
    const LoadedAds = DUMMY_ADS.filter(ad => ad.creator === userId)
    return (
        <AdList items={LoadedAds} />
    )
};

export default UserAds;