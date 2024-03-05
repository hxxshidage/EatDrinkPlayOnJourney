import React from 'react';

import {
    Rating
} from 'react-native-ratings';

import PropTypes from 'prop-types';

import {transparent, ratingBarColor} from '../../../assets/colors/Color';

//纯组件 带商榷
export default class RatingBar extends React.PureComponent {
    render(): React.ReactNode {
        const {
            count,
            justIndicator,
            rating,
            stepSize,
            ratingImgSource,
            onRatingChangeOver,
            ratingBgColor,
            ratingColor,
            size
        } = this.props;

        return (
            <Rating
                imageSize={size || 16}
                ratingColor={ratingColor || ratingBarColor}
                type={'custom'}
                ratingCount={count || 5}
                showRating={false}
                fractions={stepSize || 2}
                readonly={justIndicator === undefined}
                startingValue={rating || 0}
                reviews={null}
                ratingImage={ratingImgSource || require('../../../assets/images/common/rating_bar_nor.png')}
                ratingBackgroundColor={ratingBgColor || transparent}
                onFinishRating={onRatingChangeOver}/>
        );
    };

    static propTypes = {
        size: PropTypes.number,
        ratingBgColor: PropTypes.string,
        count: PropTypes.number,
        ratingImgSource: PropTypes.number,
        rating: PropTypes.number.isRequired,
        stepSize: PropTypes.number,
        onRatingChangeOver: PropTypes.func,
        justIndicator: PropTypes.bool,
        ratingColor: PropTypes.string
    };
}