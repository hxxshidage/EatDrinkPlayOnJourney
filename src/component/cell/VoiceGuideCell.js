import React from 'react';

import {
    View,
} from 'react-native';
import TextView from "../widget/common/TextView";
import TextWithIcon from "../widget/common/TextWithIcon";
import HorDivider from "../widget/common/HorDivider";
import ItemRightMore from "../widget/common/ItemRightMore";
import TouchFeedback from "../widget/common/TouchFeedback";

export default class VoiceGuideCell extends React.PureComponent {
    render(): React.ReactNode {
        return (
           <TouchFeedback
               {...this.props}
               opacityRadio={0.65}>
               <View
                   style={{paddingTop: 6, backgroundColor: '#fff',marginBottom:16}}>

                   <ItemRightMore
                       textSize={16}
                       text={"语音导览"}
                   />

                   <View style={{
                       flexDirection: 'row',
                       backgroundColor: '#F3F3F3',
                       padding: 8,
                       marginHorizontal: 10
                   }}>

                       <TextWithIcon
                           iconPadding={5}
                           direct={'t'}
                           imgSrc={require('../../assets/images/scenic/voice_play.png')}
                           text={'00:30:25'}
                       />

                       <View style={{flex: 1, justifyContent: "center", paddingLeft: 16}}>
                           < TextView
                               textSize={16}
                               text={'天下第一巷'}
                               textWeight={'bold'}
                               textColor={'#000'}
                           />
                           <TextView
                               text={'位于天下第一港区,全场5261米，两侧高于368米'}
                               textSize={12}
                               textColor={'#666'}
                           />
                       </View>
                   </View>

                   {/*  <HorDivider
                    margin={[24, 0, 0]}
                    height={8}
                />*/}

               </View>
           </TouchFeedback>
        );
    }
}