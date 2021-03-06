import Card from '../LobbyCard';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

interface GridProps {
    data: any;
    gap?: 4 | 2; // 20px or 10px
    className?: string;
}

const Grid = ({ data, gap = 4, className }: GridProps) => {
    setConfiguration({ breakpoints: [600, 850, 1000, 1250, 1600], gridColumns: 6 });

    return (
        <Container fluid className={`w-full ${className}`} style={{ padding: 0 }}>
            <Row
                gutterWidth={gap === 4 ? 20 : 10}
                className={gap === 4 ? 'mb-[-20px]' : 'mb-[-10px]'}
            >
                {data.map((lobby: any, index: number) => (
                    <Col key={`${index + 1}`} className='pb-4' xl={2} lg={3} md={3} sm={6} xs={6}>
                        <Card lobby={lobby} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Grid;
