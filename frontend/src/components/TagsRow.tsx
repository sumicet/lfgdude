import Row from './Row';
import Text from './Text';

interface TagsRowProps {
    data: string[];
    className?: string;
}

// pass a different height if you want more than 1 row
const TagsRow = ({ data, className }: TagsRowProps) => {
    return (
        <Row className={`h-[0.9rem] ${className}`}>
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
        </Row>
    );
};

export default TagsRow;
