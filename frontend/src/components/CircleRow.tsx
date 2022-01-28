import Circle from './Circle';

interface CircleRowProps {
    colored: number;
    gray: number;
}

const CircleRow: React.FC<CircleRowProps> = ({ colored, gray }) => {
    return (
        <div className='flex bg-fuchsia-600'>
            {[...Array(colored)].map(() => (
                <div className='mr-2'>
                    <Circle color='accent' />
                </div>
            ))}
            {[...Array(gray)].map(() => (
                <div className='mr-2'>
                    <Circle />
                </div>
            ))}
        </div>
    );
};

export default CircleRow;
