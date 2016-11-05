const plan = [
    {
        id: 0,
        week: 1,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90
        ]
    },
    {
        id: 1,
        week: 1,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90
        ]
    },
    {
        id: 2,
        week: 1,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90,
            run: 60,
            walk: 90
        ]
    },
    {
        id: 3,
        week: 2,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60
        ]
    },
    {
        id: 4,
        week: 2,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60
        ]
    },
    {
        id: 5,
        week: 2,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60,
            run: 90,
            walk: 60
        ]
    },
    {
        id: 6,
        week: 3,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180
        ]
    },
    {
        id: 7,
        week: 3,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180
        ]
    },
    {
        id: 8,
        week: 3,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180,
            run: 90,
            walk: 90,
            run: 180,
            walk: 180
        ]
    },
    {
        id: 9,
        week: 4,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 180,
            walk: 90,
            run: 300,
            walk: 150,
            run: 180,
            walk: 90,
            run: 300
        ]
    },
    {
        id: 10,
        week: 4,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 180,
            walk: 90,
            run: 300,
            walk: 150,
            run: 180,
            walk: 90,
            run: 300
        ]
    },
    {
        id: 11,
        week: 4,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 180,
            walk: 90,
            run: 300,
            walk: 150,
            run: 180,
            walk: 90,
            run: 300
        ]
    },
    {
        id: 12,
        week: 5,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 300,
            walk: 180,
            run: 300,
            walk: 180,
            run: 300
        ]
    },
    {
        id: 13,
        week: 5,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 480,
            walk: 300,
            run: 480
        ]
    },
    {
        id: 14,
        week: 5,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 1200
        ]
    },
    {
        id: 15,
        week: 6,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 300,
            walk: 180,
            run: 480,
            walk: 180,
            run: 300
        ]
    },
    {
        id: 16,
        week: 6,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 600,
            walk: 180,
            run: 600
        ]
    },
    {
        id: 17,
        week: 6,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 1320
        ]
    },
    {
        id: 18,
        week: 7,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        id: 19,
        week: 7,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        id: 20,
        week: 7,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        id: 21,
        week: 8,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        id: 22,
        week: 8,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        id: 23,
        week: 8,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        id: 24,
        week: 9,
        day: 1,
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    },
    {
        id: 25,
        week: 9,
        day: 2,
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    },
    {
        id: 26,
        week: 9,
        day: 3,
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    }
]
