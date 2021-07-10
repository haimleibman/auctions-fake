import React from 'react';
import IAuction from '../models/auction.model';
import css from './Auction.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

function Auction(props: { auction: IAuction }) {
    let [isFlipped, setIsFlipped] = useState(false);

    const flip = () => setIsFlipped(prev => !prev);

    const toDate = (date: number) => new Date(date).toLocaleDateString();

    return (
        <div className={css.Auction}>
            <img src={props.auction.imageUrl} alt="auction" loading="lazy"/>

            <div className={classNames(css.card, {[css.flipped]: isFlipped})}>
                <div className={css.front}>
                    <div className={css.travel}>
                        {props.auction.outboundId}-{props.auction.inboundId}
                        
                        <div className={css.range}>
                            from {toDate(props.auction.startDate)} to {toDate(props.auction.endDate)}
                        </div>
                    </div>

                    <div className="viewers">
                        {props.auction.viewersCount} viewing this
                    </div>

                    <button className={css.more} onClick={flip}>
                        More details
                    </button>
                </div>

                <div  className={css.back} onClick={flip}>
                    <div className={css.original}>
                        original price {props.auction.currencySymbol}{props.auction.originalPrice}
                    </div>

                    <div className={css.price}>
                        now from {props.auction.currencySymbol}{props.auction.currentMinPrice}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auction;
