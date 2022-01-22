import React, {Component} from 'react';
import {names} from "./names";
import Name from "./Name";
import './main.css'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: names,
        }
    }


    render() {
        return (
            <div className='container-fluid m-0 bg'>
                <div className="text-center fs-2 p-5  my-1">
                    <h1>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                </div>
                <div className="row">
                    {
                        this.state.name.map(d => (
                            <Name
                                number={d.number}
                                name={d.name}
                                transliteration={d.transliteration}
                                meaning={d.en.meaning}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Main