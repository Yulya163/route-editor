import { render, screen } from '@testing-library/react';
import CreatePoint from './create-point';
import { YMaps } from '@pbe/react-yandex-maps';

describe('Component: CreatePoint', () => {
    it('should render correctly', () => { 
        render(
        <YMaps>
            <CreatePoint             
                onCreate={jest.fn()}        
            />
        </YMaps>
        );
        expect(screen.getByPlaceholderText(/Новая точка маршрута/i)).toBeInTheDocument();
    });
});