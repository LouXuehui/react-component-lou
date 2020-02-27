import React, {Component} from 'react'
import styles from './style/style.less'
import imgSrc from './assets/no_data.png'

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {top, message, shoeDefault, id} = this.props
        return (
            <div className={styles.noData} style={{
                marginTop: top ? top : '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#333'
            }} id={id ? id : 'noData'}>
                <img style={{
                    width: '160px',
                    verticalAlign: 'middle',
                    borderStyle: 'none'
                }} src={imgSrc}/>
                {this.props.children}
                {!message||shoeDefault ? <span style={{color:'#999'}} className={styles.msg}>暂无数据</span> : ''}
                {message ? <span style={{color:'#999'}} className={styles.msg}>{message}</span> : ''}
            </div>
        )
    }
}
