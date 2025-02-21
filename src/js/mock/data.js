import house1 from '@assets/images/houses/house-1.jpeg';
import house2 from '@assets/images/houses/house-2.jpeg';
import house3 from '@assets/images/houses/house-3.jpeg';

import plan1 from '@assets/images/houses/plans/plan-1.png';
import plan2 from '@assets/images/houses/plans/plan-2.jpg';
import plan3 from '@assets/images/houses/plans/plan-3.jpg';
import plan4 from '@assets/images/houses/plans/plan-4.png';
import plan5 from '@assets/images/houses/plans/plan-5.jpg';
import plan6 from '@assets/images/houses/plans/plan-6.jpg';
import plan7 from '@assets/images/houses/plans/plan-7.png';

export const houseImages = {
    house1,
    house2,
    house3
};

export const planImages = {
    plan1,
    plan2,
    plan3,
    plan4,
    plan5,
    plan6,
    plan7
};

export const slidesData = [
    {
        id: 1,
        time: {
            value: '20',
            unit: 'мин',
            from: 'от МКАД',
            route: 'по Симферопольскому шоссе'
        },
        images: [house1]
    },
    {
        id: 2,
        time: {
            value: '15',
            unit: 'мин',
            from: 'от метро',
            route: 'по Новорижскому шоссе'
        },
        images: [house2]
    },
    {
        id: 3,
        time: {
            value: '25',
            unit: 'мин',
            from: 'от центра',
            route: 'по Киевскому шоссе'
        },
        images: [house3]
    },
    {
        id: 4,
        time: {
            value: '30',
            unit: 'мин',
            from: 'от МКАД',
            route: 'по Ярославскому шоссе'
        },
        images: [house2]
    },
    {
        id: 5,
        time: {
            value: '18',
            unit: 'мин',
            from: 'от метро',
            route: 'по Дмитровскому шоссе'
        },
        images: [house3]
    },
    {
        id: 6,
        time: {
            value: '22',
            unit: 'мин',
            from: 'от центра',
            route: 'по Волоколамскому шоссе'
        },
        images: [house1]
    },
    {
        id: 7,
        time: {
            value: '28',
            unit: 'мин',
            from: 'от МКАД',
            route: 'по Калужскому шоссе'
        },
        images: [house2]
    },
    {
        id: 8,
        time: {
            value: '17',
            unit: 'мин',
            from: 'от метро',
            route: 'по Рублево-Успенскому шоссе'
        },
        images: [house1]
    }
]

export const projectsData = [
    {
        square: "185 м²",
        title: "«Шамони»",
        image: house1,
        plans: [plan1, plan2],
        features: [
            { "number": "2", "text": "этажа" },
            { "number": "4", "text": "спальни" },
            { "number": "3", "text": "санузла" },
            { "number": "2", "text": "балкона" },
            { "number": "1", "text": "крыльцо-терраса" }
        ]
    },
    {
        square: "155 м²",
        title: "«Анси»",
        image: house2,
        plans: [plan3, plan4],
        features: [
            { "number": "1", "text": "этаж" },
            { "number": "3", "text": "спальни" },
            { "number": "2", "text": "санузла" },
            { "number": "1", "text": "балкона" },
            { "number": "1", "text": "крыльцо-терраса" }
        ]
    },
    {
        square: "255 м²",
        title: "«Монблан»",
        image: house3,
        plans: [plan7, plan5],
        features: [
            { "number": "3", "text": "этажа" },
            { "number": "6", "text": "спальни" },
            { "number": "4", "text": "санузла" },
            { "number": "2", "text": "крыльцо-терраса" }
        ]
    },
    {
        square: "190 м²",
        title: "«Межев»",
        image: house1,
        plans: [plan4, plan6],
        features: [
            { "number": "2", "text": "этажа" },
            { "number": "5", "text": "спальни" },
            { "number": "2", "text": "санузла" },
            { "number": "1", "text": "балкона" },
            { "number": "1", "text": "крыльцо-терраса" }
        ]
    }
];
