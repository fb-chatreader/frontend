import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/components/SubPlanCard.module.scss';

function SubPlanCard(props) {
    return (
        <div className="planCard">
            <form action="/signUp" method="POST">
            <input
                hidden
                readOnly
                value={props.product.name}
                name="productName"
            />
            <input
                hidden
                readOnly
                value={props.plan.id}
                name="planId"
            />
            <input
                hidden
                readOnly
                value={props.plan.nickname}
                name="planName"
            />
            <input
                hidden
                readOnly
                value={props.plan.amount}
                name="planAmount"
            />
            <input
                hidden
                readOnly
                value={props.plan.interval}
                name="planInterval"
            />
            <input
                hidden
                readOnly
                value={props.plan.interval_count}
                name="planIntervalCount"
            />
            <h3>
                Plan: {props.plan.nickname} {props.plan.amount}/
                {props.plan.interval_count > 1 ? (
                <span>
                    {props.plan.interval_count} {props.plan.interval}s
                </span>
                ) : (
                <span>{props.plan.interval}</span>
                )}
            </h3>
            {props.plan.user_is_subscribed ? (
                <p>You are subscribed to this plan</p>
            ) : (
                <Link
                exact
                to={`/checkout/newsub/${props.id_token}/${props.plan.nickname}/${props.plan.id}`}
                >
                <button>Select Plan</button>
                </Link>
            )}
            </form>
        </div>
    )
}

export default SubPlanCard;