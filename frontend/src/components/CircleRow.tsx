import Circle from './Circle';

interface CircleRowProps {
    colored: number;
    gray: number;
}

const CircleRow: React.FC<CircleRowProps> = ({ colored, gray }) => {
    return (
        <div className='flex'>
            {colored &&
                [...Array(colored)].map((_: any, index: number) => (
                    <div className={!gray ? '' : 'mr-2'}>
                        <Circle color='accent' />
                    </div>
                ))}
            {gray &&
                [...Array(gray)].map((_: any, index: number) => (
                    <div className={index === gray - 1 ? '' : 'mr-2'}>
                        <Circle />
                    </div>
                ))}
        </div>
    );
};

export default CircleRow;
