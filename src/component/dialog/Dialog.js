import React from 'react';
import Modal from 'react-native-modal';
// import Modal from 'react-native-translucent-modal';

import PropTypes from 'prop-types';

export default class Dialog extends React.PureComponent {

    static propTypes = {
        show: PropTypes.bool,
        onShowListener: PropTypes.func,
        onHideListener: PropTypes.func,
        touchOutside2Cancel: PropTypes.bool,
        cancelByBackPress: PropTypes.bool,
        fillScreenOnWidth: PropTypes.bool
    };

    static defaultProps = {
        show: false
    };


    constructor(props) {
        super(props);

        //只在构造函数中处理不够
        this.state = {isShowing: props.show};
    }

    //需要在这个函数中 处理下
    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        //nice
        this.setState({isShowing: nextProps.show});
    }

    show = () => {
        if (!this.isShowing())
            this.setState({isShowing: true});
    };

    hide = () => {
        if (this.isShowing())
            this.setState({isShowing: false});
    };

    isShowing = () => this.state.isShowing === true;

    render(): React.ReactNode {
        const {onShowListener, onHideListener, touchOutside2Cancel, cancelByBackPress, fillScreenOnWidth, style} = this.props;

        return (
            <Modal
                isVisible={this.state.isShowing}
                backdropTransitionOutTiming={0}
                onBackButtonPress={() => {
                    if (cancelByBackPress === false) return;
                    this.hide();
                }}
                onBackdropPress={() => {
                    if (touchOutside2Cancel === false) return;
                    this.hide();
                }}
                onModalHide={onHideListener}
                onModalShow={onShowListener}

                {...this.props}

                style={[{
                    margin: fillScreenOnWidth === true ? 0 : null
                }, style]}
            >
                {this.props.children}
            </Modal>);
    }
}