import React, {Component} from 'react';


import ReactNipple  from 'react-nipple';
import 'react-nipple/lib/styles.css';
import './Joystick.css';

class Joystick extends Component {
    render() {
        return (
            <div >
                <ReactNipple className="Joystick-Container"
                    // supports all nipplejs options
                    // see https://github.com/yoannmoinet/nipplejs#options
                    options={{ mode: 'static', position: { top: '50%', left: '50%' }, color: '#474747'}}
                    // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
                    style={{
                        outline: '1px dashed red',
                        width: 150,
                        height: 150
                        // if you pass position: 'relative', you don't need to import the stylesheet
                    }}
                    // all events supported by nipplejs are available as callbacks
                    // see https://github.com/yoannmoinet/nipplejs#start
                    onMove={(evt, data) => console.log(evt, data)}
                />
            </div>
        );
    }
    test(sceneManager) {
        console.log(sceneManager);
    }
}

export default Joystick;