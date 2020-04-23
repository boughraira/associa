import React, {Component, useState, useEffect, useRef} from 'react';
import RootNavigator from './src/views/rootNavigator/rootNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SkypeIndicator} from 'react-native-indicators';
import {Provider as PaperProvider} from 'react-native-paper';
import {Colors} from './src/config';
/************************************************************* */
function Loader(props) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    handleLoad;
  }, []);
  return <SkypeIndicator color={Colors.textColor} animating={isLoading} />;
}
/************************************************************* */

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <PaperProvider>
            <RootNavigator />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
