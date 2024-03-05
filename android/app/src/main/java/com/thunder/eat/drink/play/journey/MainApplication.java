package com.thunder.eat.drink.play.journey;

import android.app.Application;

import com.thunder.eat.drink.play.journey.BuildConfig;
import com.facebook.react.ReactApplication;
import com.mf.translucentmodal.TranslucentModalPackage;
import com.rnimmersive.RNImmersivePackage;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.brentvatne.react.ReactVideoPackage;
import cn.qiuxiang.react.geolocation.AMapGeolocationPackage;
import cn.qiuxiang.react.amap3d.AMap3DPackage;
import com.beefe.picker.PickerViewPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.kishanjvaghela.cardview.RNCardViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.react.modules.network.ReactCookieJarContainer;
import  com.facebook.react.modules.network.OkHttpClientFactory;
import java.util.concurrent.TimeUnit;
import okhttp3.OkHttpClient;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new TranslucentModalPackage(),
            new RNImmersivePackage(),
            new ExtraDimensionsPackage(),
            new ReactSliderPackage(),
            new OrientationPackage(),
            new ReactVideoPackage(),
            new AMapGeolocationPackage(),
            new AMap3DPackage(),
            new PickerViewPackage(),
            new LinearGradientPackage(),
            new PickerPackage(),
            new BlurViewPackage(),
            new RNCardViewPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();

    setOkHttpClientFactory();

    SoLoader.init(this, /* native exopackage */ false);
  }

  //替换掉 fetch中默认的OkHttpClient实例
  //可以继续添加拦截器
  //https的验证管理
  //网上那些阿猫阿狗的搞法笑死人
  private void setOkHttpClientFactory(){

    OkHttpClientProvider.setOkHttpClientFactory(new OkHttpClientFactory(){
          @Override
          public OkHttpClient createNewNetworkModuleClient(){
                return new OkHttpClient.Builder()
                             .connectTimeout(10*1000, TimeUnit.MILLISECONDS)
                             .readTimeout(15*1000, TimeUnit.MILLISECONDS)
                             .writeTimeout(15*1000, TimeUnit.MILLISECONDS)
                             .cookieJar(new ReactCookieJarContainer())
                             .cookieJar(new ReactCookieJarContainer())
                             .build();
          }
      });
  }
}
