## React-Native-Animated-Header-Image-Blur

```
this.state = {
  scrollY: new Animated.Value(0)
};
```

```
let imageHeight = this.state.scrollY.interpolate({
  inputRange: [0, IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT],
  outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
  extrapolate: 'clamp'
});

let imageBlur = this.state.scrollY.interpolate({
  inputRange: [0, IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT],
  outputRange: [0, 3],
  extrapolate: 'clamp'
});
```

```
<ScrollView onScroll={ Animated.event([
  { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
]) }>
```

All Code: App.js :)

![GIF](https://raw.githubusercontent.com/ugurdalkiran/React-Native-Animated-Header-Image-Blur/master/gif.gif)