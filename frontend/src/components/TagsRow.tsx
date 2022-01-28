import Text from './Text';

interface TagsRowProps {
    data: string[];
    className?: string;
}

const TagsRow: React.FC<TagsRowProps> = ({ data, className }) => {
    return (
        <div className={`flex ${className}`}>
            {data.map((hashtag: string, index: number) => (
                <Text
                    key={hashtag}
                    color='dark'
                    theme='code'
                    size='small'
                    className={index !== data.length - 1 ? 'mr-2' : undefined}
                >
                    #{hashtag}
                </Text>
            ))}
        </div>
    );
};

export default TagsRow;
