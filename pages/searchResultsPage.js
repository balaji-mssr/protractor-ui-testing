// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class programmePage extends BasePage {
    constructor() {
        super();
        this.searchResults = $('li.selected');
        this.searchResultFirstItem = $('#suggestion-0');
    }
}

export default new programmePage();