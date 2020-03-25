import React from 'react';

import { Box, Image } from 'rebass'

import PetrImage from '../../petr.png'
import styles from './Petr.module.css'

const Petr = () => {
    return(
        <Box width={[ 1, 1, 1 / 2 ]}>
            <Image src={PetrImage} className={styles.petr}/>
        </Box>
    )
}

export default Petr