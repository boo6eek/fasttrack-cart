import {generatePath} from 'react-router-dom';
import {history} from '../store';

export const goToNotFound = () => history.push(generatePath('/not-found'));