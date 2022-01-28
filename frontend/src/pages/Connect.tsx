import { useEffect } from 'react';
import Text from '../components/Text';
import { useQuery } from '../hooks/useQuery';

interface ConnectProps {}

const Connect: React.FC<ConnectProps> = () => {
    const query = useQuery();

    useEffect(() => {
        const code = query.get('code');

        if (!code) {
            return;
        }

        const response = fetch('http://localhost:8000/api/discord_auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(code),
        });

        if (!response) {
            console.log('Tommy fucked up pepeHands');
        }

        console.log(code);
    }, [query]);

    return (
        <div className='flex'>
            <Text size='extra-large'>Connecting...</Text>
        </div>
    );
};

export default Connect;
