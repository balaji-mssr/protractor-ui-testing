// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class programmePage extends BasePage {
    constructor() {
        super();
        this.allLinks = $('li.selected');
        this.EastEndersMainLink = $('#search-content > ol > li:nth-child(1) > article > div > h1 > a');
        this.pageLoaded = this.and(
            this.hasText(this.allLinks, 'All'),
        );
    }
}

export default new programmePage();