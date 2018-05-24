module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/?(*.)spec.ts'
  ],
  moduleFileExtensions: ['ts', 'js'],
}