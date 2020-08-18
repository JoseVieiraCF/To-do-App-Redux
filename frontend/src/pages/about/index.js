import React from 'react';
import PageHeader from '../../template/pageHeader';

export default function About(props){
    return(
        <div>
            <PageHeader name='Sobre' small='Nós' />
            <h2> Our History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                 anim id est laborum.
            </p>
            <h2>Meet us</h2>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising 
                pain was born and I will give you a complete account of the system, and expound the actual 
                teachings of the great explorer of the truth, the master-builder of human happiness. No one 
                ejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do 
                not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it 
                is pain, but because occasionally circumstances occur in which toil and pain can procure him some
                 great pleasure. 
            </p>
        </div>
    );
}