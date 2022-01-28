import Card from './Card';

interface GridProps {
    data: any;
    gap?: 4 | 2; // 20px or 10px
    className?: string;
}

const Grid: React.FC<GridProps> = ({ data, gap = 4, className = '' }) => {
    return (
        <div className={`flex flex-1 ${className}`}>
            {data.map((lobby: any, index: number) => (
                <div className={`w-full h-fit ${gap === 4 ? 'mx-2' : 'mx-1'}`}>
                    <Card key={`${index + 1}`} lobby={lobby} />
                </div>
            ))}
        </div>
    );
};

export default Grid;
