export default class ChatMessage {

    constructor({ id = '', from = '', text = '', sent = false, attachments = [] } = {}) {
        this.id = id;
        this.from = from;
        this.text = text;
        this.sent = sent;
        this.attachments = attachments;
    }
}