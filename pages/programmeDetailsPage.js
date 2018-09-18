// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class programmeDetailsPage extends BasePage {
    constructor() {
        super();
        this.mastHeadTitle = $('.br-masthead__title a');
        this.NextEventPod = $('.b-g-p br-masthead__main.br-masthead__main--medium');
    }

    verifyNextEventDetails() {
        var nextEventDetails = $('.b-g-p br-masthead__main.br-masthead__main--medium');
        return nextEventDetails;
    }
}

export default new programmeDetailsPage();