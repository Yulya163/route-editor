import { render, screen } from '@testing-library/react';
import App from './app';
import { YMaps } from '@pbe/react-yandex-maps';

const fakeApp = (
    <YMaps> 
        <App/>
    </YMaps>
);

describe('Component: App', () => {
    it('it renders correctly', () => {
        render(fakeApp);
        expect(screen.getByPlaceholderText(/Новая точка маршрута/i)).toBeInTheDocument();       
    });    
    it('it displays a list of points', () => {
        render(fakeApp);
        expect(screen.getByTestId('points-list')).toBeInTheDocument();       
    });    
});