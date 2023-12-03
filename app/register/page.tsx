import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Your redirect logic here
  return {
    redirect: {
      destination: 'https://youtube.com',
      permanent: false,
    },
  };
};

const RegisterPage = () => {
  return <p>Redirecting...</p>;
};

export default RegisterPage;