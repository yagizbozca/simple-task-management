import { defaults } from "jest-config";

export default {
    testEnvironment: "node",
    clearMocks: true,
    extensionsToTreatAsEsm: [".ts"],
    transform: {
        "^.+\\.ts$": ["ts-jest", { useESM: true }],
    },
    roots: ["<rootDir>/src"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.ts"],
    coverageDirectory: "coverage",
};
