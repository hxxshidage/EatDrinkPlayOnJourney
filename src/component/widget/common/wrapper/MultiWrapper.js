/**
 * @Description: 处理多状态的组件 loading,empty,failed,normal
 * @author HQ
 * @date 2019/7/5 14:39
 */
import React from 'react';
import FillWrapper from './FillWrapper';
import PropTypes from 'prop-types';
import StatusWrapper from "./StatusWrapper";
import Loading from "../multi/Loading";
import Error from "../multi/Error";
import Empty from "../multi/Empty";


const EMPTY = 'empty';
const LOADING = 'loading';
const ERROR = 'error';
const NORMAL = 'normal';

export default class MultiWrapper extends React.PureComponent {

    state = {currentState: ERROR, hadLoaded: false};

    static propTypes = {
        renderContent: PropTypes.func,
        renderEmpty: PropTypes.func,
        renderError: PropTypes.func,
        renderLoading: PropTypes.func,
        // handleErrorAfterLoaded: PropTypes.func,
        onRetryAfterErrored: PropTypes.func
    };

    render(): React.ReactNode {

        return (
            <FillWrapper>
                {this._buildContentWithState()}
            </FillWrapper>
        );

    }

    _buildContentWithState = () => {
        const {renderContent, renderEmpty, renderError, renderLoading, onRetryAfterErrored} = this.props;
        switch (this.state.currentState) {
            case LOADING:
                return renderLoading ? renderLoading() : <Loading/>;
            case NORMAL:
                return renderContent && renderContent();
            case EMPTY:
                return renderEmpty ? renderEmpty() : <Empty/>;
            case ERROR:
                return renderError ? renderError() :
                    (<Error
                        onRetry={() => {
                            this.showLoading();
                            onRetryAfterErrored && onRetryAfterErrored();
                        }}
                    />);
        }
    };


    showLoading = () => {
        this.setState({currentState: LOADING});
    };

    showContent = () => {
        //已经被加载过
        this.setState({currentState: NORMAL, handLoaded: true});
    };

    showError = () => {
        // const {handleErrorAfterLoaded} = this.props;
        //已加载过且当前处于内容显示状态  不显示Error
        if (this.state.hadLoaded && this.state.currentState === NORMAL) {
            //将错误丢出去处理
            // handleErrorAfterLoaded && handleErrorAfterLoaded();
            return false;
        }
        this.setState({currentState: ERROR});

        return true;
    };

    showEmpty = () => {
        this.setState({currentState: EMPTY});
    };

}