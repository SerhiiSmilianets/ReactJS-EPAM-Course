import SearchBar from '../components/SearchBar';

export default {
    title: 'Example/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
        default: 'dark',
        },
    },
};

export const Default = {}

export const WithInitialValue = {
    args: {
        initialValue: "test search"
    }
};


