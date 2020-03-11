import React, {Component} from 'react';
import classNames from 'classnames';
import styles from '../Input/Input.module.scss';
import {mdiEyeOffOutline, mdiEyeOutline} from '@mdi/js';
import Icon from '@mdi/react';

class PasswordInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true,
    }
  }

  render () {
    const {field, form, meta: {error, touched}, ...props} = this.props;
    const {isHidden} = this.state;
    const inputClassName = classNames( styles.field, {
      [styles.fieldInvalid]: (touched && error),
      [styles.fieldValid]: (touched && !error),
    } );

    return (
      <label className={styles.container}>
        {props.label}
        <input {...field} className={inputClassName} {...props} type={isHidden
          ? 'password'
          : 'text'
        }/>
        <Icon onMouseDown={() => {
          this.setState({
                          isHidden: false,
                        })
        }} onMouseUp={() => {
          this.setState({
                          isHidden: true
                        })
        }} path={isHidden
          ? mdiEyeOutline
          : mdiEyeOffOutline} size={1}
        />
        {error && touched && <div className={styles.errorTip}>{error}</div>}
      </label>
    );
  }
}

export default PasswordInput;
