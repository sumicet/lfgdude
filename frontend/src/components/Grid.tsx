import Card from './Card';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';

interface GridProps {
    data: any;
    gap?: 4 | 2; // 20px or 10px
    className?: string;
}

const Grid: React.FC<GridProps> = ({ data, gap = 4, className }) => {
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
        // <div className={`flex-wrap flex-row flex-1 ${className}`}>
        //     {data.map((lobby: any, index: number) => (
        //         <div key={`${index + 1}`} className={`w-full h-fit ${gap === 4 ? 'mx-2' : 'mx-1'}`}>
        //             <Card lobby={lobby} />
        //         </div>
        //     ))}
        // </div>
    );
};

export default Grid;
