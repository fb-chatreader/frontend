import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/SubPlanCard.module.scss';

function SubPlanCard(props) {
    return (
        <div className={styles.subPlanCard}>
            <h3 className={styles.planNameText}>
                {props.plan.nickname}
            </h3> 
            <p className={styles.planPriceText}>
                {props.plan.amount}/
                {props.plan.interval_count > 1 ? (
                <span>
                    {props.plan.interval_count} {props.plan.interval}s
                </span>
                ) : (
                <span>{props.plan.interval}</span>
                )}
            </p>
            {props.plan.user_is_subscribed ? (
                <p>You are subscribed to this plan</p>
            ) : (
                props.id_token && 
                    <Link
                        exact
                        to={`/checkout/newsub/${props.id_token}/${props.plan.nickname}/${props.plan.id}`}
                    >
                        <button className={styles.selectPlanBtn}>
                            Select Plan
                        </button>
                    </Link>  
            )}
        </div>
    )
}

export default SubPlanCard;