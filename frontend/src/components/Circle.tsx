interface CircleProps {
    color?: 'accent' | 'gray';
}

const Circle: React.FC<CircleProps> = ({ color = 'gray' }) => {
    return (
        <div
            className={`flex w-3 h-3 rounded-[100%] ${
                color === 'accent' ? 'bg-accent' : 'bg-extraLight'
            }`}
        ></div>
    );
};

export default Circle;
