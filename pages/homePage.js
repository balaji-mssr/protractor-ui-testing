// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class homePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.bbc.co.uk/';
        this.siteTitle = $('.hp-banner__text');
        this.search = $('#orb-search-q');

        this.iPlayerNavigation = $('.orb-nav-iplayer');

        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'Welcome to the BBC'),
        );
    }
}

export default new homePage();