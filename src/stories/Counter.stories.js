import  Counter from '../components/Counter';

export default {
    title: 'GlobalMentoringProgram/Counter',
    component: Counter,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
        default: 'dark',
        },
    },
};

export const Default = {}

export const WithInitialCount = {
    args: {
        count: 5
    }
};


