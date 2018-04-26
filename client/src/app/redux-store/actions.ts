export const ADD_TOPIC = 'ADD_TOPIC';

export function addTopicAction(topicText: String) {
    return {
        type: ADD_TOPIC,
        text: topicText
    }
}
