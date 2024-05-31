import dotenv from 'dotenv';
dotenv.config();


const configuredEnvironmentVariable = () => {
    return process.env;
};

const configEnvVar = configuredEnvironmentVariable();
export default configEnvVar;