import React from 'react';
import SubPlanCard from './SubPlanCard';
import styles from '../../scss/components/SubPlansGrid.module.scss';

function SubPlansGrid(props) {
    return (
        <div className={styles.subPlansGrid}>
            {props.product.plans.map((plan, index) => (
                <div className={styles.gridItem} key={index}>
                    <SubPlanCard 
                        product={props.product} 
                        plan={plan} 
                        id_token={props.id_token}
                    />
                </div>
            ))}
        </div>
    );
}

export default SubPlansGrid;