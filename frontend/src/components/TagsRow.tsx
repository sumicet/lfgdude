import Row from './Row';
import Text from './Text';

interface TagsRowProps {
    data: string[];
    className?: string;
}

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
