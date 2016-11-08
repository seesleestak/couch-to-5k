const plan = [
    {
        dayId: 0,
        week: 1,
        day: 1,
        description: "Five minute warmup walk. Alternate 60 seconds of jogging with 90 seconds of walking for a total of 20 minutes.",
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
        dayId: 1,
        week: 1,
        day: 2,
        description: "Five minute warmup walk. Alternate 60 seconds of jogging with 90 seconds of walking for a total of 20 minutes.",
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
        dayId: 2,
        week: 1,
        day: 3,
        description: "Five minute warmup walk. Alternate 60 seconds of jogging with 90 seconds of walking for a total of 20 minutes.",
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
        dayId: 3,
        week: 2,
        day: 1,
        description: "Five minute warmup walk. Alternate 90 seconds of jogging with 60 seconds of walking for a total of 20 minutes.",
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
        dayId: 4,
        week: 2,
        day: 2,
        description: "Five minute warmup walk. Alternate 90 seconds of jogging with 60 seconds of walking for a total of 20 minutes.",
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
        dayId: 5,
        week: 2,
        day: 3,
        description: "Five minute warmup walk. Alternate 90 seconds of jogging with 60 seconds of walking for a total of 20 minutes".,
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
        dayId: 6,
        week: 3,
        day: 1,
        description: "Five minute warmup walk. Two rounds of 90 seconds jogging, 90 seconds walking, 3 minutes jogging, and 3 minutes walking.",
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
        dayId: 7,
        week: 3,
        day: 2,
        description: "Five minute warmup walk. Two rounds of 90 seconds jogging, 90 seconds walking, 3 minutes jogging, and 3 minutes walking.",
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
        dayId: 8,
        week: 3,
        day: 3,
        description: "Five minute warmup walk. Two rounds of 90 seconds jogging, 90 seconds walking, 3 minutes jogging, and 3 minutes walking.",
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
        dayId: 9,
        week: 4,
        day: 1,
        description: "Five minute warmup walk. Jog 3 minutes, walk 90 seconds, jog 5 minutes, walk 2 1/2 minutes, jog 3 minutes, walk 90 seconds, and jog 5 minutes.",
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
        dayId: 10,
        week: 4,
        day: 2,
        description: "Five minute warmup walk. Jog 3 minutes, walk 90 seconds, jog 5 minutes, walk 2 1/2 minutes, jog 3 minutes, walk 90 seconds, and jog 5 minutes.",
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
        dayId: 11,
        week: 4,
        day: 3,
        description: "Five minute warmup walk. Jog 3 minutes, walk 90 seconds, jog 5 minutes, walk 2 1/2 minutes, jog 3 minutes, walk 90 seconds, and jog 5 minutes.",
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
        dayId: 12,
        week: 5,
        day: 1,
        description: "Five minute warmup walk. Jog 5 minutes, walk 3 minutes, jog 5 minutes, walk 3 minutes, and jog 5 minutes.",
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
        dayId: 13,
        week: 5,
        day: 2,
        description: "Five minute warmup walk. Jog 8 minutes, walk 5 minutes, and jog 8 minutes."
        secSegment: [
            warmup: 300,
            run: 480,
            walk: 300,
            run: 480
        ]
    },
    {
        dayId: 14,
        week: 5,
        day: 3,
        description: "Five minute warmup walk. Jog 20 minutes.",
        secSegment: [
            warmup: 300,
            run: 1200
        ]
    },
    {
        dayId: 15,
        week: 6,
        day: 1,
        description: "Five minute warmup walk. Jog 5 minutes, walk 3 minutes, jog 8 minutes, walk 3 minutes, and jog 5 minutes.",
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
        dayId: 16,
        week: 6,
        day: 2,
        description: "Five minute warmup walk. Jog 10 minutes, walk 3 minutes, and jog 10 minutes.",
        secSegment: [
            warmup: 300,
            run: 600,
            walk: 180,
            run: 600
        ]
    },
    {
        dayId: 17,
        week: 6,
        day: 3,
        description: "Five minute warmup walk. Jog 22 minutes.",
        secSegment: [
            warmup: 300,
            run: 1320
        ]
    },
    {
        dayId: 18,
        week: 7,
        day: 1,
        description: "Five minutes warmup walk. Jog 25 minutes.",
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        dayId: 19,
        week: 7,
        day: 2,
        description: "Five minutes warmup walk. Jog 25 minutes.",
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        dayId: 20,
        week: 7,
        day: 3,
        description: "Five minutes warmup walk. Jog 25 minutes.",
        secSegment: [
            warmup: 300,
            run: 1500
        ]
    },
    {
        dayId: 21,
        week: 8,
        day: 1,
        description: "Five minutes warmup walk. Jog 28 minutes.",
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        dayId: 22,
        week: 8,
        day: 2,
        description: "Five minutes warmup walk. Jog 28 minutes.",
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        dayId: 23,
        week: 8,
        day: 3,
        description: "Five minutes warmup walk. Jog 28 minutes.",
        secSegment: [
            warmup: 300,
            run: 1680
        ]
    },
    {
        dayId: 24,
        week: 9,
        day: 1,
        description: "Five minutes warmup walk. Jog 30 minutes.",
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    },
    {
        dayId: 25,
        week: 9,
        day: 2,
        description: "Five minutes warmup walk. Jog 30 minutes.",
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    },
    {
        dayId: 26,
        week: 9,
        day: 3,
        description: "Five minutes warmup walk. Jog 30 minutes.",
        secSegment: [
            warmup: 300,
            run: 1800
        ]
    }
]
