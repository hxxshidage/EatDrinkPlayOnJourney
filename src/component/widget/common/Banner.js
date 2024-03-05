import React from 'react';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

export default class Banner extends React.Component {
    render(): React.ReactNode {
        const {
            data,
            renderPageIndicator,
            renderPageItem,
            onPageSelected,
            pageIndicatorStyle,
            autoPlayInterval,
            loop,
        } = this.props;
        return (
            <Swiper
                showsPagination={renderPageIndicator !== undefined}
                {...this.props}
                loop={loop === true}
                horizontal={true}
                showsButtons={false}
                bounces={true}
                renderPagination={renderPageIndicator}
                paginationStyle={pageIndicatorStyle}
                onIndexChanged={onPageSelected}
                autoplay={autoPlayInterval && autoPlayInterval > 0}
                autoplayTimeout={autoPlayInterval}
                autoplayDirection={autoPlayInterval && autoPlayInterval > 0}>

                {data.map((item, idx) => {
                    const ele = renderPageItem(item, idx);
                    return ele && React.cloneElement(ele, {key: item.id ? item.id : idx.toString()});
                })}
            </Swiper>);
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        renderPageIndicator: PropTypes.func,
        renderPageItem: PropTypes.func.isRequired,
        pageIndicatorStyle: PropTypes.object,
        onPageSelected: PropTypes.func,
        loop: PropTypes.bool,
        autoPlayInterval: PropTypes.number,
    };
}
