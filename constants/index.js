const constants = {
    VALIDATION: {
        NAME: {
            REQUIRE: true,
            MAX: 100,
            MIN: 0,
        },
        IMAGE: {
            MAX: 2048 * 2048,
        },
        EMAIL: {
            REQUIRE: true,
            MAX: 100,
            MIN: 0,
        },
        DOB: {
            REQUIRE: true,
        },
        PH: {
            REQUIRE: true,
            MAX: 11,
            MIN: 1,
        },
        ADDRESS: {
            REQUIRE: true,
            MAX: 255,
        },
        UNI: {
            REQUIRE: true,
            MAX: 100,
        },
        YEAR: {
            MAX: 20,
        },
        DEGREE: {
            MAX: 100,
        },
        MUNI: {
            REQUIRE: true,
            MAX: 100,
        },
        MYEAR: {
            MAX: 20,
        },
        MDEGREE: {
            MAX: 100,
        },
        DIPLOMA: {
            MAX: 100,
        },
        CERTIFICATE: {
            MAX: 100,
        },
        LANGUAGE: {
            MAX: 255,
        },
        INTERN: {
            MAX: 255,
        },
        JOBEXP: {
            MAX: 255,
        },
        EXPYEAR: {
            MAX: 3,
        },
    },
}

export default constants