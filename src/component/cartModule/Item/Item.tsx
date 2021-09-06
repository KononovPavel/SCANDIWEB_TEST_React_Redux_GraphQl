import React, {Component} from 'react';
import styles from './Item.module.css'
import {productType} from "../../../redux/reducers/productListReducer";

type PropsType = {
    item: productType,
    currentCurrency: number
}

class Item extends Component<PropsType> {

    getCurrentCurrencySymbol(currency: number): any {
        if (currency === 0) return <span>&#65284;</span>;
        if (currency === 1) return <span>&#163;</span>
        if (currency === 2) return <span>&#8371;</span>
        if (currency === 3) return <span>&#165;</span>
        if (currency === 4) return <span>&#8381;</span>
        return <span>&#65284;</span>
    }

    getCurrentAmount(count: number, amount: number): number {
        if (count === 0) return 0
        return count * amount
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.item}>
                    <div>
                        <span className={styles.text}>{this.props.item.brand}</span><br/>
                        <span className={styles.text}>{this.props.item.name}</span>
                        <p className={styles.price}>{this.getCurrentCurrencySymbol(this.props.currentCurrency)}{this.getCurrentAmount(this.props.item.count, this.props.item.prices[this.props.currentCurrency].amount)}</p>
                        <div>
                            {this.props.item.currentAttributes
                                ? this.props.item.currentAttributes.map((item: any) => <div
                                    className={styles.displayValue}
                                    style={{background: item.value ? item.value : ''}}
                                >{item.displayValue}
                                </div>)
                                : ''
                            }
                        </div>
                    </div>
                    <div className={styles.settings_Photo}>
                        <div className={styles.counter}>
                            <div className={styles.change}>
                                +
                            </div>
                            <div className={styles.count}>
                                1
                            </div>
                            <div className={styles.change}>
                                -
                            </div>
                        </div>
                        <div><img src={this.props.item.gallery[0]} alt="" width={105} height={137}/></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Item;
