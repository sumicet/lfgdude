import { useEffect } from 'react';
import Text from '../components/Text';
import { useQuery } from '../hooks/useQuery';

const Connect = () => {
    const query = useQuery();

    const sendCode = async (code: string) => {
        const response = await fetch('http://localhost:8000/api/discord_auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify('code='.concat(code)),
        });

        if (!response) {
            console.log('No reply from backend');
        }
    };

    useEffect(() => {
        const code = query.get('code');

        if (!code) {
            return;
        }

        sendCode(code);

        console.log(code);
    }, [query]);

    return (
        <div className='flex'>
            <Text size='extra-large'>Connecting...</Text>
        </div>
    );
};

export default Connect;
