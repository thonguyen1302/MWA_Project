import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './state';

export const ADD_TOPIC = 'ADD_TOPIC';

@Injectable()
export class ComponentActions{

    constructor (private ngRedux: NgRedux<IAppState>){}

    addTopicAction(topicText: String){
        this.ngRedux.dispatch({
            type: ADD_TOPIC,
            text: topicText 
        })
        // return {
        //     type: ADD_TOPIC,
        //     text: topicText 
        // }
    }
}